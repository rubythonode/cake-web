import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Switch, { Case, Default } from 'react-switch-case';
import styled from 'styled-components';
import timestamp from 'unix-timestamp';

import api from '../api';
import { rooms as roomCodes, timetable } from '../tiramisu';

import Button from '../components/Button';
import DialogModal from '../components/DialogModal';
import Layout from '../components/Layout';
import NumberInput from '../components/NumberInput';
import PlaceCard from '../components/PlaceCard';
import TextInput from '../components/TextInput';
import Title from '../components/Title';

import MainMap from '../components/map/MainMap';
import NewMap from '../components/map/NewMap';

import goback from '../assets/shared/goback.svg';
import TimeButton from '../components/TimeButton';

const Container = styled.div`
  height: calc(100vh - 66.6319px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepTitle = styled(Title)`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const PlaceCardList = styled.div`
  display: flex;
  margin-top: 4.5rem;
`;

const GoBack = styled.img`
  position: absolute;
  top: 0;
  left: 5rem;
  bottom: 0;
  width: 18px;
  height: 34.7px;
  object-fit: contain;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  width: 377px;
  z-index: 9;
`;

const Form = styled.div`
  width: 80%;
  padding: 2.5rem 3.8rem;
  border-radius: 23px;
  box-shadow: 0 3px 17px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormFieldDesc = styled(FormField)`
  width: 100%;
  margin-bottom: 1rem;
`;

const FormName = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: 2.64px;
  margin: 0;
  margin-bottom: 1rem;
`;

const FormValue = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

const FormTextInput = styled(TextInput)`
  border-radius: 28px;
  border: solid 1px #707070;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  box-shadow: none;
  width: unset;
  line-height: 1.46;
  letter-spacing: 2.21px;
`;

const FormTextInputPin = styled(FormTextInput)`
  width: 169px;
  margin-left: 0.3rem;
`;

const FormTextInputName = styled(FormTextInput)`
  width: 445px;
`;

const FormTextInputDesc = styled(FormTextInput)`
  width: 100%;
`;

type ApplyState = {
  location: string;
  openDialog: boolean;
  room: string;
  step: number;

  year: number;
  month: number;
  day: number;
  max: number;
  name: string;
  pin: string;
  desc: string;
  times: [string];
};

