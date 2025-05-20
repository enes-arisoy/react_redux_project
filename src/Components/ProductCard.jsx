import { React, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../Redux/dataSlice";
import { modalFunc } from "../Redux/modalSlice";

const ProductCard = ({ item }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();

  const updateFunc = () => {
    dispatch(modalFunc());
    dispatch(updateDataFunc(item));
  };

  return (
    <div className="flex flex-col gap-1 border p-3 shadow-md rounded-xl bg-indigo-600 text-white relative">
      <div className="overflow-hidden object-cover rounded-lg">
        <img src={item.url} alt="" className="w-full  bg-black" />
      </div>
      <BsThreeDots
        onClick={() => setOpenEdit(!openEdit)}
        size={24}
        color="white"
        className="absolute top-2 right-4 cursor-pointer hover:scale-110 text-gray-400"
      />
      <div className="bg-black p-2 w-full rounded-lg">
        <h1>
          Name: <span className="text-gray-400">{item.name}</span>
        </h1>
        <p>
          Price: <span className="text-gray-400">{item.price}</span>
        </p>
      </div>
      {openEdit && (
        <div className="flex flex-col gap-1 text-gray-300 absolute top-7 right-5 rounded-md text-sm ">
          <div
            onClick={() => dispatch(deleteDataFunc(item.id))}
            className="border-b border border-white rounded-lg cursor-pointer text-center px-1 bg-black bg-transparent hover:text-white"
          >
            Delete
          </div>
          <div
            onClick={updateFunc}
            className="border-b border border-white rounded-lg cursor-pointer text-center px-1 bg-black bg-transparent hover:text-white"
          >
            Update
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
