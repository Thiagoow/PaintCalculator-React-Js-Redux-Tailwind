import React from 'react';

function NavLink({ text, link, active }) {
  return (
    <li
      className={
        active &&
        'text-pinkColor ' +
          'cursor-pointer py-5 px-8 md:py-0 md:px-0 hover:opacity-70'
      }
    >
      <a href={link} target="_blank">
        {text}
      </a>
    </li>
  );
}

export default NavLink;
