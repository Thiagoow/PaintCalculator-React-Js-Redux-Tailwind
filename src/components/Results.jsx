import React from 'react';
import bucketIcon from '../../assets/img/Bucket.svg';
import { useSelector } from 'react-redux';
import { selectAccumulator } from '../slices/mainSlices';
import calcPaintNeed from '../utils/paintNeeded';

function Results() {
  const { paintArea } = useSelector(selectAccumulator);
  const { liters, canQty } = calcPaintNeed(paintArea);
  console.log(liters, canQty);

  return (
    <section className="flex flex-col items-center my-16">
      <div className="flex flex-row">
        <img src={bucketIcon} alt="Bucket icon" />

        <p className="font-bold text-txtColor ml-4 self-center">
          Você vai precisar pintar:
        </p>
      </div>

      <div className="flex flex-col mt-5 items-center">
        <p className="font-semibold text-txtColor">
          Uma área de <b className="font-bold text-pinkColor">{paintArea}m²</b>.
          Ou seja:
        </p>

        <p className="mt-4 font-bold text-txtColor flex-wrap text-center">
          Você precisa de {canQty[0]} lata{canQty[0] > 1 ? 's' : ''} de
          <b className="text-blueColor"> {liters[0]} litros</b>
        </p>
      </div>
    </section>
  );
}

export default Results;
