import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import Tabs from './Tabs.js';

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
            <div className={'col-auto ' + styles.heading}>
              <h3>Furniture Gallery</h3>
            </div>
            <div className={styles.line}></div>
            <div className='container'>
              {/*         
    <Tabs>
      <Tab><button onClick='featured'>featured</button></Tab>
      <Tab><button onClick='top-seller'>top seller</button></Tab>
      <Tab><button onClick='sale-off'>sale off</button></Tab>
      <Tab><button onClick='ratted'>top ratted</button></Tab>
    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
*/}
              <div className='tab'>
                <button onClick='featured'>featured</button>
                <button onClick='top-seller'>top seller</button>
                <button onClick='sale-off'>sale off</button>
                <button onClick='ratted'>top ratted</button>
              </div>
              <div className='featured'>
                <img src='../../images/bed1.jpeg' />
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
  gallery: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
};

export default Gallery;

{
  /*
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

 
const Tabs () => {
  return (
  <Tabs>
    <TabList>
      <Tab>FURNITURE</Tab>
      <Tab>TOP SELLER</Tab>
      <Tab>SALE OFF</Tab>
      <Tab>TOP RATTED</Tab>
    </TabList>
 
    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
  );
};
export default Tabs;
*/
}
