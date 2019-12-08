import { History } from 'history';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Button from './Button';

const Container = styled.div`
  height: 320px;
  width: 320px;
  border-radius: 23px;
  box-shadow: 0 3px 17px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 39px 0;
  position: relative;
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
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.31;
  letter-spacing: 1.36px;
  color: #505050;
  padding: 0.2rem 0.8rem;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const Name = styled.h1`
  font-size: 2.2rem;
  font-weight: 900;
  margin-top: 0.8rem;
  word-break: keep-all;
  line-height: 1.2;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 39px;
  left: 0;
  right: 0;
  align-items: center;
`;

const Desc = styled.p`
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.31;
  letter-spacing: 1.36px;
  margin: 0;
  margin-bottom: 1.5rem;
`;

type StatusButtonProps = {
  full: boolean;
};

const StatusButton = styled(Button)<StatusButtonProps>`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 8px;
  padding-left: 8px;
  width: 173px;
  height: 61px;
  margin: 0 auto;
  line-height: 1;

  ${({ full }) => full && css`
    border-radius: 37px;
    border: solid 1px #ff00aa;
    background: #ffffff !important;
    color: #ff00aa;
  `}
`;

export interface IRoomCardProps {
  id: string;
  times: string[];
  name: string;
  desc: string;
  current: number;
  max: number;
  history?: History;
}

const RoomCard: React.FC<IRoomCardProps> = ({ id, times, name, desc, current, max, history }) => {
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
        <BottomContainer>
          <Desc>{desc}</Desc>
          <StatusButton full={current === max}>
            {`${current} / ${max}`}
          </StatusButton>
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};

export default withRouter(RoomCard as any);
