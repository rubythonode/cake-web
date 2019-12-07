import * as React from 'react';
import styled from 'styled-components';

import logo from '../assets/shared/logo.png';
import logout from '../assets/shared/logout.svg';

const Container = styled.header`
`;

const Logo = styled.img`
`;

const TabList = styled.div`
`;

const Tab = styled.span`
`;

interface IUserInfoProps {
  user: {
    grade: number;
    klass: number;
    name: string;
  };
}

const UserInfo: React.FC<IUserInfoProps> = ({ user: { grade, klass, name } }) => {
  const UserMeta = styled.span`
  `;

  const UserSerial = styled.span`
  `;

  const UserName = styled.span`
  `;

  return (
    <UserMeta>
      <UserSerial>{`${grade}학년 ${klass}반`}</UserSerial>
      <UserName>{name}</UserName>
    </UserMeta>
  );
}

const Logout = styled.img`
`;

const Header: React.FC<IUserInfoProps> = ({ user }) => {
  return (
    <Container>
      <Logo src={logo} />
      <TabList>
        <Tab>홈</Tab>
        <Tab>사용 신청</Tab>
      </TabList>
      <UserInfo user={user} />
      <Logout src={logout} />
    </Container>
  );
};

export default Header;
