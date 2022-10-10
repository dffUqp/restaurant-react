import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { actions, useShoppingCart } from '../../contexts/ShoppingCartContext';
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
  const { cartItems } = useShoppingCart();
  const isActive = useMemo(
    () => cartItems.find((item) => item.id === id),
    [cartItems, id]
  );

  const addToCart = () => {
    if (isActive?.quantity) {
      actions?.openCart();
    } else {
      actions?.increaseCartQuntity(id);
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
          {!isActive?.quantity ? (
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
              <CartIcon fill="var(--text-color-disadable)" />
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
