import { connect } from 'react-redux';

import CategoryFilter from './CategoryFilter';

import { getAll } from '../../../redux/categoriesRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
});

export default connect(mapStateToProps)(CategoryFilter);
