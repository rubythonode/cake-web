import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import api from '../api';

import DialogModal from '../components/DialogModal';
import Layout from '../components/Layout';
import RoomCard from '../components/RoomCard';
import RoomModal from '../components/RoomModal';

import filter from '../assets/shared/filter.svg';
import goback from '../assets/shared/goback.svg';
import gofront from '../assets/shared/gofront.svg';
import search from '../assets/shared/search.svg';

const Container = styled.div`
  width: 86%;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.img`
  width: 20px;
  height: 46px;
  object-fit: contain;
  object-position: top;
  cursor: pointer;
`;

const Title = styled.h1`
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  width: fit-content;
  font-size: 2.9rem;
  font-weight: normal;
  line-height: 1.31;
  letter-spacing: 4.17px;
  margin: 1rem 5rem;
  margin-bottom: 2rem;
`;

const Bold = styled.span`
  font-weight: 900;
`;

const Tools = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  padding: 1rem 2rem;
`;

const Filter = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const FilterIcon = styled.img`
  width: 17px;
  height: 15px;
  object-fit: contain;
  margin-right: 0.8rem;
`;

const Search = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  width: 22.6px;
  height: 23.4px;
  object-fit: contain;
  margin-right: 0.8rem;
`;

const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, auto));
`;

interface IRoom {
  times: [string];
  users: [string];
  desc: string;
  max: number;
  name: string;
  room: string;
  date: number;
  id: string;
}

type HomeState = {
  badMessage: string;
  openBadDialog: boolean,
  openDialog: boolean,
  openModal: boolean,
  room: any,
  rooms: any,
  user: any,
  pin: string,
};

class Home extends React.Component<RouteComponentProps, HomeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      badMessage: '',
      openBadDialog: false,
      openDialog: false,
      openModal: false,
      pin: '',
      room: {
        desc: '',
      },
      rooms: [],
      user: {
        grade: 0,
        klass: 0,
        name: '',
      },
    };

    this.onClickJoin = this.onClickJoin.bind(this);
    this.onCompletePin = this.onCompletePin.bind(this);
    this.onToggleBadDialog = this.onToggleBadDialog.bind(this);
    this.onCloseBadDialog = this.onCloseBadDialog.bind(this);
    this.onToggleDialog = this.onToggleDialog.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);

    if (!localStorage.getItem('token')) {
      const { history } = this.props;
      history.push('/login');
    }
  }

  public async componentDidMount() {
    try {
      const { data: { rooms } } = await api.get('/room', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      this.setState({
        rooms: rooms.map(({ users, desc, id, max, name, times }: IRoom) => ({
          desc,
          id,
          max,
          name,
          times,
          current: users.length,
        })),
      });
    } catch (err) {
      // window.alert(err);
      console.error(err);
    }
  }

  public async onClickJoin() {
    const { room, pin } = this.state;
    if (room.users.includes(JSON.parse(localStorage.getItem('user')).uid)) {
      this.onToggleBadDialog('이미 참가한 방입니다.');
      return;
    }

    if (!pin) {
      this.onToggleBadDialog('PIN을 입력해주세요.');
      return;
    }

    try {
      await api.post(`/room/${room.id}`, { pin }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      this.onCloseModal();
      this.onToggleDialog();
    } catch (err) {
      this.onToggleBadDialog('잘못된 PIN을 입력했습니다.');
    }
  }

  public onCompletePin(value: any, _: any) {
    this.setState({
      pin: value,
    });
  }

  public onToggleBadDialog(badMessage: string) {
    this.setState(prevState => ({
      badMessage,
      openBadDialog: !prevState.openBadDialog,
    }));
  }

  public onCloseBadDialog() {
    this.setState({
      openBadDialog: false,
    });
  }

  public onToggleDialog() {
    this.setState(prevState => ({
      openDialog: !prevState.openDialog,
    }));
  }

  public async onOpenModal(roomID: string) {
    const { data: { room } } = await api.get(`/room/${roomID}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    this.setState({
      room,
      openModal: true,
    });
  }

  public onCloseModal() {
    this.setState({
      openModal: false,
    });
  }

  public render() {
    const { badMessage, room, rooms, openBadDialog, openDialog, openModal } = this.state;

    return (
      <Layout tabIdx={0}>
        <Container>
          <Header>
            <Arrow src={goback} />
            <Title>2019년 <Bold>12</Bold>월 <Bold>6</Bold>일</Title>
            <Arrow src={gofront} />
          </Header>
          <Tools>
            <Filter>
              <FilterIcon src={filter} />
              시간순 정렬
            </Filter>
            <Search>
              <SearchIcon src={search} />
              검색하기
            </Search>
          </Tools>
          <CardList>
            {rooms.map((r: any, idx: number) =>
              <RoomCard
                key={idx}
                onClick={() => this.onOpenModal(r.id)}
                {...r}
              />,
            )}
          </CardList>
        </Container>
        <RoomModal
          isOpen={openModal}
          onClick={this.onClickJoin}
          onComplete={this.onCompletePin}
          onRequestClose={this.onCloseModal}
          room={room}
        />
        <DialogModal
          isOpen={openDialog}
          onRequestClose={this.onToggleDialog}
          message="참가 되었습니다."
        />
        <DialogModal
          isOpen={openBadDialog}
          onRequestClose={this.onCloseBadDialog}
          message={badMessage}
        />
      </Layout>
    );
  }
}

export default withRouter<RouteComponentProps<any>, any>(Home);
