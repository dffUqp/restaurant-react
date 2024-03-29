import React, { memo, useState } from 'react';
import { actions } from '../../contexts/ShoppingCartContext';
import { IShopItem } from '../../ts/interfaces/dataType';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../UI/button/Button';
import Loader from '../UI/loader';
import styles from './CartItem.module.scss';

type CartItemProps = {
  id: number;
  quantity: number;
  storeItems: IShopItem[];
};

const CartItem = ({
  id,
  quantity,
  storeItems,
}: CartItemProps): JSX.Element | null => {
  const item = storeItems.find((elem) => elem.id === id);

  const [loading, setLoading] = useState<boolean>(false);

  if (item == null) return null;

  const decrease = () => {
    setLoading(true);

    setTimeout(() => {
      actions?.decreaseCartQuantity(id);
      setLoading(false);
    }, 300);
  };

  const increase = () => {
    setLoading(true);

    setTimeout(() => {
      actions?.increaseCartQuantity(id);
      setLoading(false);
    }, 300);
  };

  return (
    <div className={styles.item}>
      {loading && <Loader />}

      <div className={styles.item__price_container}>
        <span className={styles.item__title}>{item.name}</span>
      </div>

      <span className={styles.item__price}>
        {formatCurrency(item.price * quantity)}
      </span>

      <div className={styles.item__btns}>
        <Button className={styles.item__btn} onClick={decrease}>
          -
        </Button>
        <span className={styles.item__quantity}>{quantity}</span>
        <Button className={styles.item__btn} onClick={increase}>
          +
        </Button>
      </div>
    </div>
  );
};

export default memo(CartItem);
