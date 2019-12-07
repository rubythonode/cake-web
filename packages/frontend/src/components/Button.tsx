import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.9rem 0;
  font-size: 1rem;
  width: 100%;
  border-radius: 35px;
  color: white;
  background-image: linear-gradient(200deg, #fd7e14, #ff00aa);
`;

interface IButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => any;
}

const Button: React.FC<IButtonProps> = ({ className = '', children = '', onClick }) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
