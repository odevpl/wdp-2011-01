import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sale.module.scss';

const Sale = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.saleContainer}>
        <div className={styles.firstPhoto}>
          <img></img>
          <h1></h1>
          <h1></h1>
        </div>
        <div className={styles.secondPhoto}>
          <img></img>
          <h1></h1>
          <h1></h1>
        </div>
        <div className={styles.thirdPhoto}>
          <img></img>
          <h1></h1>
          <h1></h1>
        </div>
      </div>
    </div>
  </div>
);

Sale.propTypes = {};

export default Sale;
