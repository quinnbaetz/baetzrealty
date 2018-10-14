import React from 'react'
import { NavLink } from 'react-router-dom';
import translationHOC from 'hocs/translationHOC';

export default translationHOC((props) => (
  <nav>
    <ul className='mainNav'>
      <li><NavLink exact activeClassName="current" to='/'>{props.t('Home')}</NavLink></li>
      <li>
        <NavLink exact activeClassName="current" to='/buyers'>{props.t('Buyers')}</NavLink>
        <ul className='dropdown'>
          <li><NavLink exact activeClassName="current" to='/search'>{props.t('Find Your Home')}</NavLink></li>
        </ul>
      </li>

      <li><NavLink exact activeClassName="current" to='/sellers'>{props.t('Sellers')}</NavLink></li>

    </ul>
  </nav>
))
