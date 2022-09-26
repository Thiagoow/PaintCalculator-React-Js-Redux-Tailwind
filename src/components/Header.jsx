import React from 'react';
import Logo from './Logo';
import menuImg from '../../assets/img/Menu.svg';

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
            <li className="text-pinkColor cursor-pointer py-5 px-8 md:py-0 md:px-0 hover:opacity-70">
              <a href="/">Home</a>
            </li>
            <li className="cursor-pointer py-5 px-8 md:py-0 md:px-0 hover:opacity-70">
              <a href="https://www.behance.net/thiagoow" target="_blank">
                Produtos
              </a>
            </li>
            <li className="cursor-pointer py-5 px-8 md:py-0 md:px-0 hover:opacity-70">
              <a
                href="https://github.com/Thiagoow/PaintCalculator-React-Js-Redux-Tailwind"
                target="_blank"
              >
                Sobre
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
