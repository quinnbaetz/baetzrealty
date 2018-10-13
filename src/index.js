import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './components/Page';
import * as serviceWorker from './serviceWorker';
import './i18n';
import 'index.scss'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render((
  <BrowserRouter>
    <Page />
  </BrowserRouter>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
