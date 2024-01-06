"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  const badges: any[] = [
    {
      count: "100+",
      title: "Clients",
      bgColor: "bg-brown",
      textColor: "text-white",
    },
    {
      count: "10+",
      title: "Products",
      bgColor: "bg-gray-300",
      textColor: "text-black",
    },
    {
      count: "5",
      title: "Awards",
      bgColor: "bg-gray-300",
      textColor: "text-black",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="w-full px-10">
        <section className="flex flex-col justify-end w-full h-screen pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-7xl pb-10"
          >
            Make Your Dream <br />
            Home With Us
          </motion.h1>
          <div
            className="w-full h-1/2 bg-bottom bg-cover rounded-xl relative"
            style={{
              backgroundImage: `url(/hero-img-1.jpg)`,
            }}
          >
            <section className="absolute z-10 right-0 text-sm md:text-md flex gap-4 -translate-y-10 md:-translate-x-10">
              {badges.map((badge, i) => (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (i + 1) * 0.1 }}
                  key={i}
                  className={`p-4 md:p-8 rounded-xl flex flex-col items-center justify-center ${badge.bgColor} ${badge.textColor}`}
                >
                  <b className="text-xl">{badge.count}</b>
                  <p>{badge.title}</p>
                </motion.div>
              ))}
            </section>
          </div>
        </section>
        <section className="w-full h-screen flex flex-col md:flex-row gap-10 justify-between items-end">
          <div
            className="w-full md:w-1/2 h-screen bg-center bg-cover rounded-xl"
            style={{ backgroundImage: `url(/hero-img-2.jpg)` }}
          ></div>
          <p className="md:w-1/2 text-justify md:text-xl">
            Transform your living spaces with Interio! Our carefully curated
            collection of interior products is crafted to reflect your unique
            style. Discover stunning lamps, elegant wall clocks, luxurious
            sofas, and stylish chairs and tables. From illuminating your space
            to redefining functionality, Interio has everything you need for an
            inspired home.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
