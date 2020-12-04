import { connect } from 'react-redux';

import App from '../app';

const mapStateToProps = (state) => ({
  message: state.message,
});

const Container = connect(mapStateToProps)(App);

export default Container;
