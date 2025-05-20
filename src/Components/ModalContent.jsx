import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { modalFunc } from "../Redux/modalSlice";

const ModalContent = ({ title, content, btnText, btnFunc }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full mx-auto h-screen flex items-center justify-center modalBody">
      <div className="w-1/3 bg-white shadow-xl rounded-md p-4 ">
        <div className="flex items-center justify-between border-b py-3">
          <div className="text-xl">{title}</div>
          <IoMdClose
            onClick={() => dispatch(modalFunc())}
            className="size-7 cursor-pointer rounded-full border p-1"
          />
        </div>
        {content}
      </div>
    </div>
  );
};

export default ModalContent;
