import React from "react";

const Btn = ({ onClick, btnText }) => {
  return (
    <div className="flex mx-auto justify-center bg-blue-500 mt-3 cursor-pointer rounded-md text-lg">
      <button onClick={onClick}>{btnText}</button>
    </div>
  );
};

export default Btn;
