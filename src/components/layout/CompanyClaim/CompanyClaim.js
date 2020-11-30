import React from 'react';
// import PropTypes from 'prop-types';
import styles from './CompanyClaim.module.scss';
import BurgerMenu from '../../features/BurgerMenu/BurgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileAlt,
  faShoppingBasket,
  faUser,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

const CompanyClaim = () => {
  const width = window.innerWidth;

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row align-items-center ${styles.compRow}`}>
          <div className={`col logo-left ${styles.logo}`}>
            <a href='/'>
              {width > 445 ? (
                <img src='/images/logo.png' alt='Bazar' />
              ) : (
                <img src='/images/logo2.png' alt='Bazar' />
              )}
            </a>
          </div>
          <div className={`col text-right ${styles.iconWrapper}`}>
            <div className={styles.icons}>
              <div>
                <ul className={styles.list}>
                  <li>
                    <a href='/'>
                      <FontAwesomeIcon className={styles.icon} icon={faUser} />
                      <span className={styles.topMenuText}>Login</span>
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      <FontAwesomeIcon className={styles.icon} icon={faLock} />
                      <span className={styles.topMenuText}>Register</span>
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} />{' '}
                      <span className={styles.topMenuText}>Contact</span>
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faShoppingBasket}
                      />{' '}
                      <span className={styles.topMenuText}>Cart</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.burgerWrapper}>
            {' '}
            <BurgerMenu className={styles.burger} />
          </div>
        </div>
      </div>
    </div>
  );
};

// CompanyClaim.propTypes = {};

export default CompanyClaim;
