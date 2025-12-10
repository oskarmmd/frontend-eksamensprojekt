"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Suspense } from "react";
import Image from "next/image";
import Loading from "@/assets/loader/madbars.gif";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
const postsPerPage = 3;


  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch("http://localhost:4000/blogposts");
      const data = await res.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogs.length / postsPerPage);
  const pageNumbers = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <main>
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <Image src={Loading} alt="Loading GIF" priority />
          </div>
        }
      >
        <Header />
        <div className="relative flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold my-8">BLOG POST</h1>
          <div className="w-full md:px-8">
            {currentPosts.map((blog, index) => (
              <div
                key={blog.id}
                className={`flex flex-col md:flex-row items-center justify-center  ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Billede */}
                <div className="md:w-1/2 w-full">
                  <img
                    src={blog.asset.url}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tekst */}
                <div className="md:w-1/2 w-fit flex flex-col justify-center">
                <div className="h-fit md:w-xl px-4 py-4 mr-10 sm:w-auto">
                  <h4 className="font-bold text-lg uppercase">{blog.title}</h4>
                  <span className="text-[var(--pink)]">
                    {blog.author} / 3 comments / 16 Nov 2018 <br></br>
                  </span>
                  <span className="mt-2">
                    {blog.content.split(" ").slice(0, 74).join(" ")}...
                  </span>
                  <div className="flex justify-center md:justify-end  mb-4">
                    <Link href={`/blogpost/${blog.id}`}>
                      <button className="border-t border-b border-[var(--white)] w-30 px-4 py-2 text-sm ">
                        READ MORE
                      </button>
                    </Link>
                  </div>
                  </div>
                </div>
              </div>
            ))}

<div className="flex justify-center gap-2 mt-6">
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`px-3 py-1 ${
                    number === currentPage
                      ? " text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {number}
                </button>
              ))}
              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-3 py-1 border rounded"
                >
                  Næste &gt;
                </button>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </Suspense>
    </main>
  );
}