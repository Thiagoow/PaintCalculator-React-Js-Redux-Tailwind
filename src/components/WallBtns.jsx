import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setForm,
  goToNextWall,
  resetAll,
  setAccumulator
} from '../slices/mainSlices';
import calcAreas from '../utils/calcAreas';

function WallBtns({ formData }) {
  let [insertCLicked, setInsertCLicked] = React.useState(0);
  const dispatch = useDispatch();

  function ResetAllStates() {
    setInsertCLicked(0);
    dispatch(resetAll());
  }

  function InsertOnRedux() {
    setInsertCLicked(insertCLicked + 1);
    //☝🏽 To disable button after 4 clicks

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
      dispatch(setAccumulator(areas));
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
        className="font-semibold text-sm py-2 px-5 rounded-xl bg-blueColor text-white shadow-[1px_4px_8px_rgba(29,161,242,0.5)] hover:shadow-[1px_8px_16px_rgba(29,161,242,0.5)] disabled:opacity-30 disabled:pointer-events-none"
        onClick={InsertOnRedux}
        disabled={insertCLicked >= 4 ? true : false}
      >
        Calcular
      </button>
    </div>
  );
}

export default WallBtns;
