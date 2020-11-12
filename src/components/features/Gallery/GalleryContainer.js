import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  tabs: getNew(state),
});

export default connect(mapStateToProps)(Gallery);
