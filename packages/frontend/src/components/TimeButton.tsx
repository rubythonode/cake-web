import * as React from 'react';
import styled, { css } from 'styled-components';

import Time from './Time';

interface IStyledButtonProps {
  selected: boolean;
}

const StyledButton = styled(Time)<IStyledButtonProps>`
  ${({ selected }) => selected && css`
    background-color: #505050;
    color: white;
  `};
`;

interface ITimeButtonProps {
  time: string;
  selected: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => any;
}

const TimeButton: React.FC<ITimeButtonProps> = ({ time, selected, onClick }) => (
  <StyledButton selected={selected} onClick={onClick}>
    {time}
  </StyledButton>
);

export default TimeButton;
