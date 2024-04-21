import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((state) => state.counter);

  return (
    <>
      <p className="fs-4 text-primary">
        The counter value is :{" "}
        <span className="bg-dark text-white rounded py-1 px-3">
          {counterVal}
        </span>
      </p>
    </>
  );
};

export default DisplayCounter;
