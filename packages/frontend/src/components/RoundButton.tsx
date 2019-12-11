import * as React from 'react';
import styled, { css } from 'styled-components';

type ISelectedProps = {
  selected: boolean;
};

const StyledButton = styled.button<ISelectedProps>`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 34px;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  ${({ selected }) => selected && css`
    background-color: #505050;
  `}
`;

const Text = styled.span<ISelectedProps>`
  font-size: 1.8rem;
  line-height: 1.33;
  letter-spacing: 2.81px;
  color: #505050;
  margin-left: 3px;

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
