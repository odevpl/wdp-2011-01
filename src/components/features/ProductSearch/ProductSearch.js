import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductSearch.module.scss';

const ProductSearch = ({ products }) => {
  const [display, setDisplay] = useState(false);
  const [displayFilter, setDisplayFilter] = useState(false);
  const [searchProduct, setSearchProduct] = useState([]);

  const ref = useRef(null);

  const showDisplay = () => {
    setDisplay(!display);
  };

  const showDisplayKey = e => {
    if (e.target.value.length >= 3) {
      setDisplayFilter(true);
      setDisplay(false);
    } else if (e.target.value.length < 3) {
      setDisplayFilter(false);
      setDisplay(false);
    }

    if (e.target.value.includes(' ')) {
      let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(e.target.value)
      );
      setSearchProduct(filteredProducts);
    } else {
      let filteredProducts = products.filter(product =>
        product.name
          .toLowerCase()
          .replace(/\s/g, '')
          .includes(e.target.value)
      );
      setSearchProduct(filteredProducts);
    }
  };

  const closeSearchKey = e => {
    if (e.key === 'Escape') {
      setDisplay(false);
      setDisplayFilter(false);
    }
  };

  const closeSearchOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setDisplay(false);
      setDisplayFilter(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeSearchKey);
    document.addEventListener('click', closeSearchOutside);
    return () => {
      document.removeEventListener('keydown', closeSearchKey);
      document.removeEventListener('click', closeSearchOutside);
    };
  });

  return (
    <div className={styles.wrapper}>
      <form action='' className={styles.root}>
        <div className={styles.category}>
          <div className={styles.searchField}>
            <input
              ref={ref}
              placeholder='Search products...'
              type='text'
              onFocus={showDisplay}
              onKeyUp={e => showDisplayKey(e)}
            />
            <Button className={styles.searchButton}>
              <FontAwesomeIcon className={styles.icon} icon={faSearch} />
            </Button>
            {display && (
              <div className={styles.autoContainer}>
                {products.map((option, id) => {
                  return (
                    <div key={id} className={styles.option}>
                      <Link
                        className={styles.link}
                        to={__dirname + `product/${option.id}`}
                      >
                        {option.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
            {displayFilter && (
              <div className={styles.autoContainer}>
                {searchProduct.map((product, id) => {
                  return (
                    <div key={id} className={styles.option}>
                      <Link
                        className={styles.link}
                        to={__dirname + `product/${product.id}`}
                      >
                        {product.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
  products: PropTypes.array,
};

export default ProductSearch;
