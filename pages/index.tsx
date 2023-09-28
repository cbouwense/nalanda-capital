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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="bg-white shadow overflow-hidden rounded-lg">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link
                href="/portfolio"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow"
              >
                Portfolio
              </Link>
              <a
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow"
              >
                Investment Approach
              </a>
              <a
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow"
              >
                Team
              </a>
              <a
                href="/Contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow"
              >
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
