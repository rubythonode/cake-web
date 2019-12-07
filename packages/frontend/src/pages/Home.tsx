import * as React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

const Container = styled.div``;

const Home: React.FC = () => {
  return (
    <Layout tabIdx={0}>
      <Container />
    </Layout>
  );
};

export default Home;
