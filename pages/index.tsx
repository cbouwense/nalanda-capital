import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";

import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nalanda Capital</title>
        <meta
          name="description"
          content="Nalanda Capital is an owner of exceptional businesses in the Indian public markets"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="p-4">
            <h2 className="text-2xl font-medium mb-2 text-rust">
              Nalanda Capital is an owner of exceptional businesses in the
              Indian public markets
            </h2>
            <p className="my-4">
              We consider ourselves to be permanent (part) owners of
              high-quality publicly listed businesses run by exceptional people.
              We invest exclusively in small to mid-cap companies in India where
              we aim to be a large (typically the largest after the founding
              family), friendly (active, without being activist) and long term
              (ideally, permanent) shareholder.
            </p>
            <p>
              Nalanda was launched in May 2007 and its LPs are primarily US
              Endowments and Foundations, and US and European Family Offices.
              Nalanda is currently closed to new investors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
