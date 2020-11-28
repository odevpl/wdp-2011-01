import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sale.module.scss';

const Sale = ({ saleContent }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.saleContainer}>
        <div className={styles.firstPhoto}>
          <img src={saleContent.sofa} alt='' />
          <span></span>
          <h2>{saleContent.content1a}</h2>
          <p>{saleContent.content1b}</p>
          <h1>{saleContent.bargain}</h1>
        </div>
        <div className={styles.secondPhoto}>
          <img className={styles.doggo} src={saleContent.yellowChair} alt='' />
          <div className={styles.secondWrapper}>
            <h4 className={styles.contentBold}>{saleContent.content2a}</h4>
            <h4 className={styles.contentNormal}>{saleContent.content2b}</h4>
            <h6 className={styles.contentSmall}>{saleContent.content2c}</h6>
            <h3>{saleContent.price}</h3>
          </div>
          <img className={styles.chair} src={saleContent.goldenChair} alt='' />
        </div>
        <div className={styles.thirdPhoto}>
          <img src={saleContent.bed} alt='' />
          <div className={styles.thirdWrapper}>
            <div>
              <h4 className={styles.thirdBold}>{saleContent.content3a}</h4>
              <h4 className={styles.thirdNormal}>{saleContent.content3b}</h4>
            </div>
            <h5>{saleContent.info}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Sale.propTypes = {
  saleContent: PropTypes.any,
};

export default Sale;
