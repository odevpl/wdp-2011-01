import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sale.module.scss';

const Sale = ({
  sofa,
  goldenChair,
  yellowChair,
  bed,
  content1,
  bargain,
  content2,
  price,
  content3,
  info,
}) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.saleContainer}>
        <div className={styles.firstPhoto}>
          <img src={sofa} />
          <span></span>
          <h2>{content1}</h2>
          <h1>{bargain}</h1>
        </div>
        <div className={styles.secondPhoto}>
          <img src={yellowChair} />
          <h4>{content2}</h4>
          <h3>{price}</h3>
          <img src={goldenChair} />
        </div>
        <div className={styles.thirdPhoto}>
          <img src={bed} />
          <h3>{content3}</h3>
          <h4>{info}</h4>
        </div>
      </div>
    </div>
  </div>
);

Sale.propTypes = {
  sofa: PropTypes.node,
  goldenChair: PropTypes.node,
  yellowChair: PropTypes.node,
  bed: PropTypes.node,
  content1: PropTypes.string,
  bargain: PropTypes.string,
  content2: PropTypes.string,
  price: PropTypes.string,
  content3: PropTypes.string,
  info: PropTypes.string,
};

export default Sale;
