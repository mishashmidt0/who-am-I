import { useQuery, UseQueryResult } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';

import Error from '../src/components/Error';
import Loading from '../src/components/Loading';

import { fetchRickAndMorty } from './api/axios';

import Card from 'components/Card';
import Layout from 'components/Layout';
import { Container } from 'styles/index.styles';
import { ReturnComponentType } from 'types';

export type HeroType = {
  info: any;
  results: any[];
};

interface HomeProps {
  person: HeroType;
}

const Home = ({ person }: HomeProps): ReturnComponentType => {
  const { isLoading, isError, error, data }: UseQueryResult<HeroType, Error> = useQuery<
    HeroType,
    Error
  >(['person'], fetchRickAndMorty.get, { initialData: person });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) return <Error error={error} />;

  return (
    <Layout>
      <Container>
        {data.results.map(({ id, name, image }) => (
          <Card key={id} name={name} image={image} />
        ))}
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { person: HeroType };
}> => {
  const person = await fetchRickAndMorty.get();

  return { props: { person } };
};

export default Home;
