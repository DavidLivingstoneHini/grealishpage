import Link from "next/link";

export function GreenButton({ href, text }) {
  return (
    <Link href={href}>
      <a className="text-lg transition duration-500 ease-in-out bg-pirGreen hover:bg-pirGreenHover py-2 md:py-4 px-5 rounded-lg text-black font-medium transform hover:-translate-y-1 hover:scale-110 ...">
        {text}
      </a>
    </Link>
  );
}
