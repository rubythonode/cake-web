import * as React from 'react';
import styled, { css } from 'styled-components';

type ISelectedProps = {
  selected: boolean;
};

const StyledButton = styled.button<ISelectedProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 34px;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  cursor: pointer;

  ${({ selected }) => selected && css`
    background-color: #505050;
  `}
`;

const Text = styled.span<ISelectedProps>`
  font-size: 1.8rem;
  line-height: 1.33;
  letter-spacing: 2.81px;
  color: #505050;

  ${({ selected }) => selected && css`
    color: #ffffff;
  `}
`;

interface IRoundButtonProps {
  value: string;
  selected: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => any;
}

const RoundButton: React.FC<IRoundButtonProps> = ({ value, selected, onClick }) => (
  <StyledButton
    selected={selected}
    onClick={onClick}
  >
    <Text selected={selected}>
      {value}
    </Text>
  </StyledButton>
);

export default RoundButton;
