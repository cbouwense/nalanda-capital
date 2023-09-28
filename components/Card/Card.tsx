import Image from "next/image";
import Link from "next/link";

export type CardProps = {
  name: string;
  image: string;
  description: string;
  href: string;
};

const Card = ({ name, image, description, href }: CardProps) => {
  return (
    <div className="mt-8 bg-dark-tan shadow-2xl rounded-lg ring-2 ring-tan max-w-sm w-full mx-auto relative">
      <Link href={href}>
        <Image
          src={image}
          alt={name}
          height="300"
          width="300"
          className="rounded-tl-lg rounded-tr-lg object-fit w-full"
        />
      </Link>

      <div className="flex flex-col justify-between px-4 py-3">
        <div className="flex items-center justify-between">
          <Link className="text-2xl text-dark-slate font-semibold" href={href}>
            {name}
          </Link>
        </div>
        <p className="text-md text-dark-slate">{description}</p>
      </div>
    </div>
  );
};

export default Card;
