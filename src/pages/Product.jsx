import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import ModalContent from "../Components/ModalContent";
import Btn from "../Components/Btn";
import { createDataFunc } from "../Redux/dataSlice";
import { modalFunc } from "../Redux/modalSlice";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "url",
    id: "id",
  });

  const onChangeFunc = (e, type) => {
    if (type === "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const buttonFunc = () => {
    dispatch(createDataFunc({...productInfo, id: data.length + 1}));
    dispatch(modalFunc());
  };
console.log(data);

  const contentModal = (
    <>
      <input
        className="h-10 w-full border rounded-md p-2 outline-none mt-3"
        name={"name"}
        id={"name"}
        placeholder={"Ürün Ekle"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <input
        className="h-10 w-full border rounded-md p-2 outline-none mt-3"
        type="text"
        name={"price"}
        id={"price"}
        placeholder={"Fiyat Ekle"}
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <input
        className="h-10 w-full p-2 outline-none mt-3 border-b py-0.5"
        type="file"
        name={"url"}
        id={"url"}
        placeholder={"Dosya Seçiniz..."}
        onChange={(e) => onChangeFunc(e, "url")}
      />

      <Btn btnText={"Oluştur"} onClick={buttonFunc} />
    </>
  );


  return (
    <div>
      <div className="flex gap-5 mt-4 mx-5 flex-wrap">
        {data?.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>

      {modal && <ModalContent content={contentModal} title={"Ürün Oluştur"} />}
    </div>
  );
};

export default Product;
