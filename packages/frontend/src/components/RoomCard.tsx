import * as React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
  height: 320px;
  width: 320px;
  border-radius: 23px;
  box-shadow: 0 3px 17px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 39px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

const TimeList = styled.div`
`;

const Time = styled.span`
  border-radius: 37px;
  border: solid 1px #505050;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.31;
  letter-spacing: 1.36px;
  color: #505050;
  padding: 0.2rem 1.1rem;
`;

const Name = styled.h1`
  font-size: 39px;
  font-weight: 900;
  margin-top: 7px;
`;

const Desc = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.31;
  letter-spacing: 1.36px;
`;

const StatusButton = styled(Button)`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 12px;
  padding-left: 12px;
  width: 173px;
  height: 61px;
  margin: 0 auto;
`;

export type IRoomCardProps = {
  id: string;
  times: string[];
  name: string;
  desc: string;
  current: number;
  max: number;
};

const RoomCard: React.FC<IRoomCardProps> = ({ id, times, name, desc, current, max }) => {
  return (
    <Container>
      <Wrapper>
        <TimeList>
          {times.map((time: string, idx: number) => {
            return (
              <Time key={`time-${id}-${idx}`}>
                {time}
              </Time>
            );
          })}
        </TimeList>
        <Name>{name}</Name>
        <Desc>{desc}</Desc>
        <StatusButton>{`${current} / ${max}`}</StatusButton>
      </Wrapper>
    </Container>
  );
};

export default RoomCard;
