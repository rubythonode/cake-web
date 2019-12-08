import * as React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import PlaceCard from '../components/PlaceCard';
import Title from '../components/Title';

const Container = styled.div`
`;

const PlaceCardList = styled.div`
  display: flex;
`;

type ApplyProps = {

};

type ApplyState = {

};

export default class Apply extends React.Component<ApplyProps, ApplyState> {
  constructor(props: ApplyProps) {
    super(props);
  }

  public render() {
    return (
      <Layout tabIdx={1}>
        <Container>
          <Title>공간 선택</Title>
          <PlaceCardList>
            <PlaceCard name="본관" image="main.png" />
            <PlaceCard name="신관" image="new.png" />
          </PlaceCardList>
        </Container>
      </Layout>
    );
  }
}
