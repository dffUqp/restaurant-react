import { Link } from 'react-router-dom';
import { actions } from '../../contexts/ShoppingCartContext';
import InputWithHints from '../InputWithHints';
import Button from '../UI/button/Button';
import { CartIcon, LoginIcon } from '../UI/icons';
import styles from './NavBar.module.scss';

function Navbar(): JSX.Element {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/">
          <img src="images/logo.png" alt="" />
        </Link>

        <InputWithHints />

        <div className={styles.btns}>
          <Button className={styles.btn}>
            <LoginIcon />
            Login
          </Button>
          <Button className={styles.btn_white} onClick={actions?.openCart}>
            <CartIcon fill="#000" />
            Cart
          </Button>
        </div>
      </nav>
      <div className={styles.absoluteBlock} />
    </>
  );
}

export default Navbar;
