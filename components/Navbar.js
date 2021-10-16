import Link from "next/link";
import { useState } from "react";

export default function Navbar({ page }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const links = [
    { href: "/", name: "Home" },
    { href: "/characters", name: "Characters" },
  ];

  return (
    <div className="bg-gray-900 bg-opacity-90">
      <nav className="w-11/12 mx-auto flex items-center flex-wrap py-3 mb-4">
        <Link href="/">
          <a className="inline-flex items-center ">
            <span className="text-xl text-gray-50 font-semibold tracking-wide mr-8">
              Genshin Quick Reference
            </span>
          </a>
        </Link>
        <button
          className="inline-flex p-3 hover:text-gray-400 rounded lg:hidden text-gray-50 ml-auto focus:outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center flex flex-col text-xl">
            {links.map((link) => {
              return (
                <Link href={link.href} key={link.name}>
                  <a
                    className={`px-4 py-2 hover:text-gray-50 ${
                      link.name === page ? "text-gray-50" : "text-gray-400"
                    }`}
                  >
                    {link.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
