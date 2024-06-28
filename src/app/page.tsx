import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Stacks from "../components/Stacks";
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto">

      {/* Hero section */}
      <section className="h-screen">
        <div className="mb-5">
          <HeroSection />
        </div>

        <Button lead gradient="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600" href="#" >Download Resume</Button>
      </section>
    </main>
  );
}
