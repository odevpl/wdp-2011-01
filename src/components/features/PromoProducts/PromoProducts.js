import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromoProducts.module.scss';
import PromoProductBox from '../../common/PromoProductBox/PromoProductBoxContainer';
import Button from '../../common/Button/Button';

const dots = [];
const pagesCount = 3;
// for (let i = 0; i < pagesCount; i++) {
//   dots.push(
//
//   );
// }

const handleHotDeal = (e, i, { changeHotDeal }) => {
  e.preventDefault();
  changeHotDeal(i);
};

const PromoProducts = ({ name, spanName, subName, images, hotDealProducts }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col-4 ${styles.leftContainer}`}>
            <div className={styles.hotDealsContainer}>
              <div className='col-8'>
                <h5>hot deals</h5>
              </div>
              <div className={`col-5 ${styles.dots}`}>
                <ul>
                  {hotDealProducts.map((product, id) => {
                    return (
                      <li key={id}>
                        <a
                          href='/'
                          //onClick={(e) => handleHotDeal(e,i)}
                          className={product.hotDeal ? styles.hotDealTrue : ''}
                        >
                          page {id}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <PromoProductBox hotDealProducts={hotDealProducts} />
          </div>
          <div className={`col-md-8 ${styles.rightContainer}`}>
            <img
              src='https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt=''
            />
            <div className='row'>
              <div className={styles.rightContainerMain}>
                <div className={styles.description}>
                  <h2>
                    {name}
                    <span> {spanName}</span>
                  </h2>
                  <p>{subName}</p>
                  <Button className={styles.promoBtn}>shop now</Button>
                </div>
              </div>
            </div>
            <div className={`row ${styles.navigation}`}>
              <div className={`col-6 ${styles.navigationLeft}`}>
                <a href='/'>
                  <i className='fas fa-chevron-left'></i>
                </a>
              </div>
              <div className={`col-6 ${styles.navigationRight}`}>
                <a href='/'>
                  <i className='fas fa-chevron-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PromoProducts.propTypes = {
  name: PropTypes.string,
  spanName: PropTypes.string,
  subName: PropTypes.string,
  images: PropTypes.array,
  hotDealProducts: PropTypes.array,
};

export default PromoProducts;
