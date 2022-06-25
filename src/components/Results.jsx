import React from 'react';
import bucketIcon from '../../assets/img/Bucket.svg';

function Results() {
  return (
    <section className="flex flex-col items-center my-16">
      <div className="flex flex-row">
        <img src={bucketIcon} alt="Bucket icon" />

        <p className="font-bold text-txtColor ml-4 self-center">
          Você vai precisar de:
        </p>
      </div>

      <div className="flex flex-col mt-8 items-center">
        <p className="font-semibold text-txtColor">
          <b className="font-bold text-pinkColor">20.5 litros</b> de tinta. Ou
          seja:
        </p>

        <p className="mt-4 font-bold text-txtColor flex-wrap text-center">
          1 lata de <b className="text-blueColor">18 litros</b> & 1 lata de{' '}
          <b className="text-blueColor">02.5 litros</b>
        </p>
      </div>
    </section>
  );
}

export default Results;
