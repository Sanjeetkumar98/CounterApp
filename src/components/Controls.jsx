import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/Counter";
import { privacyActions } from "../store/Privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const number = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAddNumber = () => {
    dispatch(counterActions.add(number.current.value));
    number.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract(number.current.value));
    number.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };

  return (
    <>
      <div className="space-x-1 pt-2">
        <button
          className="border bg-blue-800 text-white py-0.5 px-2 rounded"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="border bg-red-500 text-white py-0.5 px-2 rounded"
          onClick={handleDecrement}
        >
          -
        </button>
        <button
          className="border bg-emerald-500 text-white py-0.5 px-2 rounded"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="pt-2">
        <input
          ref={number}
          className="bg-slate-200 rounded p-1 mr-1 text-sm"
          type="text"
          placeholder="Please enter number"
        />
        <button
          className="border bg-teal-600 text-white py-0.5 px-2 rounded text-sm"
          onClick={handleAddNumber}
        >
          Add
        </button>
        <button
          className="border bg-amber-700 text-white py-0.5 px-2 rounded text-sm"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
