"use client";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Loading from "@/assets/loader/madbars.gif";
import FooterBg from "@/assets/bg/footerbg.jpg";

import "../../globals.css";


export default function BlogPage() {
  const { id } = useParams();


  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  // ✅ KORREKT useEffect – ingen syntax-fejl
  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`http://localhost:4000/blogposts/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error("Fejl ved hentning af blog:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchBlog();
    }
  }, [id]);

  

 {/*✅ LOADING STATE */} 
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Image src={Loading} alt="Loading" priority />
      </div>
    );
  }

 

  // ✅ NORMAL RENDER
  return (
    <main className="">
             <Suspense
           fallback={
            <div className="flex h-screen items-center justify-center">
            <Image src={Loading} alt="Loading GIF" priority className=""/>
             </div>
          }
        >
           <Header />

      {/* ✅ HERO */}
      <div className=" relative flex flex-col justify-center items-center  ">
      <div
          className="absolute inset-0 bg-cover bg-center filter brightness-15 min-h-[30%]"
          style={{ backgroundImage: `url(${FooterBg.src})` }}
        ></div>

              <div className="relative z-10">
          <h1 className="sm: m-2 lg: m-10 ">BLOG POST</h1>
          </div>
          
          
        </div>
    

      {/* ✅ BLOG CONTENT */}
      <div className=" max-w-[1200px] mx-auto p-6 space-y-6">
      <div > <img
          src={blog.asset.url}
          alt={blog.title}
          
          className="w-full min-h-[30%] object-cover justify-center items-center"
        />
       </div>
       <div className="relative z-10  text-white py-6">
          <h4 className="text-4xl font-bold mb-2">{blog.title}</h4>
          
          <span className="text-[var(--pink)] ">BY: {blog.author}/ 3 comments / 16 Nov 2018</span><br />
         
        </div>
       <div>
        <span className=" leading-relaxed">{blog.content}</span>
        </div>
      </div>

      <Footer />
      </Suspense>
    </main>
  );
}
