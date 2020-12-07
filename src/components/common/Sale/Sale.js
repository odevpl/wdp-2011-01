import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Sale.module.scss';
import { FaRegWindowClose } from 'react-icons/fa';

const Sale = ({ saleContent, closeSale, sale }) => {
  const random = saleContent[Math.floor(Math.random() * saleContent.length)];

  return (
    sale && (
      <div key={random.id} className={styles.root}>
        <div key={random.id} className={styles.saleContainer}>
          <img src={random.img} alt='' />
          <div className={styles.saleContent}>
            <h1>{random.title}</h1>
            <h2>{random.subtitle}</h2>
            <h4>{random.promo}</h4>
            <div className={styles.reduce}>
              <span>{random.reduce}</span>
            </div>
          </div>
          <div className={styles.close}>
            <button onClick={closeSale}>
              <FaRegWindowClose className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

Sale.propTypes = {
  saleContent: PropTypes.any,
};

export default Sale;
