import React from "react";
import { MdOutlineAddChart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../Redux/modalSlice";


const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl uppercase">React App</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select className="h-10 rounded-lg " name="" id="">
            <option value="asc">Increase</option>
            <option value="desc">Decrease</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="h-10 rounded-lg px-4"
          />
        </div>
        <div onClick={()=>{
          dispatch(modalFunc())
        }} className="grid rounded-full w-12 h-12 place-items-center bg-slate-800 cursor-pointer hover:scale-90 transition duration-300">
          <MdOutlineAddChart size={32} />
        </div>
      </div>
    </div>
  );
};

export default Header;
