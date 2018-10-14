import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './components/Page';
import * as serviceWorker from './serviceWorker';
import './i18n';
import 'index.scss'
import { BrowserRouter } from 'react-router-dom';
var url = "https://nataliabaetz.realscout.com/homesearch/map?ptype=SFR,TC&clat=37.81670030664058&clng=-122.22736358642577&zoom=12&pmin=2000000"


ReactDOM.render((
  <fragment>
    <iframe
        style={{
          display: 'none'
        }}
        ref={(ref) => {
          //TODO: this is a big hack, but
          window.myIframe = ref
        }}
        scrolling="auto"
        src={url}
        //onLoad={this.onLoad}
      />
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  </fragment>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
