import { connect } from 'react-redux';

import Compare from './Compare';

import { getAll, getCompared } from '../../../redux/productsRedux';

import { isCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  compareProducts: getCompared(state),
  compareValue: isCompare(state),
});

export default connect(mapStateToProps)(Compare);
