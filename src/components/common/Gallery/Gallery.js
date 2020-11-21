import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';

class Gallery extends React.Component {
  state = {
    activePage: 0,
    tabIndex: 0,
  };

  handlePageChange(no) {}

  render() {
    const { gallery, count } = this.props;
    const { activePage } = this.state;
    const item = gallery[0];

    return (
      <div className={styles.root}>
        <div className='row'>
          <div className='col-6'>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Furniture Gallery</h3>
              </div>
            </div>
            <div className={'container'}>
              <nav>
                <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                  <a className='nav-item nav-link active' id='nav-feature-tab' data-toggle='tab' href="#nav-freature" role='tab' aria-controls='nav-freature' aria-selected='true'>FREATURE</a>
                  <a className='nav-item nav-link ' id='nav-topseller-tab' data-toggle='tab' href="#nav-topseller" role='tab' aria-controls='nav-topseller' aria-selected='true'>TOP SELLER</a>
                  <a className='nav-item nav-link ' id='nav-saleoff-tab' data-toggle='tab' href="#nav-saleoff" role='tab' aria-controls='nav-saleoff' aria-selected='true'>SALE OFF</a>
                  <a className='nav-item nav-link ' id='nav-topratted-tab' data-toggle='tab' href="#nav-topratted" role='tab' aria-controls='nav-topratted' aria-selected='true'>TOP RATTED</a>
                </div>
              </nav>
              <div className='tab-content' id='nav-tabContent'>
                <div className='tab-pane fade show active' id='nav-freature' role='tabpanel' aria-labelledby='nav-freature-tab'>
                  {/*feature gallery*/}
                  <div className='col-12'>
                    <img id="expandedImg" src='../../images/bed7.jpeg' />
                  </div>
                  <div className={'row align-items-center ' + styles.wrapper}>
                    <Button className={styles.button} onClick={() => this.handleLeftSlide(this.state.margin)}
                    >
                      <span className={styles.arrow}> &lt; </span>
                    </Button>
                    <div className={styles.galleryParent}>
                      <div className={styles.galleryChild} style={{ marginLeft: this.state.margin }}
                      >
                        {gallery.map(feature => {
                          return (
                            <div className={styles.image} key={feature.id.replace('feature-', '')}>
                              <img src={feature.image} alt={feature.id} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <Button className={styles.button + ' ' + styles.buttonTwo} onClick={() => this.handleRightSlide(this.state.margin)}
                    >
                      <span className={styles.arrow}> &gt; </span>
                    </Button>
                  </div>
                </div>
                <div className="tab-pane fade " id="nav-topseller" role="tabpanel" aria-labelledby="nav-topseller-tab">
                  {/*top seller gallery*/}
                </div>
                <div className="tab-pane fade " id="nav-saleoff" role="tabpanel" aria-labelledby="nav-saleoff-tab">
                  {/*sale off gallery*/}
                </div>
                <div className="tab-pane fade " id="nav-saleoff" role="tabpanel" aria-labelledby='nav-topratted-tab'>
                  {/*top ratted gallery</div>*/}
                </div>
              </div>
            </div>
          </div>
          <div className='col-6'>
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
};

export default Gallery;