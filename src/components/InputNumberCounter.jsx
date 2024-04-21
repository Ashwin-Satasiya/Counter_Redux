import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const InputNumberCounter = () => {
  const dispatch = useDispatch();

  const numberElement = useRef();

  const onAddBtnClick = () => {
    dispatch(counterActions.addition({ number: numberElement.current.value }));
    numberElement.current.value = "";
  };

  const onSubBtnClick = () => {
    dispatch(
      counterActions.substraction({ number: numberElement.current.value })
    );
    numberElement.current.value = "";
  };

  return (
    <div className="input-counter mt-4 p-2 d-flex justify-content-center gap-3 ">
      <div className="input-number">
        <input
          className="form-control"
          type="text"
          ref={numberElement}
          placeholder="Enter number"
        />
      </div>
      <div className="input-button">
        <button onClick={onAddBtnClick} className="btn btn-info me-2">
          Add
        </button>
        <button onClick={onSubBtnClick} className="btn btn-danger">
          Sub
        </button>
      </div>
    </div>
  );
};

export default InputNumberCounter;
