/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useState } from "react";

import CloseMenuIcon from "./CloseMenuIcon";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";

function NavLink({ href, text }) {
  return (
    <li className="ml-6 font-medium">
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </li>
  );
}

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="py-7 flex justify-between items-center">
        <div className="flex items-center">
          <Logo className="w-5 h-7" />
          <span className="text-2xl font-medium ml-1.5 tracking-tight">Grealish</span>
        </div>

        <div className="md:hidden">
          {showMenu ? (
            <CloseMenuIcon
              className="h-6 w-6 mr-2 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          ) : (
            <MenuIcon
              className="h-6 w-6 mr-2 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          )}
        </div>

        <div className="items-center hidden md:flex">
          <ul className="flex">
            <NavLink href="/pricing" text="Pricing" />
            <NavLink href="/documentation" text="Documentation" />
            <NavLink href="/blog" text="Blog" />
          </ul>
          <div className="">
            <Link href="/getstarted">
              <a className="ml-6 bg-pirGreen hover:bg-pirGreenHover transition-colors duration-200 px-3 py-1.5 rounded-lg text-black font-medium">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>

      {showMenu && (
        <div className="relative">
          <div className="absolute flex w-full bg-pirBeige pb-10">
            <div className="flex flex-col font-medium w-full">
              <div className="py-4 border-b-2 border-pirGray-300">
                <Link href="/pricing">
                  <a className="text-lg px-4 hover:text-pirGray-700 transition-colors duration-200">
                    Pricing
                  </a>
                </Link>
              </div>
              <div className="py-4 border-b-2 border-pirGray-300">
                <Link href="/pricing">
                  <a className="text-lg px-4 hover:text-pirGray-700 transition-colors duration-200">
                    Live Demo
                  </a>
                </Link>
              </div>
              <div className="py-4 border-b-2 border-pirGray-300">
                <Link href="/pricing">
                  <a className="text-lg px-4 hover:text-pirGray-700 transition-colors duration-200">
                    Documentation
                  </a>
                </Link>
              </div>
              <div className="py-4 border-b-2 border-pirGray-300">
                <Link href="/pricing">
                  <a className="text-lg px-4 hover:text-pirGray-700 transition-colors duration-200">
                    Github
                  </a>
                </Link>
              </div>
              <div className="py-4 border-b-2 border-pirGray-300">
                <Link href="/pricing">
                  <a className="text-lg px-4 hover:text-pirGray-700 transition-colors duration-200">
                    Twitter
                  </a>
                </Link>
              </div>
              <div className="py-4 border-b-2 border-pirGray-300">
                <Link href="/pricing">
                  <a className="text-lg px-4 hover:text-pirGray-700 transition-colors duration-200">
                    Blog
                  </a>
                </Link>
              </div>
              <div className="flex justify-center">
                <Link href="/getstarted">
                  <a className="block bg-pirGreen w-full py-3 rounded-lg text-center hover:bg-pirGreenHover transition-colors duration-200">
                    Get Started
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
