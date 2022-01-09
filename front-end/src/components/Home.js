import React from "react";
import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";

const Home = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <div
        style={{
          backgroundImage:
            'url("./images/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
        }}
        className=" mt-18 "
      >
        <div className=" w-full mt-52 mb-52 inline-block">
          <div className="w-3/4 lg:w-2/4 mx-auto">
            <h1 className="text-2xl lg:text-5xl text-white font-bold">
              "Read the blogs for Knowledge"
            </h1>
            <Link to="/blog">
              <div className="w-2/4 mx-auto inline-block mt-8 h-auto lg:h-8">
                <button className=" hover:bg-purple-800 shadow-2xl rounded-sm w-full lg:w-7/12 h-full bg-purple-600 lg:text-xl text-lg font-semibold text-white ">
                  Check Out Blogs
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900">
        <CategoryList />
      </div>
    </div>
  );
};

export default Home;
