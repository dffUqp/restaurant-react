import React, { memo } from 'react';
import { IShopItem } from '../../ts/interfaces/dataType';
import Card from '../Card';
import styles from './CardsBlock.module.scss';

type CardsBlockProps = {
  data: IShopItem[];
};

const CardsBlock = ({ data }: CardsBlockProps): JSX.Element => {
  return data.length ? (
    <div className={styles.cardsBlock}>
      {data.map(
        (item: IShopItem): JSX.Element => (
          <Card {...item} key={item.id} />
        )
      )}
    </div>
  ) : (
    <h1 className={styles.nothing}>Nothing</h1>
  );
};

export default memo(CardsBlock);
