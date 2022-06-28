import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectForm, setForm, resetAll } from '../slices/mainSlices';

function WallBtns({ formData }) {
  const form = useSelector(selectForm);
  const dispatch = useDispatch();

  function InsertOnRedux() {
    dispatch(setForm(formData));
  }

  function ResetAllStates() {
    dispatch(resetAll());
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
