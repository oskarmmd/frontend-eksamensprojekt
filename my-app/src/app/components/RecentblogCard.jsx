"use client";
import React from "react";
import Link from "next/link";

const RecentblogCard = ({ blog }) => {
    return (
        <Link rel="/my-app/src/app/blogpost/page.js" href="blogpost" >
      <div className=" p-4 my-2 h-full  max-w-[400px]">
        <img
        src={blog.asset.url}
        alt={blog.title}
        className="w-auto h-full object-cover  transition-opacity duration-300 "
      />
        <h4 className="font-bold text-lg uppercase">{blog.title}</h4>
        <span className="text-[var(--pink)]">{blog.author}/ 3 comments / 16 Nov 2018</span><br />
        <span>{blog.content.split(" ").slice(0, 26).join(" ")}</span>
      </div>
      </Link>
      
    );
  };
  
  export default RecentblogCard;
  