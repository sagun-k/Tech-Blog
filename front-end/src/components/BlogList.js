import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Blog from "./Blog"

const BlogList = () => {
    const[data,setData]=useState([])
    const fetchData= async ()=>{ 
        const response= await axios.get("http://127.0.0.1:8000/api/blog/");
        console.log("bloglist",response.data)
        setData(response.data)
     
    }
    console.log(data)
    useEffect(()=>{
      fetchData();
    },[])
    return (
        <div className="w-full bg-black inline-block" >
        <div className="w-3/4 mx-auto mt-24   ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 ">
            {data.map((data)=>{
                return(
                
                    <div className="flex">
                     <div className="inline-block z-0 ">
                     <Blog data={data} />
                     </div>                

                    </div>
                    
                
                )
            })}
            
        </div>
        </div>
        </div>
    )
}

export default BlogList
