
"use client";
import { useEffect, useState } from "react";

import RecentblogCard from "./RecentblogCard";

const RecentblogComponent = () => {
    const [blogs, setBlog] = useState([]);

    useEffect(() => {
      fetch("http://localhost:4000/blogposts")
        .then((res) => res.json())
        .then((data) => setBlog(data));
    }, []);
  
    if (!blogs.length) return <p>Loading...</p>;
  
    return (
      <div className="flex flex-col justify-center items-center ">
        
        <h1 className="my-12 text-center">
          RECENT BLOG
          
        </h1>
        <div className="flex flex-wrap max-w-[1200px] md: justify-center items-center flex-row">
        {blogs.map((item) => (
    < RecentblogCard key={item.id} blog={item} />
  ))}
      </div>
      </div>
    );
  };

export default RecentblogComponent;