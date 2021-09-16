import Link from "next/link";

import { GreenButton } from "./GreenButton";

export default function Hero() {
  return (
    <div className="max-w-screen-md mx-auto md:text-center py-8 md:py-28">
      <h1 className="text-4xl lg:text-8xl font-semibold leading-tight text-black">
        As Easy As Tracking Gets.
      </h1>
      <p className="text-lg md:text-2xl text-pirGray-500 leading-snug mt-9">
        Grealish is an open-source website tracking tool used to track the performance and ROI of a
        listed website — lightweight, cookie-free and easily integrated into any website.
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
