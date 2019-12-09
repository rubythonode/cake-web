import * as React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  width: 5.2rem;
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
`;

interface INumberInputProps {
  className?: string;
  value?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput: React.FC<INumberInputProps> =
  ({ className = '', value = 0, onChange }) => {
    return (
      <Input
        type="number"
        className={className}
        value={value}
        onChange={onChange}
      />
    );
  };

export default NumberInput;
