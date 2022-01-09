import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Blog from "./Blog";
const BlogCategory = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  let { id } = useParams();
  useEffect(() => {
    setCategory(id);
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const fetchData = async () => {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/blog/category`,
        { category },
        config
      );
      console.log(response);
      setData(response.data);
      console.log(response.data.thumbnail);
    };

    fetchData();
  }, [category]);

  return (
    <div className="w-full bg-black inline-block">
      
      <div className="w-3/4 mx-auto mt-24   ">
      <div className="w-2/4 mx-auto mt-32 mb-10">
        <h1 className="text-purple-600  text-lg lg:text-3xl font-semibold">Blogs of {category}</h1>
      </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 ">
          {data.length <= 0 ? (
            <>
              <div>
                <h1 className="text-white">
                  No data available
                  <div > 
                  <Link to="/">
                    <div className="w-full lg:w-2/4 mx-auto  mt-8 h-auto">
                      <button className=" hover:bg-purple-800 shadow-2xl rounded-sm w-full  h-full bg-purple-600 lg:text-lg text-xs font-semibold text-white ">
                        Back to home
                      </button>
                    </div>
                  </Link>
                  <Link to="/blog">
                    <div className="w-full lg:w-2/4 mx-auto  mt-2 h-auto mb-20">
                      <button className=" hover:bg-purple-800 shadow-2xl rounded-sm w-full  h-full bg-purple-600 lg:text-lg text-xs font-semibold text-white ">
                        Check All Blogs
                      </button>
                    </div>
                  </Link>
                  </div>
                </h1>
              </div>
            </>
          ) : (
            <>
              {data.map((data) => {
                return (
                  <div className="flex">
                    <div className="inline-block z-0  ">
                      <Blog data={data} key={data.id} />
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;
