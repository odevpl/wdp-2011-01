import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import CategoryFilter from '../../features/CategoryFilter/CategoryFilterContainer';
import FeaturedProducts from '../../features/FeaturedProducts/FeaturedProducts';
import TagsFilter from '../../features/TagsFilter/TagsFilter';
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

  let abc;

  const filter = e => {
    if (e.currentTarget.value === 'Alphabet - A-Z') {
      abc = products
        .filter(item => item.category === category)
        .sort((a, b) => a.name.localeCompare(b.name));
    } else if (e.currentTarget.value === 'Alphabet - Z-A') {
      abc = products
        .filter(item => item.category === category)
        .sort((a, b) => b.name.localeCompare(a.name));
    } else if (e.currentTarget.value === 'Price - Lowest to Highest') {
      abc = products
        .filter(item => item.category === category)
        .sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
    } else if (e.currentTarget.value === 'Price - Highest to Lowest') {
      abc = products
        .filter(item => item.category === category)
        .sort((a, b) => (a.price < b.price ? 1 : b.price < a.price ? -1 : 0));
    } else {
      return null;
    }
    setCategoryProducts(abc);
  };

  return (
    <div className={styles.root}>
      <Grid>
        <Row>
          <section className={styles.filters}>
            <div className={styles.filtersContainer}>
              <div className={styles.selectFilter}>
                <select onChange={e => filter(e)}>
                  <option value='' disabled selected>
                    Sort by
                  </option>
                  <option>Price - Lowest to Highest</option>
                  <option>Price - Highest to Lowest</option>
                  <option>Alphabet - A-Z</option>
                  <option>Alphabet - Z-A</option>
                </select>
              </div>
            </div>
          </section>
        </Row>
        <Row>
          <Col md={8} lg={9} className={styles.content}>
            <div className={styles.leftColumn}>
              <div className='col-12'>
                {categoryProducts.map(item => {
                  return (
                    <div key={item.id}>
                      <ProductBox {...item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col xs md={4} lg={3} className={styles.filters}>
            <div className={styles.rightColumn}>
              <CategoryFilter />
              <TagsFilter />
              <FeaturedProducts />
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
