import React, {PureComponent} from 'react';
import 'pages/SearchProperty.scss'
import Spinner from 'react-spinkit'

var url = "https://nataliabaetz.realscout.com/homesearch/map?ptype=SFR,TC&clat=37.81670030664058&clng=-122.22736358642577&zoom=12&pmin=2000000"

class SearchProperty extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {loading: true}
  }
  onLoad = () => {
    this.setState({
      loading: false
    })
  }

  setupIframe = () => {
    const rect = this.refs.container.getBoundingClientRect()
    window.myIframe.style.display = 'block'
    window.myIframe.style.position = 'absolute'
    console.log("Setting style top to ", rect.top)
    window.myIframe.style.top = rect.top + "px"
    window.myIframe.style.bottom = rect.bottom + "px"
    window.myIframe.width = rect.width + "px"
    window.myIframe.height = rect.height + "px"
  }

  componentDidMount() {
    this.setupIframe()
    window.addEventListener("resize", this.setupIframe)
  }
  componentWillUnmount() {
    window.myIframe.style.display = 'none'
    window.removeEventListener("resize", this.setupIframe)
  }

  render(){
      const {loading} = this.state
      return (
        <div ref='container' className='SearchProperty'>

        </div>
      );
  }
}

export default SearchProperty
