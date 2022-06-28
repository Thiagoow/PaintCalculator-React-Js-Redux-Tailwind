import React from 'react';
import wallsIcon from '../../assets/img/Walls.svg';
import { useSelector } from 'react-redux';
import { selectCurrentWall } from '../slices/mainSlices';

function CurrentWall() {
  const currentWall = useSelector(selectCurrentWall);

  return (
    <div className="flex justify-center">
      <img src={wallsIcon} alt="Walls icons" />

      <p className="font-semibold text-txtColor ml-4 self-center">
        Parede <b className="text-pinkColor">{currentWall}</b> de 4
      </p>
    </div>
  );
}

export default CurrentWall;
