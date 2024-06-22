import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Stacks from "../components/Stacks";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto p-5">

      {/* Hero section */}
      <section className="h-screen">
        <HeroSection />

        {/* Scroll down link */}
        <Link href={'#tech-stacks'} className="hidden md:flex items-center justify-center mt-10 animate-bounce" >
          <Image src="/svgs/icons/arrow-down.svg" alt="Go Down" width={100} height={100} />
        </Link>
      </section>


      {/* Stacks section */}
      <section id="tech-stacks" className="h-screen">
        <br /><br />
        <Stacks />
      </section>
    </main>
  );
}
