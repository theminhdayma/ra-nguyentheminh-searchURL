"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Product() {
  const [inputValues, setInputValues] = useState({
    name: "",
    category: "",
  });
  const routes = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    routes.push(
      `/product?name=${encodeURIComponent(
        inputValues.name
      )}&category=${encodeURIComponent(inputValues.category)}`
    );
    setInputValues({
      name: "",
      category: "",
    });
  };

  // Bài 4: Lấy giá trị từ trên URL
  const searchParam = useSearchParams();
  const name = searchParam.get("name");
  const category = searchParam.get("category");

  return (
    <>
      <div>Search Value: {name}</div>
      <div>Search Value: {category}</div>
      <div className="w-[300px] ">
        <div className="flex flex-col gap-3">
          <input
            name="name"
            value={inputValues.name}
            onChange={handleChange}
            className="border border-black rounded-lg p-2"
            type="text"
            placeholder="name"
          />
          <input
            name="category"
            value={inputValues.category}
            onChange={handleChange}
            className="border border-black rounded-lg p-2"
            type="text"
            placeholder="category"
          />
          <button
            onClick={handleClick}
            className="bg-black text-white p-2 rounded-lg"
          >
            Tìm kiếm
          </button>
        </div>
      </div>
    </>
  );
}
