import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "../constants";

const Footer = () => (
  <footer className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Shop<span className="text-primary">Ease</span>
          </h1>
        </Link>{" "}
        
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <p>@2024 ShopEase. All rights reserved</p>

      <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
