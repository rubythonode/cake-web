import * as React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 1.2rem 2rem;
  font-size: 0.85rem;
  width: 100%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  line-height: 1.38;
  letter-spacing: 6.77px;
  border-radius: 35px;
  color: #505050;
  font-weight: 300;
`;

interface ITextInputProps {
  className?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<ITextInputProps> =
  ({ className = '', value = '', type = 'text', placeholder = '', onChange }) => {
    return (
      <Input
        className={className}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  };

export default TextInput;
