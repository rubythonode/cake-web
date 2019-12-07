import * as React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import TextInput from '../components/TextInput';

const Container = styled.div`
`;

const Illust: React.FC = () => {

  const IllustContainer = styled.div``;

  const IllustWrapper = styled.div``;

  const Logo = styled.img``;

  const ThinText = styled.span``;

  return (
    <IllustContainer>
      <IllustWrapper>
        <Logo />
        <ThinText>스마트한 공간 사용의 시작, CAKE</ThinText>
      </IllustWrapper>
    </IllustContainer>
  );
};

const Form = styled.form`
`;

const Title = styled.h1`
`;

const InputGroup = styled.div`
`;

const Login: React.FC = () => {
  return (
    <Container>
      <Illust />
      <Form>
        <Title>로그인</Title>
        <InputGroup>
          <TextInput placeholder="ENTER YOUR EMAIL" />
          <TextInput placeholder="ENTER YOUR PASSWORD" />
        </InputGroup>
        <Button>로그인</Button>
      </Form>
    </Container>
  );
};

export default Login;
