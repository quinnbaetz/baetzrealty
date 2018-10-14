import React from 'react';
import "components/Footer.scss"
const Footer = () => (
  <div className='footer'>
    <img height="100px" src='/kw.webp' />
    <div className='contact'>
      <span className='name'>Natalia Baetz</span>
      <a href="tel:4154196344">510-698-2741</a>
      <a href="email:nataliabaetz@kw.com">NataliaBaetz@kw.com</a>
      <span>CalBRE#02044193</span>
    </div>
    <div className='logos'>
      <img height="50px" src='/eho.webp' />
      <img height="50px" src='/Realtor.webp' />
    </div>
  </div>

);

export default Footer;
