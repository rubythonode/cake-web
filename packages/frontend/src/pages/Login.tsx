import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import api from '../api';

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Title from '../components/Title';

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
    margin-bottom: 3.5rem;
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

const Form = styled.div`
  width: 390px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled(Title)`
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 2.3rem;
  letter-spacing: 0;
  padding-left: 0;
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
  margin-bottom: 3rem;
`;

type ILoginState = {
  username: string;
  password: string;
};

class Login extends React.Component<RouteComponentProps, ILoginState> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public async onClickSubmit() {
    const { history } = this.props;
    const { username, password } = this.state;

    const res = await api.post('/auth/login', { username, password });
    console.log(res);
    // history.push('/');
  }

  public handleChange(event: React.SyntheticEvent) {
    event.persist();
    const { value, name }: { value: string, name: string } = event.target as HTMLInputElement;

    this.setState({
      [name]: value,
    } as any);
  }

  public render() {
    const { username, password } = this.state;

    return (
      <Container>
        <Illust />
        <FormWrapper>
          <Form>
            <FormTitle>로그인</FormTitle>
            <Separator />
            <InputGroup>
              <StyledTextInput
                name="username"
                value={username}
                onChange={this.handleChange}
                placeholder="ENTER YOUR USERNAME"
              />
              <StyledTextInput
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="ENTER YOUR PASSWORD"
              />
            </InputGroup>
            <SubmitButton onClick={this.onClickSubmit}>
              로그인
            </SubmitButton>
          </Form>
        </FormWrapper>
      </Container>
    );
  }
}

export default withRouter<RouteComponentProps<any>, any>(Login);
