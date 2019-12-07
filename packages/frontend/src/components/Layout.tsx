import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Layout;
