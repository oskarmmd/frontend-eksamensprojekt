import Header from "../components/reuse/Header";
import Footer from "../components/reuse/Footer";
import { Suspense } from "react";
import Image from "next/image";
import Loading from "@/assets/loader/madbars.gif";
import Headline from "../components/reuse/Headline";
import BookTableSection from "../components/booktable/BookTableSection";

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
