import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerMenu.module.scss';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const BurgerMenu = ({ categories }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={styles.navbar}>
      <div className={sidebar ? styles.overlay : ''}>
        <div>
          <Link to='#' className={sidebar ? styles.hideBurger : styles.menuBars}>
            <FaIcons.FaBars className={styles.iconBurger} onClick={showSidebar} />
          </Link>
        </div>
        <nav
          className={sidebar ? styles.navMenu : styles.navMenu + ' ' + styles.active}
        >
          <ul className={styles.navMenuItems}>
            <li className={styles.navToggle}>
              <a href='/'>
                <AiIcons.AiOutlineClose
                  onClick={showSidebar}
                  className={styles.iconClose}
                />
              </a>
            </li>
            <li className={styles.item}>
              <a href='/'>
                <FaIcons.FaHome />
                <span>Home</span>
              </a>
            </li>
            {categories.map((item, index) => {
              return (
                <li key={index} className={styles.item}>
                  <a href={`/shop/${item.id}`}>
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

BurgerMenu.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.array,
};

export default BurgerMenu;
