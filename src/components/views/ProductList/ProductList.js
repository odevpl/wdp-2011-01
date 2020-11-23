import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import CategoryFilter from '../../features/CategoryFilter/CategoryFilterContainer';
import FeaturedProducts from '../../features/FeaturedProducts/FeaturedProducts';
import { Grid, Row, Col } from 'react-flexbox-grid';

const ProductList = () => (
  <div className={styles.root}>
    <Grid>
      <Row>
        <Col md={8} lg={9} className={styles.content}>
          <div className={styles.leftColumn}>Zawartość</div>
        </Col>

        <Col xs md={4} lg={3} className={styles.filters}>
          <div className={styles.rightColumn}>
            <CategoryFilter />
            <FeaturedProducts />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
