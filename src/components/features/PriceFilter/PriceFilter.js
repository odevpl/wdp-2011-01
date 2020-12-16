import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './PriceFilter.module.scss';

const PriceFilter = ({
  products,
  category,
  getProductByPrice,
  categoryProducts,
  setCategoryProducts,
}) => {
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(Math.max(...getProductByPrice));

  const handlePriceFrom = e => {
    if (e.target.value.length === 0) {
      setFromPrice(0);
    }
    if (e.target.value.length > 0) {
      setFromPrice(e.target.value);
    }
  };

  const handlePriceTo = e => {
    if (e.target.value.length === 0) {
      setToPrice(Math.max(...getProductByPrice));
    }
    if (e.target.value.length > 0) {
      setToPrice(e.target.value);
    }
  };

  useEffect(() => {
    setCategoryProducts(products.filter(item => item.category === category));

    const filteredProduct = categoryProducts.filter(
      product => product.price >= fromPrice && product.price <= toPrice
    );
    setTimeout(() => {
      setCategoryProducts(filteredProduct);
    }, 1000);
  }, [category, categoryProducts, fromPrice, products, setCategoryProducts, toPrice]);

  return (
    <div className={styles.root}>
      <h3 className={styles.header}> Filter by Price </h3>
      <form>
        <input type='text' placeholder='from' onChange={handlePriceFrom} />
        <div>-</div>
        <input type='text' placeholder='to' onChange={handlePriceTo} />
      </form>
    </div>
  );
};

PriceFilter.propTypes = {
  products: PropTypes.array,
  getProductByPrice: PropTypes.array,
  category: PropTypes.string,
  categoryProducts: PropTypes.array,
  setCategoryProducts: PropTypes.func,
};

export default PriceFilter;
