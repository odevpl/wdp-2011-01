import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import Button from '../../common/Button/Button';
import Stars from '../../common/Stars/StarsContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faChevronLeft,
  faChevronRight,
  faShoppingBasket,
  faHeart,
  faExchangeAlt,
  faEnvelope,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import ProductMore from '../../common/ProductMore/ProductMoreContainer';

const ProductPage = ({
  image,
  name,
  stars,
  price,
  olderPrice,
  overview,
  quantity,
  category,
  manufacturer,
  id,
}) => {
  var availability = 'Unavailable';
  if (quantity > 0) {
    availability = 'In Stock';
  }

  return (
    <div className={styles.root}>
      <Grid>
        <Row className={styles.panelBar}>
          <Col className={styles.heading}>
            <h3 className={styles.categoryIdentyfier}>
              Electronic {'> '} {category}
            </h3>
          </Col>
        </Row>
        <div className={styles.productBox}>
          <Row>
            <Col sm={12} md={6} className={styles.photoWrapper}>
              <Row>
                <Col sm={12}>
                  <img
                    className={styles.mainPhoto}
                    src={`${image}`}
                    alt={category}
                  ></img>
                </Col>
              </Row>
              <Row className={styles.miniSliderWrapper}>
                <Col sm={12} className={styles.miniSlider}>
                  <Button variant='outlineYellow' className={styles.button}>
                    <FontAwesomeIcon icon={faChevronLeft}>Favorite</FontAwesomeIcon>
                  </Button>
                  <div>
                    <img className={styles.photo} src={`${image}`} alt={category}></img>
                  </div>
                  <div>
                    <img className={styles.photo} src={`${image}`} alt={category}></img>
                  </div>
                  <div>
                    <img className={styles.photo} src={`${image}`} alt={category}></img>
                  </div>
                  <Button variant='outlineYellow' className={styles.button}>
                    <FontAwesomeIcon icon={faChevronRight}>Favorite</FontAwesomeIcon>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6}>
              <div className={styles.productDetailsSection}>
                <Row className={styles.headerRow}>
                  <Col>
                    <h5>{name}</h5>
                    <p>From {manufacturer}</p>
                  </Col>
                  <Col>
                    <Button variant='outlineYellow'>
                      <FontAwesomeIcon icon={faChevronLeft}>Favorite</FontAwesomeIcon>
                    </Button>
                    <Button variant='outlineYellow'>
                      <FontAwesomeIcon icon={faChevronRight}>Favorite</FontAwesomeIcon>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className={styles.review}>
                      <Stars rate={stars} handleStar={() => {}} />
                      <p>(0 reviews)</p>
                      <Link to={`/product/${id}/review`}>
                        <Button variant='outline'>Add your review</Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={styles.productDetailsSection}>
                <div className='row justify-content-start'>
                  {olderPrice ? (
                    <div className={'col-2 ' + styles.olderPrice}>{olderPrice}</div>
                  ) : (
                    ''
                  )}
                  <div className={'col-2 ' + styles.price}>{price}</div>
                </div>
              </div>
              <div className={styles.productDetailsSection}>
                <div className='row'>
                  <div className='col'>
                    <div className={styles.buttons}>
                      <Button variant='outlineYellow'>
                        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD
                        TO CART
                      </Button>
                      <Button variant='outlineYellow'>
                        <FontAwesomeIcon icon={faHeart} />
                      </Button>
                      <Button variant='outlineYellow'>
                        <FontAwesomeIcon icon={faExchangeAlt} />
                      </Button>
                      <Button variant='outlineYellow'>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <div className={styles.quantity}>
                      <p>Quantity</p>
                      <input
                        className={styles.inputSmall}
                        type='number'
                        defaultValue='2'
                      ></input>
                      <Button variant='outlineYellow'>
                        <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                      </Button>
                      <Button variant='outlineYellow'>
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.productDetailsSection}>
                <div className='row'>
                  <div className='col'>
                    <p>
                      <span>Quick Overview</span>
                      <br />
                      {overview}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.productDetailsSection}>
                <div className='row'>
                  <div className='col-2'>
                    <p>
                      <span>Availability:</span>
                    </p>
                  </div>
                  <div className='col-2'>
                    <p> {availability} </p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-2'>
                    <p>
                      <span>Category:</span>
                    </p>
                  </div>
                  <div className='col-2'>
                    <p> {category} </p>
                  </div>
                </div>
              </div>
              <div className={styles.productDetailsSection}>
                <div className='row'>
                  <div className='col'>
                    <div className={styles.social}>
                      <Button variant='outlineFacebook'>
                        <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>Share
                      </Button>
                      <Button variant='outlineGoogle'>
                        <FontAwesomeIcon
                          icon={faGooglePlusG}
                          className={styles.googleplus}
                        ></FontAwesomeIcon>{' '}
                        Google+
                      </Button>
                      <Button variant='outlineTwitter'>
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className={styles.twitter}
                        ></FontAwesomeIcon>{' '}
                        Tweet
                      </Button>
                      <Button variant='outlinePinterest'>
                        <FontAwesomeIcon
                          icon={faPinterestP}
                          className={styles.pinterest}
                        ></FontAwesomeIcon>{' '}
                        Pinterest
                      </Button>
                      <Button variant='outlineLinkedIn'>
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          className={styles.linkedin}
                        ></FontAwesomeIcon>{' '}
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Grid>
      <ProductMore />
    </div>
  );
};

ProductPage.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  olderPrice: PropTypes.string,
  overview: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default ProductPage;
