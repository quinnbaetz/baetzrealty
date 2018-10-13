import 'components/Body.scss'

import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home'
import SearchProperty from 'pages/SearchProperty'

const Body = () => (
  <div className='body'>
     <Switch>
       <Route exact path='/' component={Home}></Route>
       <Route exact path='/search' component={SearchProperty}></Route>
     </Switch>
   </div>
);

export default Body;
