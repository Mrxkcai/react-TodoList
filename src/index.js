import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//App组件 大写字母开头
import App from './App';
// PWA progressive web application
// https 协议的服务器上 类似于app用户访问过的网页会被缓存下来，断网时也可查看
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
