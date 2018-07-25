import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountsUIWrapper from '../accounts/AccountsUIWrapper.js';

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <b>Header</b> &nbsp;
        <NavLink activeClassName="active" exact to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/products">Products</NavLink>
        <NavLink activeClassName="active" to="/about">About</NavLink>
        <NavLink activeClassName="active" to="/contact">Contact Us</NavLink>
        {/*<NavLink to="/bad-url">Not Found Page</NavLink>*/}
        <AccountsUIWrapper />
      </header>
    );
  }
}
