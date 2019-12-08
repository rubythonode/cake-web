import * as React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import RoomCard, { IRoomCardProps } from '../components/RoomCard';

import filter from '../assets/shared/filter.svg';
import goback from '../assets/shared/goback.svg';
import gofront from '../assets/shared/gofront.svg';
import search from '../assets/shared/search.svg';

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
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Home: React.FC = () => {
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
          {exampleCardsData.map((room: IRoomCardProps, idx: number) =>
            <RoomCard key={idx} {...room} />,
          )}
        </CardList>
      </Container>
    </Layout>
  );
};

export default Home;
