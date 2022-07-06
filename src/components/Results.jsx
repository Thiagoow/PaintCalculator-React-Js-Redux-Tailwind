import React from 'react';
import bucketIcon from '../../assets/img/Bucket.svg';
import { useSelector } from 'react-redux';
import { selectAccumulator } from '../slices/mainSlices';
import calcPaintNeed from '../utils/calcPaint';

function Results() {
  const { paintArea } = useSelector(selectAccumulator);
  const { liters, canQty } = calcPaintNeed(paintArea);

  return (
    <section className="flex flex-col items-center my-12">
      <div className="flex flex-row">
        <img src={bucketIcon} alt="Bucket icon" />

        <p className="font-semibold text-txtColor ml-3 self-center">
          Você vai precisar pintar:
        </p>
      </div>

      <div className="flex flex-col mt-5 items-center">
        <p className="font-medium text-txtColor mb-2">
          Uma área de <b className="font-bold text-pinkColor">{paintArea}m²</b>.
        </p>

        {canQty.map((num, i) => (
          <p
            className="mt-2 font-semibold text-txtColor flex-wrap text-center "
            key={i}
          >
            {i + 1 > 1 ? '& ' : 'Para isso, use '}
            {num} lata{num > 1 ? 's' : ''} de
            <b className="text-blueColor"> {liters[i]} litros</b>
          </p>
        ))}
      </div>
    </section>
  );
}

export default Results;
