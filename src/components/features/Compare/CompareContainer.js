import { connect } from 'react-redux';

import Compare from './Compare';

import {
  getAll,
  getCompared,
  handleCompare,
  compareReset,
} from '../../../redux/productsRedux';

import { handleCompareValue, isCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  compareProducts: getCompared(state),
  compareValue: isCompare(state),
});

const mapDispatchToProps = dispatch => ({
  handleCompare: value => dispatch(handleCompare(value)),
  handleCompareValue: value => dispatch(handleCompareValue(value)),
  compareReset: () => dispatch(compareReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
