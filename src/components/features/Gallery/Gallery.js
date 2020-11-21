import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';

const Gallery = ({ bed }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
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
              <div>
                <img src='https://images.pexels.com/photos/3554424/pexels-photo-3554424.jpeg' />
              </div>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='img-wrapper'>
            <img
              src='https://images.pexels.com/photos/3554424/pexels-photo-3554424.jpeg'
              alt='gallery-right'
            />
            <div className='gall-text'>
              <h2 className='gall-text-one'>
                FROM<span>$50.80</span>
              </h2>
              <h2>
                <span>Bedroom Bed</span>
              </h2>
              <a href=''>shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Gallery.propTypes = {
  bed: PropTypes.string,
};

export default Gallery;
