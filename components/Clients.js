import Image from "next/image";

import { GreenButton } from "./GreenButton";

export default function Clients() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-3 gap-x-5 lg:gap-y-32 max-w-520 lg:max-w-none mx-auto mt-10 lg:mt-0">
        <div className="col-span-1 flex flex-col justify-center lg:pr-8">
          <h5 className="text-2xl lg:text-3xl font-medium">Fit for WordPress</h5>
          <p className="text-lg lg:text-[22px] text-pirGray-500 leading-snug mt-6">
            Add powerful analytics to your WordPress site with a few clicks. Our plugin runs in the
            backend — no coding, no hassle.
          </p>
          <div className="mt-10 mb-14 lg:mb-0">
            <GreenButton href="/add" text="Add to WordPress" />
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center bg-black rounded-xl px-8 lg:px-0 py-24">
          <Image src="https://pirsch.io/static/img/wordpress.svg" width={384} height={87} />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 flex flex-col-reverse gap-x-5 lg:gap-y-32 max-w-520 lg:max-w-none mx-auto mt-10 lg:mt-44">
        <div className="col-span-2 px-8 lg:px-0 flex justify-center items-center bg-black rounded-xl py-24">
          <Image
            src="https://pirsch.io/static/img/googlesearchconsole.svg"
            width={384}
            height={42}
          />
        </div>
        <div className="col-span-1 flex flex-col justify-center lg:pl-8">
          <h5 className="text-2xl lg:text-3xl font-medium">Works with Google Search Console</h5>
          <p className="text-lg lg:text-[22px] text-pirGray-500 leading-snug mt-4 mb-8 lg:mb-0">
            See what Google searches led people to your website right within the dashboard.
          </p>
        </div>
      </div>
    </>
  );
}
