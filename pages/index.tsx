import { useQuery, UseQueryResult } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';

import { fetchRickAndMorty } from 'api/axios';
import Card from 'components/Card';
import Error from 'components/Error';
import Layout from 'components/Layout';
import Loading from 'components/Loading';
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
  const { isLoading, data }: UseQueryResult<HeroType, Error> = useQuery<HeroType, Error>(
    ['person'],
    fetchRickAndMorty.get,
    { initialData: person },
  );

  if (isLoading) {
    return <Loading />;
  }

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
