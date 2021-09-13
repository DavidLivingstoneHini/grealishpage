import { GreenButton } from "./GreenButton";

export default function Cta() {
  return (
    <div className="bg-black text-center mt-0 lg:mt-18 rounded-xl py-28">
      <div className="text-white text-4xl lg:text-6xl font-medium">Ready to get started?</div>
      <p className="text-pirGray-500 text-lg lg:text-[22px] mt-6">
        Setting up your website only takes a few minutes.
      </p>
      <div className="mt-10">
        <GreenButton href="/getstarted" text="Start 30-day Free Trial" />
      </div>
      <p className="text-pirGray-500 mt-6">No credit card required.</p>
    </div>
  );
}
