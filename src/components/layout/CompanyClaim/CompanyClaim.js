import React from 'react';
// import PropTypes from 'prop-types';
import styles from './CompanyClaim.module.scss';
import BurgerMenu from '../../features/BurgerMenu/BurgerMenuContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileAlt,
  faShoppingBasket,
  faUser,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const CompanyClaim = () => {
  const width = window.innerWidth;
  return (
    <div className={styles.root}>
      <div className={`row align-items-center ${styles.compRow}`}>
        <div className={styles.burgerWrapper}>
          <Router>
            <BurgerMenu className={styles.burger} />
            <Switch>
              <Route path='/' />
            </Switch>
          </Router>
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
                    <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />{' '}
                    <span className={styles.topMenuText}>Cart</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`col logo-left ${styles.logo}`}>
          <a href='/'>
            {width > 445 ? (
              <img src='/images/logo.png' alt='Bazar' />
            ) : (
              <img src='/images/logo2.png' alt='Bazar' />
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

// CompanyClaim.propTypes = {};

export default CompanyClaim;
