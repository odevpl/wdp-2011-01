import React, { useState, useEffect } from 'react';
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
  const [category, setCategory] = useState(window.location.pathname.split('/')[2]);
  const history = useHistory();
  const [categoryProducts, setCategoryProducts] = useState(
    products.filter(item => item.category === category)
  );

  const [companyValues, setCompanyValues] = useState([]);
  const [priceValues, setPriceValues] = useState({ from: 0, to: 0 });
  const [ratingValues, setRatingValues] = useState(5);

  history.listen(() => {
    setCategory(window.location.pathname.split('/')[2]);
    setCategoryProducts(products.filter(item => item.category === category));
  });

  console.log(categoryProducts);

  useEffect(() => {
    //   const filteredProduct = categoryProducts.filter((product) => {
    //     return (
    //       (product.star >= ratingValues)
    //       // (product.price >= priceValues.from && product.price <= priceValues.to)
    //     )
    //   })
    //   console.log(filteredProduct, categoryProducts)
    //   setCategoryProducts(filteredProduct)
    // }, [companyValues, priceValues, ratingValues]);
    console.log(companyValues, priceValues, ratingValues);
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
                setCompanyValues={setCompanyValues}
                category={category}
                categoryProducts={categoryProducts}
                setCategoryProducts={setCategoryProducts}
              />
              <PriceFilter
                setPriceValues={setPriceValues}
                category={category}
                categoryProducts={categoryProducts}
                setCategoryProducts={setCategoryProducts}
              />
              <RatingFilters
                setRatingValues={setRatingValues}
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
