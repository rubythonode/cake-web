import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

import logo from '../assets/shared/logo.png';
import logout from '../assets/shared/logout.svg';

const Container = styled.header`
  padding: 1rem 2rem;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 28px;
  object-fit: contain;
  cursor: pointer;
`;

const TabList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type TabProps = {
  current: boolean;
};

const Tab = styled.span<TabProps>`
  font-size: 1.3rem;
  line-height: 1.32;
  letter-spacing: 2.13px;
  margin-left: 4rem;
  border-bottom: none;
  position: relative;
  cursor: pointer;

  ${({ current }) => current && css`
    padding-bottom: 8px;

    &:after {
      content: "";
      width: 100%;
      height: 2px;
      display: block;
      background-image: linear-gradient(91deg, #fd7e14 0%, #ff00aa 100%);
      position: absolute;
      bottom: 0;
    }
  `};
`;

interface IUserInfoProps {
  user: {
    grade: number;
    klass: number;
    name: string;
  };
}

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface ITab {
  name: string;
  route: string;
}

const tabs: ITab[] = [
  { name: '홈', route: '/' },
  { name: '사용 신청', route: '/apply' },
];

const UserInfo: React.FC<IUserInfoProps> = ({ user: { grade, klass, name } }) => {
  const UserMeta = styled.span`
    font-size: 1.2rem;
  `;

  const UserSerial = styled.span`
    font-weight: 300;
    margin-right: 0.5rem;
  `;

  const UserName = styled.span`
    font-weight: 900;
    margin-right: 1.1rem;
  `;

  return (
    <UserMeta>
      <UserSerial>{`${grade}학년 ${klass}반`}</UserSerial>
      <UserName>{name}</UserName>
    </UserMeta>
  );
};

const Logout = styled.img`
  height: 1.3rem;
  width: 1.3rem;
  cursor: pointer;
`;

interface IHeaderProps extends IUserInfoProps {
  tabIdx: number;
}

const Header: React.FC<IHeaderProps & RouteComponentProps> = ({ tabIdx, user, history }) => {
  return (
    <Container>
      <Logo src={logo} onClick={() => history.push('/')} />
      <TabList>
        {tabs.map((tab: ITab, idx: number) => {
          return (
            <Tab
              current={idx === tabIdx}
              onClick={() => history.push(tab.route)}
              key={`tab-${idx}`}
            >
              {tab.name}
            </Tab>
          );
        })}
      </TabList>
      <UserContainer>
        <UserInfo user={user} />
        <Logout src={logout} onClick={() => history.push('/login')} />
      </UserContainer>
    </Container>
  );
};

export default withRouter<IHeaderProps & RouteComponentProps<any>, any>(Header as any);
