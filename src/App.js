import 'App.scss';
import React, { Component } from 'react';
import logo from './logo.svg';
import { withNamespaces } from 'react-i18next';

import _ from 'lodash'
class App extends Component {
  changeLanguage = (language) => {
    const {i18n} = this.props
    i18n.changeLanguage(language)
  }
  render() {
    const {t, i18n} = this.props
    return (
      <div className="App">
        <header className="App-header">
          BaetzRealty Coming Soon
          <div>
            <ul>
              <li>
                <a
                  href="#en"
                  onClick={_.partial(this.changeLanguage, 'en')}
                >
                  English
                </a>
              </li>
              <li>
                <a
                  href="#es"
                  onClick={_.partial(this.changeLanguage, 'es')}
                >
                  Español
                </a>
              </li>
            </ul>
          </div>

          <nav>
            <ul>
              <li>
                {t('Login')}
                <ul>
                  <li>
                    Steps (with completion) / TODO list
                  </li>
                  <li>
                    {t('Documents')}
                  </li>
                  <li>Docusign api?</li>
                </ul>
              </li>
              <li>
                {t('Blog')}
              </li>
              <li>
                {t('Articles')}
              </li>
              <li>
                Neighborhood updates / summary
              </li>
              <li>
                Seller:
                <ul>
                  <li>Calendar</li>
                  <li>Forms</li>
                  <li>Glossary</li>
                </ul>
              </li>
              <li>
                Buyer:
                <ul>
                  <li>Step by step process</li>
                  <li>Forms</li>
                  <li>Glossary</li>
                  <li>Comparing houses that are staged/not staged</li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          Copy of Joe Dickerson
        </div>
        <footer>
          <span>Talk with me</span>
          KW
        </footer>
      </div>
    );
  }
}

export default withNamespaces('translation')(App);
