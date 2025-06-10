import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import ModalContent from "../Components/ModalContent";
import Btn from "../Components/Btn";
import { createDataFunc, updateDataFunc } from "../Redux/dataSlice";
import { modalFunc } from "../Redux/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data, keyword } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
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

  let loc = location.search.split("=")[1];
  useEffect(() => {
    if (loc) {
      setProductInfo(data.find((item) => item.id === Number(loc)));
    }
  }, [loc]);

  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
    dispatch(modalFunc());
  };

  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: Number(loc) }));
    dispatch(modalFunc());
    navigate("/");
  };

  const contentModal = (
    <>
      <input
        value={productInfo?.name}
        type={"text"}
        className="h-10 w-full border rounded-md p-2 outline-none mt-3"
        name={"name"}
        id={"name"}
        placeholder={"Ürün Ekle"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <input
        value={productInfo?.price}
        className="h-10 w-full border rounded-md p-2 outline-none mt-3"
        type={"text"}
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

      <Btn
        btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
        onClick={loc ? buttonUpdateFunc : buttonFunc}
      />
    </>
  );


  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
  return (
    <div>
      <div className="flex gap-5 mt-4 mx-5 flex-wrap">
        {filteredData?.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>

      {modal && (
        <ModalContent
          content={contentModal}
          title={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
        />
      )}
    </div>
  );
};

export default Product;
