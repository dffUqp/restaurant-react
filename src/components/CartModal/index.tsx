import { actions, useShoppingCart } from '../../contexts/ShoppingCartContext';
import CartItem from '../CartItem';
import styles from './CartModal.module.scss';
import { ICartModal } from './CartModal.props';
import storeItems from '../../data/resItems.json';
import { memo } from 'react';

const CartModal = ({ isOpen }: ICartModal): JSX.Element | null => {
  const rootClasses = [styles.cart];
  const { cartItems } = useShoppingCart();

  if (isOpen) {
    window.disableScroll();
    rootClasses.push(styles.active);
  } else {
    window.enableScroll();
    return null;
  }

  return (
    <div className={rootClasses.join(' ')} onClick={actions?.closeCart}>
      <div
        className={styles.cart__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.cart__head}>
          <h1 className={styles.cart__title}>Cart</h1>
          <button onClick={actions?.closeCart}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0035 13L25.3506 3.65245C25.6077 3.39513 25.7496 3.05184 25.75 2.68578C25.75 2.31952 25.6081 1.97582 25.3506 1.71891L24.5315 0.900011C24.274 0.642084 23.9307 0.500824 23.5642 0.500824C23.1984 0.500824 22.8551 0.642084 22.5976 0.900011L13.2504 10.247L3.90285 0.900011C3.64573 0.642084 3.30224 0.500824 2.93598 0.500824C2.57012 0.500824 2.22663 0.642084 1.96951 0.900011L1.15 1.71891C0.616667 2.25225 0.616667 3.11973 1.15 3.65245L10.4974 13L1.15 22.3472C0.892683 22.6049 0.751016 22.9482 0.751016 23.3142C0.751016 23.6803 0.892683 24.0236 1.15 24.2811L1.96931 25.1C2.22642 25.3577 2.57012 25.4992 2.93577 25.4992C3.30203 25.4992 3.64553 25.3577 3.90264 25.1L13.2502 15.7529L22.5974 25.1C22.8549 25.3577 23.1982 25.4992 23.564 25.4992H23.5644C23.9305 25.4992 24.2738 25.3577 24.5313 25.1L25.3504 24.2811C25.6075 24.0238 25.7494 23.6803 25.7494 23.3142C25.7494 22.9482 25.6075 22.6049 25.3504 22.3474L16.0035 13Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        <div className={styles.cart__items}>
          {cartItems.map((item) => (
            <CartItem {...item} storeItems={storeItems} key={item.id} />
          ))}
        </div>
        <div className={styles.cart__totalPrice}>
          Total:
          {cartItems.reduce((total, cartItem) => {
            const item = storeItems.find((elem) => elem.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)}
        </div>
      </div>
    </div>
  );
};

export default memo(CartModal);
