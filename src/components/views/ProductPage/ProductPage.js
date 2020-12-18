import React, { useState } from 'react';
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
    availability = `In Stock(${quantity})`;
  }

  const [count, setCount] = useState(quantity);

  const handleIncrease = quantity => {
    if (quantity >= 0 && quantity < 10) {
      setCount(quantity + 1);
    }
  };

  const handleDecrease = quantity => {
    if (quantity > 0) {
      setCount(quantity - 1);
    }
  };

  const handleChange = value => {
    console.log(value);
    if (quantity > 0) {
      setCount(value);
    } else if (quantity === 0) {
      setCount(value);
    }
  };

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
          <Row className={styles.mainRow}>
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
                <Row>
                  {olderPrice ? (
                    <div className={styles.olderPrice}>{olderPrice}</div>
                  ) : (
                    ''
                  )}
                  <div className={styles.quantity}>
                    <p>Quantity</p>
                    <input
                      onChange={e => handleChange(parseInt(e.target.value))}
                      className={styles.inputSmall}
                      type='number'
                      defaultValue={count}
                      value={count}
                    ></input>
                    <Button
                      variant='outlineYellow'
                      onClick={() => handleDecrease(count)}
                    >
                      <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                    </Button>
                    <Button
                      variant='outlineYellow'
                      onClick={() => handleIncrease(count)}
                    >
                      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </Button>
                  </div>
                  <div className={styles.priceWrapper}>
                    <div className={styles.price}>
                      <span>{count >= 0 ? count * price : setCount('')}</span>
                    </div>
                  </div>
                </Row>
              </div>
              <div className={styles.productDetailsSection}>
                <Row>
                  <div>
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
                </Row>
              </div>
              <div className={styles.productDetailsSection}>
                <Row>
                  <p>
                    <span>Quick Overview</span>
                    <br />
                    {overview}
                  </p>
                </Row>
              </div>
              <div className={styles.productDetailsSection}>
                <Row>
                  <p>
                    <span>
                      Availability:{' '}
                      <span className={styles.availability}>{availability}</span>{' '}
                    </span>
                  </p>
                </Row>
                <Row>
                  <p>
                    <span>
                      Category: {category.charAt(0).toUpperCase() + category.slice(1)}{' '}
                    </span>
                  </p>
                </Row>
              </div>
              <div className={styles.productDetailsSection}>
                <Row>
                  <div>
                    <div className={styles.social}>
                      <Link>
                        <Button variant='outlineFacebook'>
                          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>Share
                        </Button>
                      </Link>
                      <Link>
                        <Button variant='outlineGoogle'>
                          <FontAwesomeIcon
                            icon={faGooglePlusG}
                            className={styles.googleplus}
                          ></FontAwesomeIcon>{' '}
                          Google+
                        </Button>
                      </Link>
                      <Link>
                        <Button variant='outlineTwitter'>
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className={styles.twitter}
                          ></FontAwesomeIcon>{' '}
                          Tweet
                        </Button>
                      </Link>
                      <Link>
                        <Button variant='outlinePinterest'>
                          <FontAwesomeIcon
                            icon={faPinterestP}
                            className={styles.pinterest}
                          ></FontAwesomeIcon>{' '}
                          Pinterest
                        </Button>
                      </Link>
                      <Link>
                        <Button variant='outlineLinkedIn'>
                          <FontAwesomeIcon
                            icon={faLinkedinIn}
                            className={styles.linkedin}
                          ></FontAwesomeIcon>{' '}
                          LinkedIn
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Row>
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
