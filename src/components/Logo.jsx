import React from 'react';
import logoImg from '../../assets/img/logo.svg';

function Logo() {
  return (
    <a className="flex items-center " href="/">
      <img src={logoImg} className="mr-5" alt="Logo" />

      <h1 className="font-semibold">
        HowMuch
        <br />
        PaintINeed?
      </h1>
    </a>
  );
}

export default Logo;
