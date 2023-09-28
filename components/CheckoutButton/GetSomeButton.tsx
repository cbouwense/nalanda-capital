import Link from "next/link";

const GetSomeButton = () => {
  return (
    <Link
      href="https://www.etsy.com/shop/LatheredDragonSoapCo"
      className="text-dark-blue bg-dark-tan focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
    >
      <span>Get some!</span>
    </Link>
  );
};

export default GetSomeButton;
