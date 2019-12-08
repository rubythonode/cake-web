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
  {
    current: 1,
    desc: '시험 공부',
    id: '507f1f77bcf86cd799439011',
    max: 3,
    name: '방과후 교실',
    times: ['야자 1타임', '야자 2타임'],
  },
  {
    current: 1,
    desc: '음악 녹음',
    id: '507f1f77bcf86cd799439011',
    max: 1,
    name: '크리에이티브 스튜디오',
    times: ['야자 1타임'],
  },
];

const Container = styled.div``;

const CardList = styled.div`
  display: grid;
  display: grid;
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
`;

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
