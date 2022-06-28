import React from 'react';
import { useDispatch } from 'react-redux';
import { setForm, goToNextWall, resetAll } from '../slices/mainSlices';
import calcAreas from '../utils/calcAreas';

function WallBtns({ formData }) {
  const dispatch = useDispatch();

  function ResetAllStates() {
    dispatch(resetAll());
  }

  function InsertOnRedux() {
    const areas = calcAreas(
      formData.height,
      formData.width,
      formData.doors,
      formData.windows
    );
    //If areas is string, put in a alert:
    if (typeof areas != 'object') {
      alert(areas);
    } else {
      dispatch(setForm(formData));
      dispatch(goToNextWall());
    }
  }

  return (
    <div className="flex justify-center mt-8 gap-10 md:gap-12">
      <button
        className="font-semibold text-sm py-2 px-5 rounded-xl bg-containerColor text-blueColor shadow-[1px_4px_8px_rgba(0,0,0,0.2)] hover:shadow-[1px_8px_16px_rgba(0,0,0,0.2)]"
        onClick={ResetAllStates}
      >
        Resetar
      </button>

      <button
        className="font-semibold text-sm py-2 px-5 rounded-xl bg-blueColor text-white shadow-[1px_4px_8px_rgba(29,161,242,0.5)] hover:shadow-[1px_8px_16px_rgba(29,161,242,0.5)]"
        onClick={InsertOnRedux}
      >
        Próxima
      </button>
    </div>
  );
}

export default WallBtns;
