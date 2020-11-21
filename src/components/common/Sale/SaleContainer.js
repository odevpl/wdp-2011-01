import { connect } from 'react-redux';
import Sale from './Sale';

const mapStateToProps = state => ({
  saleContent: state.saleContent,
});

export default connect(mapStateToProps)(Sale);
