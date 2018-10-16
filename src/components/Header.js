import 'components/Header.scss'

import React from 'react';
import translationHOC from 'hocs/translationHOC';
import _ from 'lodash'
import Nav from 'components/Nav'

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
    return (
      <div className="header">
        <div className="header_contact_wrapper">
          <div className='header_contact'>
            <div>
              Natalia Baetz
            </div>
            <div>
              <span>510-698-2741</span>
              <span>NataliaBaetz@kw.com</span>
            </div>
          </div>
        </div>
        <div className="header_main_wrapper">
          <div className="header_main">
            <Nav />
            <ul className='language'>
              <LanguageOption
                text="English"
                language='en'
              />
              <LanguageOption
                text="Español"
                language='es'
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
};


export default translationHOC(Header);
