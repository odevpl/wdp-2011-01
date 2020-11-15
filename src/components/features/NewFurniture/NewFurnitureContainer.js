import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll, changeFade } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  changeFade: value => dispatch(changeFade(value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
