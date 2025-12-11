import Header from "../components/Header";
import Footer from "../components/Footer";
import { Suspense } from "react";
import Image from "next/image";
import Loading from "@/assets/loader/madbars.gif";
import Headline from "../components/Headline";
import BookTableSection from "../components/BookTable/BookTableSection";

import "../globals.css";

export default function Contact() {
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
        <Headline title="BOOK A TABLE" />
        <BookTableSection />
        <Footer />
      </Suspense>
    </main>
  );
}
