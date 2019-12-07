import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
`;

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => any;
}

const Button: React.FC<IButtonProps> = ({ children = '', onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
