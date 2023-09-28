import GetSomeButton from "../CheckoutButton/GetSomeButton";

const Navbar = () => {
  return (
    <nav className="bg-dark-slate px-2 sm:px-4 py-2.5 sticky w-full z-30 top-0 left-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a
          href="https://www.etsy.com/shop/LatheredDragonSoapCo"
          className="flex items-center"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            The Lathered Dragon
          </span>
        </a>
        <GetSomeButton />
      </div>
    </nav>
  );
};

export default Navbar;
