import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import {
  Mission, WhatWeDo, Ecosystem, Products, Innovation,
  Why, Values, Audience, Vision, FinalCTA, Footer,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AFRINOVERSE — Building Systems for Africa's Next Generation" },
      {
        name: "description",
        content:
          "AFRINOVERSE is a future-focused African innovation ecosystem building platforms, products and programmes across education, technology, enterprise and innovation.",
      },
      { property: "og:title", content: "AFRINOVERSE — Africa's Next-Gen Innovation Ecosystem" },
      {
        property: "og:description",
        content: "Educate. Innovate. Empower. Platforms, products and programmes for Africa's future.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <WhatWeDo />
        <Ecosystem />
        <Products />
        <Innovation />
        <Why />
        <Values />
        <Audience />
        <Vision />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
