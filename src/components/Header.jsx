import React from 'react';
import Logo from './Logo';
import menuImg from '../../assets/img/Menu.svg';
import NavLink from './NavLink';

function Header() {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  function toggleNav() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <header className="flex relative z-50 justify-between mx-5 mt-8 xs:mx-14 md:!mx-auto md:max-w-2xl lg:max-w-3xl self-center">
      <Logo />

      <nav className="justify-between self-center md:mt-4">
        <img
          className="md:hidden float-right cursor-pointer hover:opacity-70"
          src={menuImg}
          alt="MobileMenu"
          onClick={toggleNav}
        />

        <div className={'md:flex ' + (mobileMenu ? 'flex' : ' hidden')}>
          <ul className="flex flex-col absolute md:!relative right-0 2xs:right-5 top-16 py-5 rounded-lg bg-txtColor text-white text-center md:flex-row md:top-0 md:!right-0 md:space-x-8 lg:space-x-10 md:py-0 md:text-black md:bg-transparent md:font-semibold">
            <NavLink text="Home" link="/" active />

            <NavLink text="Produtos" link="https://www.behance.net/thiagoow" />

            <NavLink
              text="Sobre"
              link="https://github.com/Thiagoow/PaintCalculator-React-Js-Redux-Tailwind"
            />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
