import Link from "next/link";

import { GreenButton } from "./GreenButton";

export default function Hero() {
  return (
    <div className="max-w-screen-md mx-auto md:text-center py-8 md:py-28">
      <h1 className="text-4xl lg:text-8xl font-semibold leading-tight text-black">
        As Easy As Analytics Gets.
      </h1>
      <p className="text-lg md:text-2xl text-pirGray-500 leading-snug mt-9">
        Grealish is a simple, privacy-friendly, open-source alternative to Google Analytics —
        lightweight, cookie-free and easily integrated into any website or directly into your
        backend.
      </p>

      <div className="mt-8 md:mt-12 flex justify-center">
        <GreenButton href="/getstarted" text="Try it for free" />
        <Link href="/getstarted">
          <a className="text-lg ml-6 bg-white hover:bg-pirGray-200 transition-colors duration-200 py-2 md:py-4 px-5 rounded-lg text-black font-medium">
            Live Demo
          </a>
        </Link>
      </div>
      <p className="text-pirGray-500 mt-3 md:mt-6 text-center">No credit card required</p>
    </div>
  );
}
