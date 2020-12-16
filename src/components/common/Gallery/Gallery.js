import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

class Gallery extends React.Component {
  state = {
    margin: -1250,
  };

  handleLeftSlide(margin) {
    const boxSize = 124;
    this.setState({ margin: margin - boxSize * 4 });
    if (margin <= -2242) {
      this.setState({ margin: margin - boxSize * 2 });
    }
    if (margin <= -2342) {
      this.setState({ margin: -2820 });
    }
  }

  handleRightSlide(margin) {
    const boxSize = 124;
    this.setState({ margin: margin + boxSize * 4 });
    if (margin >= -258) {
      this.setState({ margin: margin + 258 });
    }
    if (margin >= 0) {
      this.setState({ margin: 0 });
    }
  }

  render() {
    const { gallery, stars, handleCompare, heart, compare, id } = this.props;

    const compareHandler = e => {
      e.preventDefault();
      handleCompare(id);
    };

    return (
      <div className={styles.root}>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='row no-gutters align-items-end'>
              <div className={'col-12 ' + styles.heading}>
                <h3>FURNITURE GALLERY</h3>
                <span></span>
              </div>
            </div>
            <div className={'container'}>
              <nav>
                <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                  <a
                    className='nav-item nav-link active'
                    id='nav-feature-tab'
                    data-toggle='tab'
                    href='#nav-freature'
                    role='tab'
                    aria-controls='nav-freature'
                    aria-selected='true'
                    onClick='nav-freature'
                  >
                    FREATURE
                  </a>
                  <a
                    className='nav-item nav-link '
                    id='nav-topseller-tab'
                    data-toggle='tab'
                    href='#nav-topseller'
                    role='tab'
                    aria-controls='nav-topseller'
                    aria-selected='true'
                    onClick='nav-topseller'
                  >
                    TOP SELLER
                  </a>
                  <a
                    className='nav-item nav-link '
                    id='nav-saleoff-tab'
                    data-toggle='tab'
                    href='#nav-saleoff'
                    role='tab'
                    aria-controls='nav-saleoff'
                    aria-selected='true'
                    onClick='nav-saleoff'
                  >
                    SALE OFF
                  </a>
                  <a
                    className='nav-item nav-link '
                    id='nav-topratted-tab'
                    data-toggle='tab'
                    href='#nav-topratted'
                    role='tab'
                    aria-controls='nav-topratted'
                    aria-selected='true'
                    onClick='nav-topratted'
                  >
                    TOP RATTED
                  </a>
                </div>
              </nav>
              <div className='tab-content' id='nav-tabContent'>
                <div
                  className='tab-pane fade show active'
                  id='nav-freature'
                  role='tabpanel'
                  aria-labelledby='nav-freature-tab'
                >
                  {/*feature gallery*/}
                  <div className='col-12'>
                    <img id='expandedImg' src='../../images/bed7.jpeg' />
                    <div className={styles.content}>
                      <h5>Aenean Ru Bristique</h5>
                      <div className={styles.stars}>
                        {[1, 2, 3, 4, 5].map(i => (
                          <a key={i} href='/'>
                            {i <= stars ? (
                              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                            ) : (
                              <FontAwesomeIcon icon={farStar}>
                                {i} stars
                              </FontAwesomeIcon>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className={styles.price}>
                      <h5>$ 120.00</h5>
                      <h6>$ 160</h6>
                    </div>
                    <div className={styles.actions}>
                      <div className='container'>
                        <div className={styles.outline}>
                          <Button
                            className={heart ? styles.heart : ''}
                            variant='outline'
                          >
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className={styles.outline}>
                          <Button
                            className={compare ? styles.compare : ' '}
                            variant='outline'
                            onClick={compareHandler}
                          >
                            <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className={styles.outline}>
                          <Button variant='outline'>
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className={styles.outline}>
                          <Button variant='outline' className={styles.btnAddToCart}>
                            <FontAwesomeIcon icon={faShoppingBasket}>
                              <span>Add to Cart</span>
                            </FontAwesomeIcon>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'row align-items-center ' + styles.wrapper}>
                    <Button
                      className={styles.button}
                      onClick={() => this.handleLeftSlide(this.state.margin)}
                    >
                      <span className={styles.arrow}> &lt; </span>
                    </Button>
                    <div className={styles.galleryParent}>
                      <div
                        className={styles.galleryChild}
                        style={{ marginLeft: this.state.margin }}
                      >
                        {gallery.map(feature => {
                          return (
                            <div
                              className={styles.image}
                              key={feature.id.replace('feature-', '')}
                            >
                              <img src={feature.image} alt={feature.id} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <Button
                      className={styles.button + ' ' + styles.buttonTwo}
                      onClick={() => this.handleRightSlide(this.state.margin)}
                    >
                      <span className={styles.arrow}> &gt; </span>
                    </Button>
                  </div>
                </div>
                <div
                  className='tab-pane fade '
                  id='nav-topseller'
                  role='tabpanel'
                  aria-labelledby='nav-topseller-tab'
                >
                  {/*top seller gallery*/}
                  <div className='col-12'>
                    <img id='expandedImg' src='../../images/bed8.jpeg' />
                    <div className={styles.content}>
                      <h5>Aenean Ru Bristique</h5>
                      <div className={styles.stars}>
                        {[1, 2, 3, 4, 5].map(i => (
                          <a key={i} href='/'>
                            {i <= stars ? (
                              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                            ) : (
                              <FontAwesomeIcon icon={farStar}>
                                {i} stars
                              </FontAwesomeIcon>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className={styles.price}>
                      <h5>$ 120.00</h5>
                      <h6>$ 160</h6>
                    </div>
                    <div className={styles.actions}>
                      <div className='container'>
                        <div className={styles.outline}>
                          <Button
                            className={heart ? styles.heart : ''}
                            variant='outline'
                          >
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className={styles.outline}>
                          <Button
                            className={compare ? styles.compare : ' '}
                            variant='outline'
                            onClick={compareHandler}
                          >
                            <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className={styles.outline}>
                          <Button variant='outline'>
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className={styles.outline}>
                          <Button variant='outline' className={styles.btnAddToCart}>
                            <FontAwesomeIcon icon={faShoppingBasket}>
                              <span>Add to Cart</span>
                            </FontAwesomeIcon>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'row align-items-center ' + styles.wrapper}>
                    <Button
                      className={styles.button}
                      onClick={() => this.handleLeftSlide(this.state.margin)}
                    >
                      <span className={styles.arrow}> &lt; </span>
                    </Button>
                    <div className={styles.galleryParent}>
                      <div
                        className={styles.galleryChild}
                        style={{ marginLeft: this.state.margin }}
                      >
                        {gallery.map(topseller => {
                          return (
                            <div
                              className={styles.image}
                              key={topseller.id.replace('topseller-', '')}
                            >
                              <img src={topseller.image} alt={topseller.id} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <Button
                      className={styles.button + ' ' + styles.buttonTwo}
                      onClick={() => this.handleRightSlide(this.state.margin)}
                    >
                      <span className={styles.arrow}> &gt; </span>
                    </Button>
                  </div>
                </div>
                <div
                  className='tab-pane fade '
                  id='nav-saleoff'
                  role='tabpanel'
                  aria-labelledby='nav-saleoff-tab'
                >
                  {/*sale off gallery*/}
                  <div className='col-12'>
                    <img id='expandedImg' src='../../images/bed7.jpeg' />
                    <div className={styles.content}>
                      <h5>Aenean Ru Bristique</h5>
                      <div className={styles.stars}>
                        {[1, 2, 3, 4, 5].map(i => (
                          <a key={i} href='/'>
                            {i <= stars ? (
                              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                            ) : (
                              <FontAwesomeIcon icon={farStar}>
                                {i} stars
                              </FontAwesomeIcon>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className={styles.price}>
                      <h5>$ 120.00</h5>
                      <h6>$ 160</h6>
                    </div>
                    <div className={styles.actions}>
                      <div className='container'>
                        <div className={styles.outline}>
                          <Button
                            className={heart ? styles.heart : ''}
                            variant='outline'
                          >
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className={styles.outline}>
                          <Button
                            className={compare ? styles.compare : ' '}
                            variant='outline'
                            onClick={compareHandler}
                          >
                            <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className={styles.outline}>
                          <Button variant='outline'>
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className={styles.outline}>
                          <Button variant='outline' className={styles.btnAddToCart}>
                            <FontAwesomeIcon icon={faShoppingBasket}>
                              <span>Add to Cart</span>
                            </FontAwesomeIcon>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'row align-items-center ' + styles.wrapper}>
                    <Button
                      className={styles.button}
                      onClick={() => this.handleLeftSlide(this.state.margin)}
                    >
                      <span className={styles.arrow}> &lt; </span>
                    </Button>
                    <div className={styles.galleryParent}>
                      <div
                        className={styles.galleryChild}
                        style={{ marginLeft: this.state.margin }}
                      >
                        {gallery.map(saleoff => {
                          return (
                            <div
                              className={styles.image}
                              key={saleoff.id.replace('saleoff-', '')}
                            >
                              <img src={saleoff.image} alt={saleoff.id} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <Button
                      className={styles.button + ' ' + styles.buttonTwo}
                      onClick={() => this.handleRightSlide(this.state.margin)}
                    >
                      <span className={styles.arrow}> &gt; </span>
                    </Button>
                  </div>
                </div>
                <div
                  className='tab-pane fade '
                  id='nav-saleoff'
                  role='tabpanel'
                  aria-labelledby='nav-topratted-tab'
                >
                  {/*top ratted gallery</div>*/}
                  <div className='col-12'>
                    <img id='expandedImg' src='../../images/bed7.jpeg' />
                    <div className={styles.content}>
                      <h5>Aenean Ru Bristique</h5>
                      <div className={styles.stars}>
                        {[1, 2, 3, 4, 5].map(i => (
                          <a key={i} href='/'>
                            {i <= stars ? (
                              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                            ) : (
                              <FontAwesomeIcon icon={farStar}>
                                {i} stars
                              </FontAwesomeIcon>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className={styles.price}>
                      <h5>$ 120.00</h5>
                      <h6>$ 160</h6>
                    </div>
                    <div className={styles.actions}>
                      <div className='container'>
                        <div className={styles.outline}>
                          <Button
                            className={heart ? styles.heart : ''}
                            variant='outline'
                          >
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className={styles.outline}>
                          <Button
                            className={compare ? styles.compare : ' '}
                            variant='outline'
                            onClick={compareHandler}
                          >
                            <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className={styles.outline}>
                          <Button variant='outline'>
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className={styles.outline}>
                          <Button variant='outline' className={styles.btnAddToCart}>
                            <FontAwesomeIcon icon={faShoppingBasket}>
                              <span>Add to Cart</span>
                            </FontAwesomeIcon>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'row align-items-center ' + styles.wrapper}>
                    <Button
                      className={styles.button}
                      onClick={() => this.handleLeftSlide(this.state.margin)}
                    >
                      <span className={styles.arrow}> &lt; </span>
                    </Button>
                    <div className={styles.galleryParent}>
                      <div
                        className={styles.galleryChild}
                        style={{ marginLeft: this.state.margin }}
                      >
                        {gallery.map(topratted => {
                          return (
                            <div
                              className={styles.image}
                              key={topratted.id.replace('topratted-', '')}
                            >
                              <img src={topratted.image} alt={topratted.id} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <Button
                      className={styles.button + ' ' + styles.buttonTwo}
                      onClick={() => this.handleRightSlide(this.state.margin)}
                    >
                      <span className={styles.arrow}> &gt; </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'col-lg-6 ' + styles.photo}>
            <img src='../../images/bed1.jpeg' />
            <h2>
              <span>FROM </span> $50.80
            </h2>
            <h1>Bedroom Bed</h1>
            <h4>
              <a href=''>SHOP NOW</a>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  image: PropTypes.any,
  id: PropTypes.any,
  map: PropTypes.func,
  gallery: PropTypes.array,
  stars: PropTypes.number,
  handleFavourite: PropTypes.func.isRequired,
  handleCompare: PropTypes.func.isRequired,
  heart: PropTypes.bool,
  compare: PropTypes.bool,
};

export default Gallery;
