import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Compare.module.scss';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Compare = ({ products, compareProducts, compareValue }) => {
  const dispatch = useDispatch();
  const compareState = useSelector(state => state.compare.value);
  const [compareBox, setCompareBox] = useState(compareValue.value);
  const [productOne, setProductOne] = useState(false);
  const [productTwo, setProductTwo] = useState(false);
  console.log(compareValue);
  const filteredCompareProducts = compareProducts.filter(
    product => product.compare === true
  );

  useEffect(() => {
    console.log(compareBox);
  }, [dispatch, compareState, compareBox]);

  return (
    <>
      {compareBox && (
        <div className={styles.root}>
          <h1>Compare Products</h1>
          {filteredCompareProducts.map((product, index) => {
            return (
              <div className={styles.products} key={index}>
                {!productOne && (
                  <div key={index} className={styles.product}>
                    <FontAwesomeIcon className={styles.icon} icon={faPlus} />
                    <p>Search product to compare</p>
                  </div>
                )}
                <>
                  {productOne && (
                    <div className={styles.product}>
                      <img src={product.image} alt={product.name} />
                      <h4>{product.name}</h4>
                      <div>
                        <p>
                          Manufacturer: <span>{product.manufacturer}</span>
                        </p>
                        <p>
                          Price: <span>{product.price} $</span>
                        </p>
                        {product.category === 'laptop' && (
                          <>
                            <p>
                              Ram: <span>{product.ram}</span>
                            </p>
                            <p>
                              Processor: <span>{product.processor}</span>
                            </p>
                            <p>
                              Graphic: <span>{product.graphic}</span>
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                  {!productTwo && (
                    <div
                      key={index}
                      className={`${styles.product} ${styles.productTwo}`}
                    >
                      <FontAwesomeIcon className={styles.icon} icon={faPlus} />
                      <div>Search product to compare</div>
                    </div>
                  )}
                  {productTwo && (
                    <div
                      key={index}
                      className={`${styles.product} ${styles.productTwo}`}
                    >
                      <img src={product.image} alt={product.name} />
                      <h4>{product.name}</h4>
                      <div>
                        <p>
                          Manufacturer: <span>{product.manufacturer}</span>
                        </p>
                        <p>
                          Price: <span>{product.price} $</span>
                        </p>
                        {product.category === 'laptop' && (
                          <>
                            <p>
                              Ram: <span>{product.ram}</span>
                            </p>
                            <p>
                              Processor: <span>{product.processor}</span>
                            </p>
                            <p>
                              Graphic: <span>{product.graphic}</span>
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

Compare.propTypes = {
  products: PropTypes.array,
  compareProducts: PropTypes.array,
  compareValue: PropTypes.bool,
};

export default Compare;