class Apply extends React.Component<RouteComponentProps, ApplyState> {
  constructor(props: RouteComponentProps) {
    super(props);

    const today = new Date();

    this.state = {
      location: '',
      openDialog: false,
      room: '',
      step: 0,

      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear(),

      desc: '',
      max: 1,
      name: '',
      pin: '',
      times: ['afsc1'],
    };

    this.onClickApply = this.onClickApply.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
    this.onClickCard = this.onClickCard.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickRoom = this.onClickRoom.bind(this);
    this.onOpenDialog = this.onOpenDialog.bind(this);
    this.onToggleTime = this.onToggleTime.bind(this);
    this.onCloseDialog = this.onCloseDialog.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public async onClickApply() {
    const { year, room, month, day, max, name, desc, pin, times } = this.state;
    const payload = {
      desc,
      max,
      name,
      pin,
      room,
      times,
      date: timestamp.fromDate(new Date(year, month - 1, day)),
    };
    try {
      await api.post('/room', payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      this.onOpenDialog();
    } catch (err) {
      // window.alert(err);
      console.error(err);
    }
  }

  public onClickBack() {
    this.setState(prevState => ({
      step: prevState.step - 1,
    }));
  }

  public onClickCard(location: string) {
    this.setState({
      location,
    });
    this.onClickNext();
  }

  public onClickNext() {
    this.setState(prevState => ({
      step: prevState.step + 1,
    }));
  }

  public onClickRoom(room: string) {
    this.setState({
      // @ts-ignore
      room: roomCodes[room],
    });
    this.onClickNext();
  }

  public onToggleTime(time: string) {
    const { times } = this.state;
    if (times.includes(time)) {
      this.setState((prevState: any) => ({
        times: prevState.times.filter((item: any) => item !== time),
      }));
    } else {
      // @ts-ignore
      this.setState((prevState: any) => ({
      // @ts-ignore
        times: [...prevState.times, time],
      // @ts-ignore
      }));
    }
  }

  public onOpenDialog() {
    this.setState({
      openDialog: true,
    });
  }

  public onCloseDialog() {
    const { history } = this.props;
    this.setState({
      openDialog: false,
    });
    history.push('/');
  }

  public handleChange(event: React.SyntheticEvent) {
    event.persist();
    const { value, name }: { value: string, name: string } = event.target as HTMLInputElement;

    this.setState({
      [name]: value,
    } as any);
  }

  public render() {
    const { openDialog, step, year, month, day, max, name, pin, desc, times } = this.state;
    return (
      <Layout tabIdx={1}>
        <Container>
          <Switch condition={step}>
          <Case value={0}>
            <Title>공간 선택</Title>
            <PlaceCardList>
              <PlaceCard
                name="본관"
                onClick={() => this.onClickCard('본관')}
                image="main.png"
              />
              <PlaceCard
                name="신관"
                onClick={() => this.onClickCard('신관')}
                image="new.png"
              />
            </PlaceCardList>
          </Case>
          <Case value={1}>
            <StepTitle>
              <GoBack src={goback} onClick={this.onClickBack} />
              공간 선택
            </StepTitle>
            {(() => {
              const { location } = this.state;
              return (location === '본관') ?
                <MainMap onClickRoom={this.onClickRoom} /> :
                <NewMap onClickRoom={this.onClickRoom} />;
            })()}
          </Case>
          <Default>
            <StepTitle>
              <GoBack src={goback} onClick={this.onClickBack} />
              사용 신청서 작성
            </StepTitle>
            <Form>
              <FormRow>
                <FormField>
                  <FormName>날짜</FormName>
                  <FormValue>
                    <NumberInput
                      name="year"
                      value={year}
                      onChange={this.handleChange}
                      long={true}
                    />년&nbsp;
                    <NumberInput
                      name="month"
                      value={month}
                      onChange={this.handleChange}
                    />월&nbsp;
                    <NumberInput
                      name="day"
                      value={day}
                      onChange={this.handleChange}
                    />일
                  </FormValue>
                </FormField>
                <FormField>
                  <FormName>시간</FormName>
                  <FormValue>
                    {timetable.map((t: { name: string, code: string }, idx: number) => (
                      <TimeButton
                        time={t.name}
                        selected={times.includes(t.code)}
                        key={`time-${idx}`}
                        onClick={() => this.onToggleTime(t.code)}
                      />
                    ))}
                  </FormValue>
                </FormField>
              </FormRow>
              <FormRow>
                <FormField>
                  <FormName>방 가입 PIN</FormName>
                  <FormValue>
                    <FormTextInputPin
                      name="pin"
                      value={pin}
                      onChange={this.handleChange}
                      placeholder="4자리 PIN"
                    />
                  </FormValue>
                </FormField>
                <FormField>
                  <FormName>이용자 수</FormName>
                  <FormValue>
                    <NumberInput
                      name="max"
                      value={max}
                      onChange={this.handleChange}
                    />명
                  </FormValue>
                </FormField>
                <FormField>
                  <FormName>방 이름</FormName>
                  <FormValue>
                    <FormTextInputName
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      placeholder="10자 이내로 작성해주세요."
                    />
                  </FormValue>
                </FormField>
              </FormRow>
              <FormRow>
                <FormFieldDesc>
                  <FormName>신청 목적</FormName>
                  <FormValue>
                    <FormTextInputDesc
                      name="desc"
                      value={desc}
                      onChange={this.handleChange}
                      placeholder="30자 이내로 작성해주세요."
                    />
                  </FormValue>
                </FormFieldDesc>
              </FormRow>
              <SubmitButton onClick={this.onClickApply}>
                신청하기
              </SubmitButton>
            </Form>
          </Default>
        </Switch>
        </Container>
        <DialogModal
          isOpen={openDialog}
          onRequestClose={this.onCloseDialog}
          message="신청이 완료되었습니다."
        />
      </Layout>
    );
  }
}

export default withRouter<RouteComponentProps<any>, any>(Apply);
