import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import CategoryFilter from '../../features/CategoryFilter/CategoryFilterContainer';
import ColorFilter from '../../features/ColorFilter/ColorFilter';
import FeaturedProducts from '../../features/FeaturedProducts/FeaturedProducts';
import TagsFilter from '../../features/TagsFilter/TagsFilter';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Brands from '../../layout/Brands/BrandsContainer';
import Banner from '../../features/Banner/BannerContainer';

const ProductList = () => (
  <div className={styles.root}>
    <Grid>
      <Row>
        <Col md={8} lg={9} className={styles.content}>
          <div className={styles.leftColumn}>Zawartość</div>
        </Col>
        <Col xs md={4} lg={3} className={styles.filters}>
          <div className={styles.rightColumn}>
            <Banner></Banner>
            <CategoryFilter />
            <ColorFilter />
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

export default ProductList;
