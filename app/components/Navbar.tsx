"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const links = [
    { id: 1, name: "Home", path: "https://zoooom.me/" },
    { id: 2, name: "My Garage", path: "https://zoooom.me/garage/" },
    { id: 3, name: "About", path: "https://zoooom.me/about/" },
    { id: 4, name: "Contact Us", path: "https://zoooom.me/contact/" },
  ];

  return (
    <header className="relative flex justify-between w-full px-6 pt-6 md:pt-9 md:px-8 md:grid md:grid-cols-12 md:items-center z-40">
      <div className="col-start-1 md:pl-6">
        <a href="https://zoooom.me/">
          <Image
            src="/logo.svg"
            alt="Zoooom Logo"
            width={140}
            height={40}
            priority
          />
        </a>
      </div>

      {/* Desktop Nav */}
      <div className="flex items-center justify-between col-span-8 col-start-5">
        <nav className="hidden col-start-5 gap-6 pl-3 md:flex text-primary">
          {links.map((item) => (
            <a
              href={item.path}
              key={item.id}
              className="hover:underline"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="items-center hidden gap-5 md:flex lg:mr-16">
          <input
            placeholder="Search"
            type="text"
            className="py-[0.3rem] hidden pl-3 lg:w-44 md:w-24 xl:w-full w-auto outline-none border-secondary border-[1px] rounded-md text-dark"
          />
          <button className="text-primary hidden border-2 border-primary rounded-md py-[0.3rem] px-3">
            Search
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {active && (
        <div
          className={`absolute top-0 left-0 z-50 h-screen bg-light ${
            active ? "w-full" : "w-0"
          }`}
        >
          <button
            aria-label="Close Menu"
            onClick={() => setActive(false)}
            className="absolute top-7 right-7"
          >
            <Image src="/cross-icon.svg" alt="Close" width={20} height={20} />
          </button>
          <nav className="flex flex-col items-center justify-center gap-4 mt-20 text-primary">
            {links.map((item) => (
              <a
                href={item.path}
                key={item.id}
                className="text-body-lg"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Mobile Menu Button */}
      <button
        aria-label="Open Menu"
        onClick={() => setActive(!active)}
        className="md:hidden absolute top-7 right-7"
      >
        <Image src="/menu-icon.svg" alt="Menu" width={24} height={24} />
      </button>
    </header>
  );
}
