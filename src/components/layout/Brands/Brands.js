import React from 'react';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';

const Brands = ({ brands }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row align-items-center ' + styles.wrapper}>
        <Button className={styles.button}>
          <span className={styles.arrow}> &lt; </span>
        </Button>
        <ul className={styles.list}>
          {brands.map(brand => (
            <li
              key={brand.id.replace('brand-', '')}
              style={{ backgroundImage: `url('${brand.image}')` }}
            ></li>
          ))}
        </ul>
        <Button className={styles.button}>
          <span className={styles.arrow}> &gt; </span>
        </Button>
      </div>
    </div>
  </div>
);

Brands.propTypes = {
  map: PropTypes.func,
  brands: PropTypes.array,
};

export default Brands;
