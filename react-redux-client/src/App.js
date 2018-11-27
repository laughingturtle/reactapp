import React, { Component} from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import propTypes from 'prop-types';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import routes from '.routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  store: propTypes.object.isRequired,
  history: propTypes.object.isRequired
}

export default App;
