import React from 'react';
import translationHOC from 'hocs/translationHOC'
const Home = (props) => (
   <div className='home'>
     <h1>Natalia Baetz {props.t('coming soon')}</h1>
   </div>
 );

 export default translationHOC(Home);
