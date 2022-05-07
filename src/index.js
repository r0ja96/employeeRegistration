import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {loginFields} from './redux/reducers/loginReducers'

const logger = createLogger();
const rootReducer = combineReducers({loginFields});
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
,document.getElementById('root'));

