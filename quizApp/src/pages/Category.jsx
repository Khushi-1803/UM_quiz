import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { qassets } from "../assets/qassets";

const Category = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex items-center justify-center h-[100vh] bg-black">
      <div className="w-[500px] h-[500px] bg-gradient-to-bl from-purple-500 via-pink-500 to-[#f70776] rounded-xl">
        <div className="flex items-center justify-center mt-8">
          <h1 className="font-bold text-2xl font-serif mb-4">
            Select Category
          </h1>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center gap-4 mt-6 ">
          <div className="flex flex-row gap-20 font-semibold text-xl">
            <button
              onClick={() => handleCategoryClick("programming")}
              className="border-2 border-black h-14 w-40 p-1 m-2 rounded-lg bg-black text-white hover:bg-pink-300 hover:text-black transition-all flex items-center justify-center font-light"
            >
              <img className="w-8" src={qassets.programming} alt="" />
              Programming
            </button>
            <button
              onClick={() => handleCategoryClick("mathematics")}
              className="border-2 border-black h-14 w-40 p-1 m-2 rounded-lg bg-black text-white hover:bg-pink-300 hover:text-black transition-all flex items-center justify-center font-light"
            >
              <img className="w-8" src={qassets.maths} alt="" />
              Mathematics
            </button>
          </div>
          <div className="flex flex-row gap-20 font-semibold text-xl mt-10 mb-10">
            <button
              onClick={() => handleCategoryClick("science")}
              className="border-2 border-black h-14 w-40 p-1 m-2 rounded-lg bg-black text-white hover:bg-pink-300 hover:text-black transition-all flex items-center justify-center font-light"
            >
              <img className="w-8" src={qassets.science} alt="" />
              Science
            </button>
            <button
              onClick={() => handleCategoryClick("entertainment")}
              className="border-2 border-black h-14 w-40 p-1 m-2 rounded-lg bg-black text-white hover:bg-pink-300 hover:text-black transition-all flex items-center justify-center font-light"
            >
              {" "}
              <img className="w-8" src={qassets.entertainment} alt="" />
              Entertainment
            </button>
          </div>
        </div>
        <hr />

        <div className="flex items-center justify-center">
          <button
            onClick={() =>
              navigate("/quiz", { state: { category: selectedCategory } })
            }
            className="border-2 border-black w-36 h-12 mt-16 font-semibold text-xl rounded-lg bg-black text-white hover:bg-pink-300 hover:text-black transition-all"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
