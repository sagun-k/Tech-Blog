import React from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div className="overflow-x-hidden w-full">
        <div className="text-center " >
            <h1 className=" inline-block mt-12 lg:mt-28 mb-6 lg:mb-10 text-xl text-purple-900 lg:text-3xl font-semibold">Blog Categories</h1>

        </div>
      <div className=" w-3/4 lg:3/4 mx-auto grid grid-cols-2   gap-6 lg:gap-10">
          {/* World */}
          <Link to="blog/category/World">
          <div style={{
            content:"",
          backgroundImage:
            'url("./images/World.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
         
          
        }}
        className=" hover:-translate-y-6 delay-300 transition text-white hover:text-purple-800 h-40 lg:h-72 hover:backdrop-brightness-50 hover:cursor-pointer ">
            <div className=" relative  bottom-0 w-3/4 lg:w-3/4  h-auto  lg:h-14    ">
            <span className=" my-4 font-semibold text-xl lg:text-3xl"> <h1 >World</h1></span>
            </div>
         
        </div></Link>
        {/* Technology */}
        <Link to="blog/category/Technology">
          <div style={{
            content:"",
          backgroundImage:
            'url("./images/Technology.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
         
          
        }}
        className=" hover:-translate-y-6 delay-300 transition text-white hover:text-purple-800 h-40 lg:h-72 hover:backdrop-brightness-50 hover:cursor-pointer ">
            <div className=" relative  bottom-0 w-3/4 lg:w-3/4  h-auto  lg:h-14    ">
            <span className=" my-4 font-semibold text-xl lg:text-3xl"> <h1 >Technology</h1></span>
            </div>
         
        </div></Link>
        {/* Health */}
        <Link to="blog/category/Health">
          <div style={{
            content:"",
          backgroundImage:
            'url("./images/Health.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
         
          
        }}
        className=" hover:-translate-y-6 delay-300 transition text-white hover:text-purple-800 h-40 lg:h-72 hover:backdrop-brightness-50 hover:cursor-pointer ">
            <div className=" relative  bottom-0 w-3/4 lg:w-3/4  h-auto  lg:h-14    ">
            <span className=" my-4 font-semibold text-xl lg:text-3xl"> <h1 >Health</h1></span>
            </div>
         
        </div></Link>
        {/* Travel */}
        <Link to="blog/category/Travel">
          <div style={{
            content:"",
          backgroundImage:
            'url("./images/Travel.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
         
          
        }}
        className=" hover:-translate-y-6 delay-300 transition text-white hover:text-purple-800 h-40 lg:h-72 hover:backdrop-brightness-50 hover:cursor-pointer ">
            <div className=" relative  bottom-0 w-3/4 lg:w-3/4  h-auto  lg:h-14    ">
            <span className=" my-4 font-semibold text-xl lg:text-3xl"> <h1 >Travel</h1></span>
            </div>
         
        </div></Link>
      {/* Environment */}
        <Link to="blog/category/Environment">
          <div style={{
            content:"",
          backgroundImage:
            'url("./images/Environment.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
         
          
        }}
        className=" hover:-translate-y-6 delay-300 transition text-white hover:text-purple-800 h-40 lg:h-72 hover:backdrop-brightness-50 hover:cursor-pointer ">
            <div className=" relative  bottom-0 w-3/4 lg:w-3/4  h-auto  lg:h-14    ">
            <span className=" my-4 font-semibold text-xl lg:text-3xl"> <h1 >Environment</h1></span>
            </div>
         
        </div></Link>
        {/* Business */}
        <Link to="blog/category/Business">
          <div style={{
            content:"",
          backgroundImage:
            'url("./images/Business.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
         
          
        }}
        className=" hover:-translate-y-6 delay-300 transition text-white hover:text-purple-800 h-40 lg:h-72 hover:backdrop-brightness-50 hover:cursor-pointer ">
            <div className=" relative  bottom-0 w-3/4 lg:w-3/4  h-auto  lg:h-14    ">
            <span className=" my-4 font-semibold text-xl lg:text-3xl"> <h1 >Business</h1></span>
            </div>
         
        </div></Link>
        {/* Education */}
        <Link to="blog/category/Education">
          <div style={{
            content:"",
          backgroundImage:
            'url("./images/Education.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
         
          
        }}
        className=" hover:-translate-y-6 delay-300 transition text-white hover:text-purple-800 h-40 lg:h-72 hover:backdrop-brightness-50 hover:cursor-pointer ">
            <div className=" relative  bottom-0 w-3/4 lg:w-3/4  h-auto  lg:h-14    ">
            <span className=" my-4 font-semibold text-xl lg:text-3xl"> <h1 >Education</h1></span>
            </div>
         
        </div></Link>
      {/* Society */}
        <Link to="blog/category/Society">
          <div style={{
            content:"",
          backgroundImage:
            'url("./images/Society.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
         
          
        }}
        className=" hover:-translate-y-6 delay-300 transition text-white hover:text-purple-800 h-40 lg:h-72 hover:backdrop-brightness-50 hover:cursor-pointer ">
            <div className=" relative  bottom-0 w-3/4 lg:w-3/4  h-auto  lg:h-14    ">
            <span className=" my-4 font-semibold text-xl lg:text-3xl"> <h1 >Society</h1></span>
            </div>
         
        </div></Link>
        {/* History */}
        <Link to="blog/category/History">
          <div style={{
            content:"",
          backgroundImage:
            'url("./images/History.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
         
          
        }}
        className=" hover:-translate-y-6 delay-300 transition text-white hover:text-purple-800 h-40 lg:h-72 hover:backdrop-brightness-50 hover:cursor-pointer ">
            <div className=" relative  bottom-0 w-3/4 lg:w-3/4  h-auto  lg:h-14    ">
            <span className=" my-4 font-semibold text-xl lg:text-3xl"> <h1 >History</h1></span>
            </div>
         
        </div></Link>
        {/* Sports */}
        <Link to="blog/category/Sports">
          <div style={{
            content:"",
          backgroundImage:
            'url("./images/Sports.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
         
          
        }}
        className=" hover:-translate-y-6 delay-300 transition text-white hover:text-purple-800 h-40 lg:h-72 hover:backdrop-brightness-50 hover:cursor-pointer ">
            <div className=" relative  bottom-0 w-3/4 lg:w-3/4  h-auto  lg:h-14    ">
            <span className=" my-4 font-semibold text-xl lg:text-3xl"> <h1 >Sports</h1></span>
            </div>
         
        </div></Link>
        {/* Politics */}
        <Link to="blog/category/Politics">
          <div style={{
            content:"",
          backgroundImage:
            'url("./images/Politics.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
         
          
        }}
        className=" hover:-translate-y-6 delay-300 transition text-white hover:text-purple-800 h-40 lg:h-72 hover:backdrop-brightness-50 hover:cursor-pointer ">
            <div className=" relative  bottom-0 w-3/4 lg:w-3/4  h-auto  lg:h-14    ">
            <span className=" my-4 font-semibold text-xl lg:text-3xl"> <h1 >Politics</h1></span>
            </div>
         
        </div></Link>
        {/* Economics */}
        <Link to="blog/category/Economics">
          <div style={{
            content:"",
          backgroundImage:
            'url("./images/Economics.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
         
          
        }}
        className=" hover:-translate-y-6 delay-300 transition text-white hover:text-purple-800 h-40 lg:h-72 hover:backdrop-brightness-50 hover:cursor-pointer ">
            <div className=" relative  bottom-0 w-3/4 lg:w-3/4  h-auto  lg:h-14    ">
            <span className=" my-4 font-semibold text-xl lg:text-3xl"> <h1 >Economics</h1></span>
            </div>
         
        </div></Link>
      {/* Style */}
      <Link to="blog/category/Style">
          <div style={{
            content:"",
          backgroundImage:
            'url("./images/Style.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
         
          
        }}
        className=" hover:-translate-y-6 delay-300 transition text-white hover:text-purple-800 h-40 lg:h-72 hover:backdrop-brightness-50 hover:cursor-pointer ">
            <div className=" relative  bottom-0 w-3/4 lg:w-3/4  h-auto  lg:h-14    ">
            <span className=" my-4 font-semibold text-xl lg:text-3xl"> <h1 >Style</h1></span>
            </div>
         
        </div></Link>

      </div> 
    </div>
  );
};

export default CategoryList;
