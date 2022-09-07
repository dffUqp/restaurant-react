import React, { memo, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { actions } from '../../contexts/ShoppingCartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../UI/button/Button';
import { CartIcon } from '../UI/icons';
import styles from './Card.module.scss';

type CardProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Card = ({ id, name, price, imgUrl }: CardProps): JSX.Element => {
  const [isActiveBtn, setIsActiveBtn] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    setQuantity(actions?.getItemQuntity(id) ?? 0);
  }, [id]);

  useMemo(() => {
    if (quantity < 1) {
      setIsActiveBtn(false);
    } else {
      setIsActiveBtn(true);
    }
  }, [quantity]);

  const addToCart = () => {
    if (quantity < 1) {
      actions?.increaseCartQuntity(id);
      setQuantity(1);
    } else {
      actions?.openCart();
    }
  };

  return (
    <div className={styles['card']}>
      <Link to={'/roll/' + id}>
        <img src={imgUrl} alt="itemImg" className={styles['card__img']} />
      </Link>
      <div className={styles['card__body']}>
        <Link to={'/roll/' + id} className={styles['card__body__title']}>
          {name}
        </Link>
        <p className={styles['card__body__subtitle']}>
          Rice, eel, unagi sauce, sesame seeds, nori seaweed.
        </p>
        <div>
          {!isActiveBtn ? (
            <Button className={styles['card__body__btn']} onClick={addToCart}>
              Cart
              <CartIcon />
            </Button>
          ) : (
            <Button
              className={styles['card__body__btn-clicked']}
              onClick={addToCart}
            >
              In Cart
              <CartIcon fill="#000" />
            </Button>
          )}

          <span className={styles['card__body__price']}>
            {formatCurrency(price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
