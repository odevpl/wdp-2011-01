import { connect } from 'react-redux';
import Tags from './Tags';

const mapStateToProps = state => ({
  tagsContent: state.tagsContent,
});

export default connect(mapStateToProps)(Tags);
