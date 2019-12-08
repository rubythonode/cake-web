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
    current: 6,
    desc: '하텍 동아리 연습',
    id: '507f1f77bcf86cd799439011',
    max: 7,
    name: '음악실',
    times: ['야자 1타임'],
  },
  {
    current: 1,
    desc: '음악 녹음',
    id: '507f1f77bcf86cd799439011',
    max: 1,
    name: '크리에이티브 스튜디오',
    times: ['야자 1타임'],
  },
  {
    current: 1,
    desc: '개발자 구조 요청',
    id: '507f1f77bcf86cd799439011',
    max: 1,
    name: '멀티미디어실',
    times: ['야자 2타임'],
  },
  {
    current: 3,
    desc: '토론 연습',
    id: '507f1f77bcf86cd799439011',
    max: 3,
    name: '세미나실',
    times: ['야자 1타임'],
  },
];

const Container = styled.div`
  width: 86%;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
`;

const Tools = styled.span`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  padding: 1rem 2rem;
`;

const Filter = styled.span`
`;

const Search = styled.span`
`;

const CardList = styled.div`
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, auto));
`;

const Home: React.FC = () => {
  return (
    <Layout tabIdx={0}>
      <Container>
        <Title>2019년 12월 6일</Title>
        <Tools>
          <Filter>시간순 정렬</Filter>
          <Search>검색하기</Search>
        </Tools>
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
