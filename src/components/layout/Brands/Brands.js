import React from 'react';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';

const Brands = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row align-items-center ' + styles.wrapper}>
        <Button className={styles.button} />
        <ul className={styles.list}>
          <li className={styles.element} />
          <li className={styles.element} />
          <li className={styles.element} />
          <li className={styles.element} />
          <li className={styles.element} />
          <li className={styles.element} />
        </ul>
        <Button className={styles.button} />
      </div>
    </div>
  </div>
);

// Brands.propTypes = {};

export default Brands;
