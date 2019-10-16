import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import blogApp from './reducers'
import promiseMiddleware from 'redux-promise-middleware';

let store = createStore(blogApp, applyMiddleware(promiseMiddleware))
// react-thunk : 一但發現 dispatch([Funtion])，就會自動執行該 [Function] 並將 dispatch 當作參數傳入
// Type 可以自己訂，下一個物件屬性是 payload，只能放 Promise 如 API Request

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
