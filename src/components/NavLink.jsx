import React from 'react';

function NavLink({ text, link, active }) {
  return (
    <a
      href={link}
      target={!active && '_blank'}
      className={active && 'text-pinkColor'}
    >
      <li
        className={'cursor-pointer py-5 px-8 md:py-0 md:px-0 hover:opacity-70'}
      >
        {text}
      </li>
    </a>
  );
}

export default NavLink;
