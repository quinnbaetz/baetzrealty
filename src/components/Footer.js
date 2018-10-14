import React from 'react';
import translationHOC from 'hocs/translationHOC'
import "components/Footer.scss"
const Footer = (props) => (
  <footer className='footer'>
    <div className='top_bar'>
      <div>
        <div className='keller_williams'>
          <img height="62px" src='/kw_white.webp' />
          <span>{props.t("Keller Williams Description")}</span>
        </div>
        <div className='contact'>
          <img height="126px" src='./natalia.webp' />
          <div>
            <span className='name'>Natalia Baetz</span>
            <a href="tel:4154196344">510-698-2741</a>
            <a href="email:nataliabaetz@kw.com">NataliaBaetz@kw.com</a>
            <span>CalBRE # 02044193</span>
            <span>Keller Williams Realty</span>
            <span>4937 Telegraph Ave, Suite A</span>
            <span>Oakland, CA 94609</span>
          </div>
        </div>
      </div>
    </div>
    <div  className='bottom_bar'>
      <div>
        <span>{props.t('copywrite')}</span>
        <div className='logos'>
          <img height="30px" src='/eho.webp' />
          <img height="30px" src='/Realtor.webp' />
        </div>
        <span className='spacer'></span>
      </div>
    </div>
  </footer>

);

export default translationHOC(Footer);
