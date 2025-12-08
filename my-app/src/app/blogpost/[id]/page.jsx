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
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");

  // ✅ KORREKT useEffect – ingen syntax-fejl
  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`http://localhost:4000/blogposts/${id}`);
        const data = await res.json();
        setBlog(data);
        
        let fetchedComments = [];
        if (data.comments){
          fetchedComments = data.comments;
        } else{
          const commentsRes = await fetch(`http://localhost:4000/blogposts/${id}/comments`);
          fetchedComments = await commentsRes.json();
         
        }

        const validComments = fetchedComments.filter(
          (c) => c.name && c.text && c.createdAt
        );
        setComments(validComments);

      } catch (error) {
        console.error("error:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchBlog();
    }
  }, [id]);

  async function handleSubmit(e){
    e.preventDefault();

      // ✅ Simple valideringer
  if (!name || !email || !commentText) {
    alert("Please fill out all fields before submitting your comment.");
    return;
  }

    const newComment = {
      name,
      email,
      text: commentText,
      createdAt: new Date().toISOString(),
    };

    try{
      const res = await fetch(
        `http://localhost:4000/blogposts/${id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );
      const savedComment = await res.json();

      setComments((prev) => [...prev, savedComment]);
      setName("");
    setEmail("");
    setCommentText("");
    } catch (error){
      console.error("Error creating comment:", error);
    }
  }

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
          <p className="text-4xl font-bold mb-2">{blog.title}</p>
          
          <span className="text-[var(--pink)] ">BY: {blog.author}/ 3 comments / 16 Nov 2018</span><br />
         
        </div>
       <div>
        <span className=" leading-relaxed">{blog.content}</span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto p-6  mt-10 space-y-6">
      <h2 className="text-4xl font-bold">
      {comments.length} COMMENTS 
          </h2>


          {/* ✅ VIS KOMMENTARER */}
          <div >
  {comments.map((comment, index) => (
    <div key={index}>
      <h2 className=" font-semibold text-2xl pt-10">
        {comment.name}
        <span className="mx-2">-</span>     
        <small className="text-base text-[var(--pink)] ">
          {new Date(comment.createdAt).toLocaleString()}
        </small>
      </h2>
      <small className=" block text-base mt-4">{comment.text}</small> {/* block element med margin-top */}
    </div>
  ))}
</div>
      
      {/* ✅ KOMMENTAR FORMULAR */}
      <form onSubmit={handleSubmit} className="space-y-4 mt-6">

      <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="w-full p-3 border "
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="w-full p-3 border "
        required
      />
    </div>


            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Your comment..."
              className="w-full p-3 border "
              rows="10"
              required
            ></textarea>

<div className="flex max-w-[1200px] justify-end">
            <button
              type="submit"
              className=" border-t-1 border-b-1 border-solid border-[var(--white)] w-30 px-4 py-2 text-sm "
            >
              SUBMIT
            </button>
            </div>
          </form>
        </div>

      <Footer />
      </Suspense>
    </main>
  );
}
