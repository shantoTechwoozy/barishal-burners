import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import Blog from "@/components/Blog";
export const metadata: Metadata = {
  title: "TechWoozy",
  description: "IT & Digital Marketing Solutions",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Blog />
    </main>
  );
}