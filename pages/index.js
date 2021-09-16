import Head from "next/head";
import Image from "next/image";

import Clients from "../components/Clients";
import Cta from "../components/Cta";
import CtaOne from "../components/CtaOne";
import CtaTwo from "../components/CtaTwo";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grealish</title>
      </Head>
      <div className="max-w-1200 mx-auto px-4 wrap:px-0">
        <Header />
        <Hero />
        <Image
          className="rounded-lg"
          src="https://cdn.dribbble.com/users/1615584/screenshots/14795728/media/217c90aba448b05c6cab81a6891f071e.jpg"
          width={1200}
          height={640}
        />
        <CtaOne />
        <CtaTwo />
        <Features />
        <Clients />
        <Testimonial />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}
