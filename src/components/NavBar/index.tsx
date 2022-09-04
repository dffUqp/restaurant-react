import React from 'react';
import { actions } from '../../contexts/ShoppingCartContext';
import InputWithHints from '../InputWithHints';
import Button from '../UI/button/Button';
import { CartIcon, LoginIcon } from '../UI/icons';
import Logo from '../UI/logo';
import styles from './NavBar.module.scss';

function Navbar(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <Logo />

      <InputWithHints />

      <div className={styles.nav__btns}>
        <Button
          className={[styles.nav__btn, styles['nav__btn-blue']].join(' ')}
        >
          <LoginIcon  fill='#fff'/>
          Login
        </Button>
        <Button
          className={[styles.nav__btn, styles['nav__btn-white']].join(' ')}
          onClick={actions?.openCart}
        >
          <CartIcon fill="#000" />
          Cart
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
