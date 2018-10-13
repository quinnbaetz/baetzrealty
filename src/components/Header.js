import 'components/Header.scss'

import React from 'react';
import { NavLink } from 'react-router-dom';
import translationHOC from 'hocs/translationHOC';
import _ from 'lodash'


const LanguageOption = translationHOC((props) => {
  const {text, language, changeLanguage, currentLanguage} = props
  return (
    <li>
      <a
        className={currentLanguage === language ? 'current' : null }
        href={`#${language}`}
        onClick={_.partial(changeLanguage, language)}
      >
        {text}
      </a>
    </li>
  )
})

class Header extends React.Component {
  render(){
    const {t,changeLanguage, currentLanguage} = this.props
    return (
      <div className="header">
        <nav>
          <ul>
            <li><NavLink exact activeClassName="current" to='/'>{t('Home')}</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/search'>{t('Search')}</NavLink></li>
          </ul>
        </nav>
        <ul className='language'>
          <LanguageOption
            text="English"
            language='en'
          />
          <LanguageOption
            text="Spanish"
            language='es'
          />
        </ul>
      </div>

    )
  }
};


export default translationHOC(Header);
