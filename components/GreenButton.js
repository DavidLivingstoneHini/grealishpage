import Link from "next/link";

export function GreenButton({ href, text }) {
  return (
    <Link href={href}>
      <a className="text-lg transition duration-200 bg-pirGreen hover:bg-pirGreenHover py-2 md:py-4 px-5 rounded-lg text-black font-medium">
        {text}
      </a>
    </Link>
  );
}
