import React from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const CounterControls = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-center gap-2">
      <button
        onClick={() => dispatch(counterActions.increment())}
        className="btn btn-success"
      >
        +1
      </button>
      <button
        onClick={() => dispatch(counterActions.decrement())}
        className="btn btn-danger"
      >
        -1
      </button>

      <button
        onClick={() => dispatch(privacyActions.privacyToggle())}
        className="btn btn-warning"
      >
        Privacy
      </button>
    </div>
  );
};

export default CounterControls;
