import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sale.module.scss';

const Sale = ({ saleContent }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.saleContainer}>
        <div className={styles.firstPhoto}>
          <img src={saleContent.sofa} />
          <span></span>
          <h2>{saleContent.content1}</h2>
          <h1>{saleContent.bargain}</h1>
        </div>
        <div className={styles.secondPhoto}>
          <img src={saleContent.yellowChair} />
          <h4>{saleContent.content2}</h4>
          <h3>{saleContent.price}</h3>
          <img src={saleContent.goldenChair} />
        </div>
        <div className={styles.thirdPhoto}>
          <img src={saleContent.bed} />
          <h3>{saleContent.content3}</h3>
          <h4>{saleContent.info}</h4>
        </div>
      </div>
    </div>
  </div>
);

Sale.propTypes = {
  saleContent: PropTypes.node,
};

export default Sale;
