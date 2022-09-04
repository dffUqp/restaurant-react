import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Container from '../../components/Container';
import Logo from '../../components/UI/logo';
import { Toggle } from '../../components/UI/toogle';
import { useTheme } from '../../contexts/ThemeContext';
import { routesItems, socialLinks } from '../../routes/routeList';
import { themes } from '../../ts/enums/themeEnum';
import styles from './Footer.module.scss';

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer>
      <Container>
        <div className={styles['footer']}>
          <div className={styles['footer__logo']}>
            <Logo />
          </div>
          <div className={styles['footer__items-container']}>
            <ul className={styles['footer__items']}>
              {routesItems.map((item) => (
                <li className={styles['footer__items__item']} key={item.path}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? styles['footer__items__link-active']
                        : styles['footer__items__link']
                    }
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles['footer__socials']}>
            <Toggle
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark);
                if (theme === themes.dark) setTheme(themes.light);
              }}
              value={theme === themes.dark}
            />
            {socialLinks.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
