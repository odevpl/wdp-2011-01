import React from 'react';
import PropTypes from 'prop-types';
import ProductSearch from '../../features/ProductSearch/ProductSearch';
import styles from './MenuBar.module.scss';

const MenuBar = ({ children, categories }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className={`col ${styles.search}`}>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <li>
              <a href='/' className={styles.active}>
                Home
              </a>
            </li>
            {categories.map(item => {
              return (
                <li key={item.id}>
                  <a href={`/shop/${item.id}`}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.array,
};

export default MenuBar;
