import React, { memo } from 'react';
import { IShopItem } from '../../ts/dataType';
import Card from '../Card';
import styles from './StoreBlock.module.scss';

type CardsBlockProps = {
  data: IShopItem[];
};

const CardsBlock = ({ data }: CardsBlockProps) => {
  return !data.length ? (
    <h1 style={{ display: 'flex', justifyContent: 'center', color: ' grey' }}>
      Nothing
    </h1>
  ) : (
    <div className={styles['storeBlock-items']}>
      {data.map(
        (item: IShopItem): JSX.Element => (
          <Card {...item} key={item.id} />
        )
      )}
    </div>
  );
};

export default memo(CardsBlock);
