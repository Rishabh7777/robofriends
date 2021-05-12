import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
// redux-thunk is middleware
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers.js';
import './index.css';


const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots})
// middleware is ordered, thunk first and then logger
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    {
      <Provider store={store}>
        <App store={store} />
      </Provider>
    }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
