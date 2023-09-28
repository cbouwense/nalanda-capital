import type { NextPage } from "next";
import Head from "next/head";
import Card from "@/components/Card/Card";
import Navbar from "@/components/Navbar/Navbar";

import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Lathered Dragon</title>
        <meta name="description" content="Soap for the modern reptile." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-0 bg-gradient-radial from-tan to-dark-tan">
        <Navbar />
        <img
          src="https://i.etsystatic.com/isbl/93a030/63600998/isbl_3360x840.63600998_cpa78jin.jpg?version=1"
          className="max-h-[80vh] w-auto"
          alt="The Lathered Dragon"
          width={1080}
          height={720}
        />
        <div className={`${styles.testimonials} relative w-full h-[65vh]`}>
          <div className="bg-gradient-radial from-dark-slate to-light-black w-full h-full absolute z-10 -skew-y-6 flex justify-center" />
          <div className="container mx-auto h-full flex flex-col items-center justify-center gap-12 p-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white z-20">
              The talk of the town
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">
              "We absolutely love it. I will definitely be ordering it again." -
              Trent
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">
              "FABULOUS! The moisturizing properties are superior. Better than
              any other soap." - Jen
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">
              "It's good s***." - Travis
            </p>
          </div>
        </div>
        <br className="h-4" />
        <div className={`${styles.ingredients} relative w-full h-[65vh]`}>
          <div className="bg-gradient-radial from-dark-slate to-light-black w-full h-full absolute z-10 -skew-y-6 flex justify-center" />
          <div className="container mx-auto w-full h-full flex flex-col items-center justify-center gap-3 p-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white z-20 mb-10">
              Delightfully real ingredients
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">
              Shea butter
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">
              Cocoa butter
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">
              Olive oil
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">
              Coconut oil
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">
              Avocado oil
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">
              Castor oil
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-16 box-border mt-[30vh]">
          <Card
            name="Warm Lavender"
            description="Classic lavender with a spiced twist, smells extremely cozy. Made with our signature hydrating and nourishing recipe."
            image="/warm-lavender.webp"
            href="https://www.etsy.com/listing/1553771066/warm-lavender-soap"
          />
          <Card
            name="Sexy Man"
            description="Smells like a sexy man. Made with our signature hydrating and nourishing recipe. "
            image="/sexy-man.webp"
            href="https://www.etsy.com/listing/1553768532/sexy-man-soap"
          />
          <Card
            name="Pumpkin Waffle"
            description="Mouth-watering pumpkin waffle aroma will leave you smelling like an autumnal brunch. Made with our signature hydrating and nourishing recipe."
            image="/pumpkin-waffle.webp"
            href="https://www.etsy.com/listing/1567961081/pumpkin-waffle-soap"
          />
          <Card
            name="Sweater Weather"
            description="Smells like fall, feels like being in a craft store and picking apples. Made with our signature hydrating and nourishing recipe."
            image="/sweater-weather.webp"
            href="https://www.etsy.com/listing/1567955741/sweater-weather-soap"
          />
          <Card
            name="Coffee"
            description="Made with real coffee! The perfect bar of soap for any caffeine lover. "
            image="/coffee.webp"
            href="https://www.etsy.com/listing/1499585672/coffee-soap"
          />
          <Card
            name="Lavender"
            description="Calming and comforting aroma, perfect for a shower before bedtime."
            image="/lavender.webp"
            href="https://www.etsy.com/listing/1499578232/lavender-soap"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
