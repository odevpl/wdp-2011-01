import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Sale.module.scss';
import { FaRegWindowClose } from 'react-icons/fa';

const Sale = ({ saleContent, sale, setSale }) => {
  const random = saleContent[Math.floor(Math.random() * saleContent.length)];
  const ref = useRef(null);

  const closeSale = () => {
    setSale(false);
  };

  const closeSaleKey = e => {
    if (e.key === 'Escape') {
      setSale(false);
    }
  };

  const closeSaleOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setSale(false);
    }
  };

  const moveToProduct = e => {
    console.log(ref.current);
  };

  useEffect(() => {
    document.addEventListener('keydown', closeSaleKey);
    document.addEventListener('click', closeSaleOutside);
    return () => {
      document.removeEventListener('keydown', closeSaleKey, true);
      document.removeEventListener('click', closeSaleOutside, true);
    };
  });

  return (
    sale && (
      <div key={random.id} className={styles.root}>
        <div ref={ref} className={styles.main} onClick={moveToProduct}>
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
      </div>
    )
  );
};

Sale.propTypes = {
  saleContent: PropTypes.any,
};

export default Sale;
