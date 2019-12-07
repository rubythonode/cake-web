import * as React from 'react';
import styled from 'styled-components';

const Input = styled.input`
`;

interface ITextInputProps {
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<ITextInputProps> =
  ({ value = '', type = 'text', placeholder = '', onChange }) => {
    return (
      <Input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  };

export default TextInput;
