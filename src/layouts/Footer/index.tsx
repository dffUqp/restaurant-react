import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { routesItems, socialLinks } from '../../routes/routeList';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles['footer']}>
          <div className={styles['footer__logo']}>
            <Link to="/">
              <img src="images/logo.png" alt="" />
            </Link>
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
            {socialLinks.map((item) => (
              <Link key={item.path} to={item.path}>
                {<item.icon />}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
