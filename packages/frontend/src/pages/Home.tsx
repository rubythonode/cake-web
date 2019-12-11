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

const exampleRoomData = {
  delegate: '이혜원',
  desc: '교내에서 진행하는 창의 IT대회를 준비하기 위해 사용합니다.\n민승현, 변경민, 여준호\n빨리 참가하세요~!!!!\n비밀번호는 톡방에 올려뒀어요~~',
};

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
  openDialog: boolean,
  openModal: boolean,
  rooms: any,
};

class Home extends React.Component<RouteComponentProps, HomeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      openDialog: false,
      openModal: false,
      rooms: [],
    };

    this.onClickApply = this.onClickApply.bind(this);
    this.onToggleDialog = this.onToggleDialog.bind(this);
    this.onToggleModal = this.onToggleModal.bind(this);

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
      window.alert(err);
    }
  }

  public onClickApply() {
    this.onToggleModal();
    this.onToggleDialog();
  }

  public onToggleDialog() {
    this.setState(prevState => ({
      openDialog: !prevState.openDialog,
    }));
  }

  public onToggleModal() {
    this.setState(prevState => ({
      openModal: !prevState.openModal,
    }));
  }

  public render() {
    const { rooms, openDialog, openModal } = this.state;
    console.log(rooms);

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
            {rooms.map((room: any, idx: number) =>
              <RoomCard
                key={idx}
                onClick={this.onToggleModal}
                {...room}
              />
            )}
          </CardList>
        </Container>
        <RoomModal
          isOpen={openModal}
          onClick={this.onClickApply}
          onRequestClose={this.onToggleModal}
          room={exampleRoomData}
        />
        <DialogModal
          isOpen={openDialog}
          onRequestClose={this.onToggleDialog}
          message="참가 되었습니다."
        />
      </Layout>
    );
  }
}

export default withRouter<RouteComponentProps<any>, any>(Home);
