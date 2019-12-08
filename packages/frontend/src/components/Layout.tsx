import * as React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const exampleUserData = {
  grade: 1,
  klass: 4,
  name: '이혜원',
};

const Container = styled.div`
  background-color: #f6f5f5;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.8rem;
`;

type LayoutProps = {
  tabIdx: number;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ tabIdx, children }) => {
  return (
    <Container>
      <Header tabIdx={tabIdx} user={exampleUserData} />
      <Content>
        {children}
      </Content>
    </Container>
  );
};

export default Layout;
