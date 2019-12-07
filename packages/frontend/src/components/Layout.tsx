import * as React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const exampleUserData = {
  grade: 1,
  klass: 4,
  name: '이혜원',
};

const Container = styled.div`
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header user={exampleUserData} />
      {children}
    </Container>
  );
};

export default Layout;
