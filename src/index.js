import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'

const store = createStore(rootReducer);

const render = (Component) => {
  ReactDOM.render(
    <Provider store = {store}>
      <Component/>
    </Provider>,
  document.getElementById('root'));

}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
