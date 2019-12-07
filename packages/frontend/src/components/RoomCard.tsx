import * as React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
`;

const TimeList = styled.div`
`;

const Time = styled.span`
`;

const Name = styled.h1`
`;

const Desc = styled.p`
`;

const StatusButton = styled(Button)`
  letter-spacing: 17.59px;
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
    </Container>
  );
};

export default RoomCard;
