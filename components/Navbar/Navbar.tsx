import GetSomeButton from "../CheckoutButton/GetSomeButton";

const Navbar = () => {
  return (
    <nav className="bg-dark-blue px-2 sm:px-4 py-2.5 sticky w-full z-30 top-0 left-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Nalanda Capital
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
