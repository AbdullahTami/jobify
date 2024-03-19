import Image from "next/image";
import Logo from "../assets/logo.svg";
import LandingImg from "../assets/main.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm py-8">
        <Image src={Logo} alt="logo" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Are you tired of juggling multiple job applications, interviews, and
            follow-ups? Look no further! Jobify is your all-in-one solution for
            managing your job search journey.!
          </p>
          <Button asChild className="mt-4 ">
            <Link href="/add-job">Get started</Link>
          </Button>
        </div>
        <Image
          src={LandingImg}
          alt="landing image"
          className="hidden lg:block"
        />
      </section>
    </main>
  );
}
