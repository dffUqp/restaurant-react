import React from 'react';
import { actions } from '../../contexts/ShoppingCartContext';
import InputWithHints from '../InputWithHints';
import Button from '../UI/button/Button';
import { CartIcon, LoginIcon } from '../UI/icons';
import Logo from '../UI/logo';
import styles from './NavBar.module.scss';
import cn from 'classnames';

function Navbar(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <Logo />

      <InputWithHints />

      <div className={styles.nav__btns}>
        <Button
          className={cn(styles.nav__btn, styles['nav__btn-blue'])}
        >
          <LoginIcon  fill='#fff'/>
          Login
        </Button>
        <Button
          className={cn(styles.nav__btn, styles.nav__btn, styles['nav__btn-white'])}
          onClick={actions?.openCart}
        >
          <CartIcon fill="var(--text-color-title)" />
          Cart
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
