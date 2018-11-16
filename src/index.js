import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { useStrict } from 'mobx';
// import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import './App.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
