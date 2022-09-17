import React, { ReactNode } from 'react';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchRickAndMorty } from 'api/axios';
import Card from 'components/Card';
import Error from 'components/Error';
import Layout from 'components/Layout';
import Loading from 'components/Loading';
import Menu from 'containers/Menu';
import { Container, Content, InputSearch, Title } from 'styles/search.styles';
import { ReturnComponentType } from 'types';
import { Date } from 'types/date';
import useDebounce from 'utils/hook/useDebounce';

const delay = 500;

const Search = (): ReturnComponentType => {
  const [searchValue, setSearchValue] = React.useState('');
  const debounedSearchValue = useDebounce(searchValue, delay);

  const { isLoading, isError, isSuccess, error, data }: UseQueryResult<Date, Error> =
    useQuery<Date, Error>(
      ['person', debounedSearchValue],
      () => fetchRickAndMorty.search(debounedSearchValue),
      {
        retry: 1,
        refetchOnWindowFocus: false,
        enabled: debounedSearchValue.length > 0,
      },
    );

  const renderResult = (): ReactNode => {
    if (isLoading && searchValue) {
      return <Loading />;
    }

    if (isError) {
      return <Error error={error as AxiosError} />;
    }

    if (isSuccess) {
      return (
        <>
          {data.results.map(({ id, name, image }) => (
            <Card key={id} name={name} image={image} />
          ))}
        </>
      );
    }
  };

  return (
    <Layout>
      <Menu />
      <Content>
        <Title variant="h1">Find Your Character</Title>
        <InputSearch
          placeholder="Find ..."
          onChange={({ target: { value } }) => setSearchValue(value)}
          value={searchValue}
        />
        <Container>{renderResult()}</Container>
      </Content>
    </Layout>
  );
};

// export const getServerSideProps: GetServerSideProps = async (): Promise<{
//   props: { person: any[] };
// }> => {
//   const person = await fetchRickAndMorty.get();
//
//   return { props: { person } };
// };

export default Search;
