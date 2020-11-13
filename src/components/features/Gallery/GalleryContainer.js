import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getGallery } from '../../../redux/galleryRedux.js';

const mapStateToProps = state => ({
  gallery: state.galleryContent,
});

export default connect(mapStateToProps)(Gallery);
