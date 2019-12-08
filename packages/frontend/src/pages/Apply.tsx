import * as React from 'react';
import Switch, { Case } from 'react-switch-case';
import styled from 'styled-components';

import Layout from '../components/Layout';
import PlaceCard from '../components/PlaceCard';
import Title from '../components/Title';

const PlaceCardList = styled.div`
  display: flex;
  margin-top: 4.5rem;
`;

type ApplyProps = {

};

type ApplyState = {
  location: string;
  step: number;
};

export default class Apply extends React.Component<ApplyProps, ApplyState> {
  constructor(props: ApplyProps) {
    super(props);

    this.state = {
      location: '',
      step: 0,
    };
  }

  public onClickNext() {
    this.setState(prevState => ({
      step: prevState.step + 1,
    }));
  }

  public onClickCard(location: string) {
    this.setState({
      location,
    });
    this.onClickNext();
  }

  public render() {
    const { step } = this.state;
    return (
      <Layout tabIdx={1}>
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
        </Switch>
      </Layout>
    );
  }
}
