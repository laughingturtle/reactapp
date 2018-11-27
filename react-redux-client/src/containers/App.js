import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    mappedAppState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mappedToggleAddTodo: () => dispatch(appActions.toggleAddTodo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
