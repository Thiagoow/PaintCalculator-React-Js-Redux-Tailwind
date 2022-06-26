import React from 'react';
import Logo from './Logo';
import menuImg from '../../assets/img/Menu.svg';

function Header() {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  function toggleNav() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <header className="flex justify-between mx-5 mt-8 md:mx-20 lg:mx-auto lg:max-w-3xl self-center">
      <Logo />

      <nav className="h-3 justify-between align-middle">
        <img
          className="md:hidden mt-6 ml-20 cursor-pointer hover:opacity-70"
          src={menuImg}
          alt="MobileMenu"
          onClick={toggleNav}
        />

        <div
          className={'md:flex' + (mobileMenu ? 'flex' : ' hidden')}
          id="nav-menu"
        >
          <ul className="flex flex-col rounded-lg mt-5 py-5 bg-txtColor text-white text-center md:flex-row md:space-x-8 lg:space-x-8 md:py-0 md:text-black md:bg-transparent md:font-semibold">
            <li className="text-pinkColor cursor-pointer block py-4 md:py-0 hover:opacity-70">
              <a href="/">Home</a>
            </li>
            <li className="cursor-pointer block py-4 md:py-0 hover:opacity-70">
              <a href="https://www.behance.net/thiagoow" target="_blank">
                Produtos
              </a>
            </li>
            <li className="cursor-pointer block py-4 md:py-0 hover:opacity-70">
              <a
                href="https://github.com/Thiagoow/PaintCalculator-React-Js-Tailwind"
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
