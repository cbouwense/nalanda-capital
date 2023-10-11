import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-dark-blue px-2 sm:px-4 py-2.5 sticky w-full z-30 top-0 left-0">
      <div className="container flex items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Nalanda Capital
          </span>
        </a>
        <div className="flex items-center justify-between h-16">
          <Link
            href="/portfolio"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow text-white"
          >
            Portfolio
          </Link>
          <a
            href="/investment-approach"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow text-white"
          >
            Investment Approach
          </a>
          <a
            href="/about"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow text-white"
          >
            Team
          </a>
          <a
            href="/Contact"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
