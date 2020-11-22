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
          <h3>{saleContent.content1a}</h3>
          <h2>{saleContent.content1b}</h2>
          <h1>{saleContent.bargain}</h1>
        </div>
        <div className={styles.secondPhoto}>
          <img src={saleContent.yellowChair} />
          <h2>
            <strong>{saleContent.content2a}</strong>
            {saleContent.content2b}
          </h2>
          <h4>{saleContent.content2c}</h4>
          <h3>{saleContent.price}</h3>
          <img src={saleContent.goldenChair} />
        </div>
        <div className={styles.thirdPhoto}>
          <img src={saleContent.bed} />
          <h3>
            <strong>{saleContent.content3a}</strong>
            {saleContent.content3b}
          </h3>
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
