import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';
//import ProductBox from '../../common/ProductBox/ProductBox';

class Gallery extends React.Component {
  state = {
    activeTab: 'top-seller',
  };

  handleTabChange(newTab) {
    this.setState({ activeTab: newTab });
  }

  render() {
    const { activeTab } = this.state;
    {
      /*  
    const { tabs, products } = this.props;
    const TabProducts = products.filter(item => item.tab === activeTab);
    const tabssCount = Math.ceil(tabProducts.length);
    
    for (let i = 0; i < tabsCount; i++) {
      tabs.push(
        <li>
          <a
            onClick={() => this.handleTabChange(i)}
            className={i === activeTab && styles.active}
          >
            tab {i}
          </a>
        </li>
      );
    }
    */
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className='left-col-wrapper'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>Furniture Gallery</h3>
                </div>
                <div className='row'>
                  <div className='container'>
                    <div className='tab'>
                      <button onClick='featured'>featured</button>
                      <button onClick='top-seller'>top seller</button>
                      <button onClick='sale-off'>sale off</button>
                      <button onClick='ratted'>top ratted</button>
                    </div>

                    <div id='featured' className='tabcontent'>
                      <div className='img-box'>
                        <img src='https://images.pexels.com/photos/3773582/pexels-photo-3773582.png' />
                      </div>
                    </div>

                    <div id='top-seller' className='tabcontent'>
                      <img src='https://images.pexels.com/photos/5337386/pexels-photo-5337386.jpeg' />
                    </div>

                    <div id='sale-off' className='tabcontent'>
                      <img src='https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg' />
                    </div>

                    <div id='ratted' className='tabcontent'>
                      <img src='https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg' />
                    </div>

                    <div className='row'>
                      <div className='col-3 img-choose'>
                        <img
                          src='https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg'
                          alt='ferniture'
                          onClick='this'
                        />
                      </div>
                      <div className='col-3 img-choose'>
                        <img
                          src='https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg'
                          alt='ferniture'
                          onClick='this'
                        />
                      </div>
                      <div className='col-3 img-choose'>
                        <img
                          src='https://images.pexels.com/photos/5337386/pexels-photo-5337386.jpeg'
                          alt='ferniture'
                          onClick='this'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-6'>
              <div className='img-wrapper'>
                <img src='https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg' />
                <div>
                  From<span className='span-one'>$50.80</span>
                  <span className='span-two'>Bedroom Bed</span>
                  <a href=''>shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
