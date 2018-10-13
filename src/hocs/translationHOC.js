import { withNamespaces } from 'react-i18next';
import React, {PureComponent} from 'react'



export default (WrappedComponent) => {
  class TranslationHOC extends React.PureComponent {
    changeLanguage = (language) => {
      const {i18n} = this.props
      i18n.changeLanguage(language)
    }

    render() {
      const {i18n} = this.props
      return (<WrappedComponent
        {...this.props}
        currentLanguage={i18n.language}
        changeLanguage={this.changeLanguage}
      />)
    }
  }

  return withNamespaces('translation')(TranslationHOC)
}
