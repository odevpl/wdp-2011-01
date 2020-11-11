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
          <h1>{content1}</h1>
          <h1>{bargain}</h1>
        </div>
        <div className={styles.secondPhoto}>
          <img src={goldenChair} />
          <h1>{content2}</h1>
          <h1>{price}</h1>
          <img src={yellowChair} />
        </div>
        <div className={styles.thirdPhoto}>
          <img src={bed} />
          <h1>{content3}</h1>
          <h1>{info}</h1>
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
