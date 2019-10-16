import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo_fiesc_branco.png';
import './styles.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-options-menu">
          <img src={Logo} alt="logo"/>
          <div className="buttons">
            <Link to="/sesi" > SESI </Link>
            <Link to="/senai">  SENAI </Link>
          </div>
        </div>
        <div className="header-user-menu">
          <a href="/">User Dropdown</a>
        </div>
      </div>
    );
  }
}

