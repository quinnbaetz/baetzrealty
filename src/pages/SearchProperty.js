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
  render(){
      const {loading} = this.state
      return (
        <div className='SearchProperty'>
          <iframe
            style={{
              display: loading ? 'none' : 'block'
            }}
            width='100%'
            height="100%"
            scrolling="auto"
            src={url}
            onLoad={this.onLoad}
          />

          {loading && <div style={{
            position: "absolute",
            top: "50%",
            left: "50%"
          }}>
            <Spinner name="ball-spin-fade-loader" />
          </div>}
        </div>
      );
  }
}

export default SearchProperty
