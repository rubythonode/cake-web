import * as React from 'react';
import styled, { css } from 'styled-components';

type InputProps = {
  long: boolean;
};

const Input = styled.input<InputProps>`
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  width: 3.5rem;
  background-color: #ffffff;
  line-height: 1.38;
  color: #505050;
  font-weight: 300;
  border-radius: 10px;
  border: solid 1px #707070;
  margin-right: 0.2rem;

  &:not(:first-child) {
    margin-left: 0.3rem;
  }

  ${({ long }) => long && css`
    width: 5.2rem;
  `};
`;

interface INumberInputProps {
  className?: string;
  value?: number;
  long?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput: React.FC<INumberInputProps> =
  ({ className = '', name = '', value = 0, long = false, onChange }) => {
    return (
      <Input
        type="number"
        className={className}
        name={name}
        long={long}
        value={value}
        onChange={onChange}
      />
    );
  };

export default NumberInput;
