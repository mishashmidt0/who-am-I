import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';

import { RickAndMortyApi } from './api/axios';

import Card from 'components/Card';
import Layout from 'components/Layout';

const Home: NextPage = () => {
  const query = useQuery(['character'], RickAndMortyApi.get);

  console.log(query);

  return (
    <Layout>
      <Card />
    </Layout>
  );
};

export default Home;
