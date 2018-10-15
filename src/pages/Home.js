import React from 'react';
import translationHOC from 'hocs/translationHOC'
import 'pages/Home.scss'
const Home = (props) => (
   <div className='home'>
     <h1>Natalia Baetz {props.t('coming soon')}</h1>
     <div class='box_container'>
       <div className='box'>
         <h2>Buyers</h2>
         <p>
           I can help you search for and buy a house, together we will work through every step of the processs.
         </p>
       </div>
       <div className='box'>
         <h2>Selers</h2>
         <p>
           I can help you find a buyer for your house, together we will work through every step of the processs.
         </p>``
       </div>
       <div className='box'>
         <h2>Investors</h2>
         <p>
           We can find a great investment to leverage and increase your passive income, together we will work through every step of the processs.
         </p>
       </div>
     </div>

   </div>
 );

 export default translationHOC(Home);
