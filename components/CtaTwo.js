import Image from "next/image";

import { GreenButton } from "./GreenButton";
export default function CtaTwo() {
  return (
    <>
      <div className="max-w-520 lg:max-w-none mx-auto">
        <h3 className="lg:text-center text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-screen-md mx-auto">
          Everything You Expect, and More
        </h3>
        <div className="lg:grid lg:grid-cols-2 mt-4 lg:mt-20">
          <div className="flex flex-col justify-center lg:pr-14">
            <h4 className="text-2xl lg:text-3xl font-medium">
              Powerful Dashboard for Your Personal or Business Needs
            </h4>
            <p className="text-lg lg:text-2xl text-pirGray-500 leading-snug mt-6">
              Receive detailed insights on all your website metrics, including page views, bounce
              rate, time on page, and many more.
            </p>
            <p className="text-lg lg:text-2xl text-pirGray-500 leading-snug mt-6">
              Stay up-to-date on all your devices, whether you are on a desktop, tablet, or
              smartphone — presented in light or dark mode.
            </p>
            <div className="mt-10 mb-10 lg:mb-0">
              <GreenButton href="/livedemo" text="See Live Demo" />
            </div>
          </div>
          <Image src="https://pirsch.io/static/img/tables-dark.svg" width={568} height={663} />
        </div>
      </div>
      <div className="max-w-520 lg:max-w-none mx-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 mt-14 lg:mt-32">
          <Image src="https://pirsch.io/static/img/access-dark.svg" width={589} height={600} />
          <div className="flex flex-col justify-center lg:pl-14">
            <h4 className="text-2xl lg:text-3xl font-medium">
              Fine-grained Access Management Means Full Control
            </h4>
            <p className="text-lg lg:text-2xl text-pirGray-500 leading-snug mt-6">
              Give your team members access to the dashboard by assigning each one their own role,
              enabling them to see important data at a glance.
            </p>
            <p className="text-lg lg:text-2xl text-pirGray-500 leading-snug mt-6 mb-10 lg:mb-0">
              Generate unique access links for external partners, customers, or clients. Created or
              deleted in seconds, so you are always on top.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
