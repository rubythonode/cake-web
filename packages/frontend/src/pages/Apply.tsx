import * as React from 'react';
import Switch, { Case, Default } from 'react-switch-case';
import styled from 'styled-components';

import Button from '../components/Button';
import Layout from '../components/Layout';
import NumberInput from '../components/NumberInput';
import PlaceCard from '../components/PlaceCard';
import Title from '../components/Title';

import goback from '../assets/shared/goback.svg';

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
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormName = styled.h2`
`;

const FormValue = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

type ApplyProps = {

};

type ApplyState = {
  location: string;
  room: string;
  step: number;
};

export default class Apply extends React.Component<ApplyProps, ApplyState> {
  constructor(props: ApplyProps) {
    super(props);

    this.state = {
      location: '',
      room: '',
      step: 2,
    };

    this.onClickBack = this.onClickBack.bind(this);
    this.onClickCard = this.onClickCard.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickRoom = this.onClickRoom.bind(this);
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
      room,
    });
    this.onClickNext();
  }

  public render() {
    const { step } = this.state;
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
            <SubmitButton onClick={() => this.onClickRoom('')}>
              선택하기
            </SubmitButton>
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
                    <NumberInput value={2019} />년&nbsp;
                    <NumberInput value={1} />월&nbsp;
                    <NumberInput value={1} />일
                  </FormValue>
                </FormField>
                <FormField>
                  <FormName>시간</FormName>
                </FormField>
              </FormRow>
              <FormRow>
                <FormField>
                  <FormName>대표자</FormName>
                </FormField>
                <FormField>
                  <FormName>이용자 수</FormName>
                </FormField>
                <FormField>
                  <FormName>방 이름</FormName>
                </FormField>
              </FormRow>
              <FormRow>
                <FormField>
                  <FormName>신청 목적</FormName>
                </FormField>
              </FormRow>
              <SubmitButton>
                신청하기
              </SubmitButton>
            </Form>
          </Default>
        </Switch>
        </Container>
      </Layout>
    );
  }
}
