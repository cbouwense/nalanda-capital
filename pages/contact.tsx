import { NextPage } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

const Portfolio: NextPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default Portfolio;
