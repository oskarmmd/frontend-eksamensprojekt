import Header from "../components/reuse/Header";
import Footer from "../components/reuse/Footer";
import { Suspense } from "react";
import Image from "next/image";
import Loading from "@/assets/loader/madbars.gif"
import Headline from "../components/reuse/Headline";
import ContactForm from "../components/contact/ContactForm";


import "../globals.css";

export default function Contact() {
  return (
    <main className="">
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <Image src={Loading} alt="Loading GIF" priority className="" />
          </div>
        }
      >
        <Header/>
        <Headline title="CONTACT US" />
        <ContactForm />
        <Footer />
      </Suspense>
    </main>
  );
}
