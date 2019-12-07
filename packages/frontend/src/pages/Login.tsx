import * as React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import TextInput from '../components/TextInput';

import loginIllust from '../assets/login/illust.png';
import logo from '../assets/login/logo.png';

const Container = styled.div`
  position: relative;
`;

const Illust: React.FC = () => {
  const IllustWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  `;

  const IllustContainer = styled.div`
    height: 100vh;
    width: 680px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const IllustImage = styled.img`
    height: 100%;
    width: 834px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  `;

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.31;
    letter-spacing: 8.92px;
    font-size: 26px;
    font-weight: 100;
    align-items: center;
  `;

  const Logo = styled.img`
    width: 163px;
    height: 184px;
    object-fit: contain;
  `;

  const Desc = styled.span`
    color: white;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 1.2rem;
  `;

  return (
    <IllustWrapper>
      <IllustContainer>
        <IllustImage src={loginIllust} />
        <Content>
          <Logo src={logo} />
          <Desc>스마트한 공간 사용의 시작, CAKE</Desc>
        </Content>
      </IllustContainer>
    </IllustWrapper>
  );
};

const FormWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 390px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.3rem;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-weight: 900;
`;

const Separator = styled.div`
  width: 77px;
  height: 7px;
  background-image: linear-gradient(to right, #fd7e14, #ff00aa);
  margin-bottom: 6rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  width: 100%;
`;

const StyledTextInput = styled(TextInput)`
  &:first-child {
    margin-bottom: 1rem;
  }
`;

const SubmitButton = styled(Button)`
  font-weight: 900;
  margin-bottom: 3rem;
`;

const Login: React.FC = () => {
  return (
    <Container>
      <Illust />
      <FormWrapper>
        <Form>
          <Title>로그인</Title>
          <Separator />
          <InputGroup>
            <StyledTextInput placeholder="ENTER YOUR EMAIL" />
            <StyledTextInput placeholder="ENTER YOUR PASSWORD" />
          </InputGroup>
          <SubmitButton>
            로그인
          </SubmitButton>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
