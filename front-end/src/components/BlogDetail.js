import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = (props) => {
  const [data, setData] = useState({});
  

  const createBlog = () => {
    return { __html: data.content };
  };
  console.log(data);
  let { id } = useParams();
 
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/blog/${id}`);
      console.log("bloglist", response.data);
      setData(response.data);
    };
    fetchData();
  }, [id]);
  return (
      <div className="w-full  ">
    <div key={data.id} className="w-3/4 mx-auto  ">
      <div>
        <div className="text-center">
          <h1 className="inline-block text-4xl font-semibold mt-8">
            {data.title}
          </h1>
        </div>
       
        <div className="w-3/4 mx-auto mt-4" >
             <img src={data.thumbnail} alt="" />
        </div>
        <div className="w-3/4 ">
            <h1 className="text-xl">{data.day},{data.month}</h1>
        </div>
        <div className="text-white">
        <div dangerouslySetInnerHTML={createBlog()} style={{textColor:"White"}}></div>
        </div>
      </div>
    </div>
    <div className="text-center " >
        <Link to="/blog" >
        <h1 className=" inline-block mb-4 underline text-xl text-green-600 hover:text-green-700">Check Other Blogs</h1>
        </Link>
    </div>
    </div>
  );
};

export default BlogDetail;
