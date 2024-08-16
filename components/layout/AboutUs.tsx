import React from "react";
import AboutImg from "@/assets/cf.png";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="px-5 sm:py-5 md:p-16 bg-myColors-secondary">
      <div className="grid auto-rows-fr md:justify-center sm:grid-cols-2 max-w-screen-xl">
        <Image
          src={AboutImg}
          alt="About_us image"
          className="order-2 sm:order-first w-full h-full"
        />

        <div className="flex flex-col justify-center sm:pl-10 md:pl-20">
          <h2 className="font-bold text-2xl md:text-5xl">About Us</h2>

          <p className="my-6">
            Carefinder is dedicated to making healthcare accessible to everyone
            with ease. Learn more about our mission, team, and history.
          </p>

          <Button asChild className="w-fit">
            <Link href="/about">Read More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
