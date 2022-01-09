import React from "react";
import { Link } from "react-router-dom";

const Blog = (props) => {
  let data = props.data;
  return (
    <div key={data.id} className="inline-block h-auto shadow-2xl text-white transition delay-100  hover:-translate-y-4 ">
       <div>
        <h1 className="font-semibold text-md lg:text-lg">{data.title}</h1>
      </div>
      <div >
     
        <img className="" src={data.thumbnail} alt="thumbnail" />
      </div>
     
      <div>
        <h1>
          {data.month},{data.day}
        </h1>
        <div>
            <h1 className="text-sm lg:text-md text-purple-600">{data.category}</h1>
        </div>
      </div>
      <div>
        <p className="text-xs lg:text-sm">{data.excerpt.slice(0,100)}.....</p>
      </div>
      <div>
        <Link to={`/blog/${data.slug}`}>
          <div className="  w-3/4 lg:w-2/4 mx-auto inline-block mt-8 h-auto lg:h-8">
            <button className=" hover:bg-purple-800 shadow-xl rounded-sm w-full lg:w-9/12 h-full bg-purple-600 lg:text-lg text-sm font-semibold text-white ">
              Read Blog
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
