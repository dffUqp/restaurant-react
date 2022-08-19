import React from 'react';
import storeItems from '../../data/resItems.json';
import styles from './SearchBlock.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useSearchFilter } from '../../hooks/useSearchFilter';
import CardsBlock from '../CardsBlock';

const SearchBlock = () => {
  let [searchParams] = useSearchParams();
  const searchValue = (searchParams.values().next().value ?? undefined) || '';
  const data = useSearchFilter(storeItems, searchValue);

  return (
    <div className="container">
      <div className={styles.searchBlock}>
        <h1 className={styles.searchBlock__title}>Search</h1>
        <CardsBlock data={data} />
      </div>
    </div>
  );
};

export default SearchBlock;
