import * as React from 'react';
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

};

export default class Apply extends React.Component<ApplyProps, ApplyState> {
  constructor(props: ApplyProps) {
    super(props);
  }

  public render() {
    return (
      <Layout tabIdx={1}>
        <Title>공간 선택</Title>
        <PlaceCardList>
          <PlaceCard name="본관" image="main.png" />
          <PlaceCard name="신관" image="new.png" />
        </PlaceCardList>
      </Layout>
    );
  }
}
