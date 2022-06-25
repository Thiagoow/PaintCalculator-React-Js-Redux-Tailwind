import React from 'react';
import { Icon } from '@iconify/react';

function Input({ txtContent, iconName, rotateIcon }) {
  return (
    <>
      <p
        className={
          'font-medium text-base items-center flex gap-6 md:gap-10 ' +
          (rotateIcon ? '!gap-5 md:!gap-9' : '')
        }
      >
        <Icon
          icon={iconName}
          className={'text-3xl ml-2 ' + (rotateIcon ? 'rotate-90' : '')}
        />
        {txtContent}
        <input
          type="number"
          min="1"
          max="50"
          className="py-[0.2rem] rounded-md"
        />
      </p>
    </>
  );
}

export default Input;
