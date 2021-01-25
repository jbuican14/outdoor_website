import React from 'react';

import logoWhite from '../img/logo-white.png';
import heroHeader from '../img/hero.jpg';

const Header = () => {
  return (
    <header
      className="header"
      style={{
        background: `linear-gradient(to right, rgba(175, 236, 164, 0.5), rgba(88, 163, 138, 0.5)), url(${heroHeader})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
    >
      <div className="header__logo-box">
        <img src={logoWhite} alt="Logo White" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <button name="Discover More" className="btn btn--white btn--animated">
          Discover our tours
        </button>
      </div>
    </header>
  );
};

export default Header;
