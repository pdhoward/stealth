

import {Hero} from "@/components/Hero";
import {HomeMain} from "@/components/HomeMain";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

//import "./App.css";

//import hero from "./hero-ai.png";

export default function Home(){
  return (
    <>
      <Head>
        <title>Strategic Machines</title>
        <meta
          name="description"
          content={`AI-powered SEARCH"`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <div className="flex flex-col h-screen bg-black">
        <Navbar />
        <Hero hero={hero} />
        
        <HomeMain />
    
        <Footer />
      </div>
    </>
  );
}
