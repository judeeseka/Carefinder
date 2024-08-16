import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import fbIcon from "@/assets/facebook.svg";
import igIcon from "@/assets/instagram.svg";
import xIcon from "@/assets/x.svg";

const Footer = () => {
  return (
    <footer className="bg-myColors-main dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h2 className="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl dark:text-white text-white">
              Subscribe our newsletter to get update.
            </h2>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="max-w-sm"
              />
              <Button>Subscribe</Button>
            </div>
          </div>

          <div className="text-white">
            <p className="font-bold dark:text-white">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link href="/" className="hover:text-sky-500">
                Home
              </Link>
              <Link href="/about" className="hover:text-sky-500">
                About
              </Link>
              <Link href="/contact-us" className="hover:text-sky-500">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="text-white">
            <p className="font-bold dark:text-white">Services</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link href="/search-hospitals" className="hover:text-sky-500">
                Search Hospitals
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-400 md:my-8 dark:border-gray-700" />

        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Image
              src={logo}
              alt="Carefinder logo"
              className="w-6 h-auto rounded-full"
            />
            <span className="text-2xl font-bold text-white">Carefinder</span>
          </div>

          <div className="flex gap-4 -mx-2 bg-white p-2 rounded-md">
            <Link href="#">
              <Image src={fbIcon} alt="facebook icon" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src={igIcon} alt="instagram icon" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src={xIcon} alt="x icon" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
