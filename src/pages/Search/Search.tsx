import React from 'react';
import storeItems from '../../data/resItems.json';
import styles from './Search.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useSearchFilter } from '../../hooks/useSearchFilter';
import CardsBlock from '../../components/CardsBlock';
import Container from '../../components/Container';

const Search = () => {
  let [searchParams] = useSearchParams();
  const searchValue = (searchParams.values().next().value ?? undefined) || '';
  const data = useSearchFilter(storeItems, searchValue);

  return (
    <div className={styles.searchBlock}>
      <Container>
        <h1 className={styles.searchBlock__title}>Search</h1>
        <CardsBlock data={data} />
      </Container>
    </div>
  );
};

export default Search;
