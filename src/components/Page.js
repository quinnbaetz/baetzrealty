import React from 'react';
import Header from 'components/Header'
import Body from 'components/Body'
import Footer from 'components/Footer'
import 'components/Page.scss'
var url = "https://nataliabaetz.realscout.com/homesearch/map?ptype=SFR,TC&clat=37.81670030664058&clng=-122.22736358642577&zoom=12&pmin=2000000"

const Page = () => (
  <div className='page'>
    <Header />
    <Body />
    <Footer />
  </div>
)

export default Page
