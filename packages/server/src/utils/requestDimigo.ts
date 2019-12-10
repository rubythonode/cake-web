import * as jwt from 'jsonwebtoken';
import requestPromiseNative from 'request-promise-native';

type IRequestDimigo = (username: string, password: string) => object;

const requestDimigo: IRequestDimigo = async (username, password) => {
  const { token }: { token: string } = await requestPromiseNative({
    body: { password, id: username },
    json: true,
    method: 'POST',
    uri: 'https://api.dimigo.in/auth',
  });
  const decoded: any = jwt.decode(token);
  const identity: any = decoded.identity[0];
  return identity;
};

export default requestDimigo;
