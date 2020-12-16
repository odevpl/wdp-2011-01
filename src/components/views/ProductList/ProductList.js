import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import CompanyFilter from '../../features/CompanyFilter/CompanyFilterContainer';
import PriceFilter from '../../features/PriceFilter/PriceFilterContainer';
import SortingFilter from '../../features/SortingFilter/SortingFilter';
import RatingFilters from '../../features/RatingFilter/RatingFilter';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Brands from '../../layout/Brands/BrandsContainer';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import { useHistory } from 'react-router-dom';

const ProductList = ({ products }) => {
  const [category, setCategory] = useState('laptop');
  const history = useHistory();
  const [categoryProducts, setCategoryProducts] = useState(
    products.filter(item => item.category === category)
  );

  history.listen(() => {
    setCategory(window.location.pathname.split('/')[2]);
    setCategoryProducts(products.filter(item => item.category === category));
  });

  return (
    <div className={styles.root}>
      <Grid>
        <Row>
          <SortingFilter
            products={products}
            category={category}
            categoryProducts={categoryProducts}
            setCategoryProducts={setCategoryProducts}
          />
        </Row>
        <Row>
          <Col md={8} lg={9} className={styles.content}>
            <div className={styles.leftColumn}>
              <div className='col-12'>
                {categoryProducts.length > 0 &&
                  categoryProducts.map(item => {
                    return (
                      <div key={item.id}>
                        <ProductBox {...item} />
                      </div>
                    );
                  })}
                {categoryProducts.length <= 0 && (
                  <div className={styles.noProduct}>
                    <p>No product available in given criteria. Please search again.</p>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col xs md={4} lg={3} className={styles.filters}>
            <div className={styles.rightColumn}>
              <CompanyFilter
                category={category}
                categoryProducts={categoryProducts}
                setCategoryProducts={setCategoryProducts}
              />
              <PriceFilter
                category={category}
                categoryProducts={categoryProducts}
                setCategoryProducts={setCategoryProducts}
              />
              <RatingFilters
                products={products}
                category={category}
                categoryProducts={categoryProducts}
                setCategoryProducts={setCategoryProducts}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Brands />
        </Row>
      </Grid>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
