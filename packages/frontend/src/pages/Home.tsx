import * as React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import RoomCard, { IRoomCardProps } from '../components/RoomCard';

const exampleCardsData: IRoomCardProps[] = [
  {
    current: 2,
    desc: '대회 준비',
    id: '507f1f77bcf86cd799439011',
    max: 4,
    name: '방과후 교실',
    times: ['방과후 1타임'],
  },
];

const Container = styled.div``;

const CardList = styled.div``;

const Home: React.FC = () => {
  return (
    <Layout tabIdx={0}>
      <Container>
        <CardList>
          {exampleCardsData.map((room: IRoomCardProps, idx: number) =>
            <RoomCard key={idx} {...room} />,
          )}
        </CardList>
      </Container>
    </Layout>
  );
};

export default Home;
