import React from 'react';
import wallsIcon from '../../assets/img/WallsIcon.svg';

const CurrentWall = () => {
  return (
    <div className="flex justify-center">
      <img src={wallsIcon} alt="Walls icons" />

      <p className="font-semibold text-txtColor ml-4 self-center">
        Parede
        <b className="text-pinkColor"> 1</b> de 4
      </p>
    </div>
  );
};

export default CurrentWall;
