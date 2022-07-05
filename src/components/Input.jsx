import React from 'react';
import { Icon } from '@iconify/react';
import { FormContext } from './InputsList';

function Input({ txtContent, iconName, rotateIcon, name, onlyInt }) {
  const formContext = React.useContext(FormContext);
  const { form, handleData } = formContext;

  return (
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
        min="0"
        max="50"
        className="py-[0.2rem] rounded-md max-w-[77px]"
        step={onlyInt ? 1 : 0.5}
        name={name}
        value={form[name]}
        onChange={handleData}
      />
    </p>
  );
}

export default Input;
