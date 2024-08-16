import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroBG from "@/assets/hero-bg.jpg";
import Features from "@/components/layout/Features";
import AboutUs from "@/components/layout/AboutUs";
import Testimonial from "@/components/layout/Testimonial";
import FaqPage from "@/components/layout/FaqPage";

const Home = () => {
  return (
    <>
      <section className="relative">
        <Image
          src={heroBG}
          alt="carefinder hero image"
          className="w-full md:h-[calc(100vh-73px)]"
        />
        <div className="absolute top-0 h-full w-full bg-black opacity-50"></div>
        <div className="absolute top-0 h-full w-full flex justify-center items-center text-white ">
          <div className="flex flex-col gap-2 md:gap-4 max-w-[560px] text-center">
            <h1 className="text-3xl md:text-6xl font-black">
              Your gateway to accessible healthcare
            </h1>
            <p>
              Locate hospitals and healthcare services within your region
              quickly and easily.
            </p>

            <Button asChild className="bg-myColors-main w-fit mx-auto">
              <Link href="/search-hospital">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <Features />
      {/* ABOUT SECTION */}
      <AboutUs />
      {/* TESTIMONIALS */}
      <Testimonial />
      {/* FAQ  */}
      <FaqPage />
    </>
  );
};

export default Home;
