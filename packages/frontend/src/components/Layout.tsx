import * as React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

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

type LayoutState = {
  grade: number;
  klass: number;
  name: string;
};

export default class Layout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);

    this.state = {
      grade: 0,
      klass: 0,
      name: '',
    };
  }

  public componentDidMount() {
    const { serial = '0000', name } = JSON.parse(localStorage.getItem('user'));
    this.setState({
      name,
      grade: serial[0],
      klass: serial[1],
    });
  }

  public render() {
    const { tabIdx, children } = this.props;
    const user = this.state;
    return (
      <Container>
        <Header tabIdx={tabIdx} user={user} />
        <Content>
          {children}
        </Content>
      </Container>
    );
  }
}
