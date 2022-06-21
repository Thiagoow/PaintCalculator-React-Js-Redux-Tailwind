import React from 'react';

function Logo() {
  return (
    <div className="flex items-center">
      <img src="../../assets/img/logo.svg" className="mr-5" alt="Logo" />

      <h1 className="font-semibold">
        HowMuch
        <br />
        PaintINeed?
      </h1>
    </div>
  );
}

export default Logo;
