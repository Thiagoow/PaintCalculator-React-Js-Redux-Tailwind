import React from 'react';
import logoImg from '../../assets/img/logo.svg';

function Logo() {
  return (
    <div className="flex items-center">
      <img src={logoImg} className="mr-5" alt="Logo" />

      <h1 className="font-semibold">
        HowMuch
        <br />
        PaintINeed?
      </h1>
    </div>
  );
}

export default Logo;
