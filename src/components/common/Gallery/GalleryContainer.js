import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getAll, getCount } from '../../../redux/galleryRedux.js';

const mapStateToProps = state => ({
  gallery: getAll(state),
  count: getCount(state),
});

export default connect(mapStateToProps)(Gallery);
