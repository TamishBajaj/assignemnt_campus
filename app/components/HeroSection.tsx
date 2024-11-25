import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { PiBicycleFill } from "react-icons/pi";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[100vh] bg-cover bg-center" style={{ backgroundImage: "url('/bicycle2.jpg')", objectFit: "contain" }}>
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-gradient-to-r from-stone-900 to-stone-900/80" />
        <div className="w-1/2 bg-gradient-to-l from-red-600 to-red-600/80" />
      </div>

      <nav className="relative z-10 flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <PiBicycleFill className="h-10 w-10 ml-6 text-white" />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link className="text-sm font-medium text-white hover:text-gray-200" href="#">
            HOME
          </Link>
          <Link className="text-sm font-medium text-white hover:text-gray-200" href="#">
            BICYCLES
          </Link>
          <Link className="text-sm font-medium text-white hover:text-gray-200" href="#">
            ACCESSORIES
          </Link>
          <Link className="text-sm font-medium text-white hover:text-gray-200" href="#">
            ABOUT US
          </Link>
          <Link className="text-sm font-medium text-white hover:text-gray-200" href="#">
            CONTACT
          </Link>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <span className="text-sm font-medium">$0.00</span>
          <FaShoppingCart className="h-6 w-6" />
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 flex h-full">
        <div className="w-1/2 flex flex-col justify-center p-12">
          <span className="text-2xl font-bold text-white italic">Newly Launched</span>
          <h1 className="text-[5rem] font-bold italic mb-8 text-white">
            Kryo X26
            <br />
            &quot;MTB&quot; {/* Escaped double quotes around MTB */}
          </h1>
          <div className="space-y-4 mb-8">
            <h2 className="text-xl text-white">Specifications:</h2>
            <ul className="space-y-2 text-white">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Lightweight 18&quot; Frame</span> {/* Escaped double quote in inch */}
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Steel Suspension Fork</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Steel Hardtail Frame</span>
              </li>
            </ul>
          </div>
          <button className="bg-red-600 text-white px-8 py-3 rounded w-fit hover:bg-red-700 transition-colors">
            BUY NOW
          </button>
        </div>
        <div className="w-1/2" />
      </div>
    </div>
  );
};

export default HeroSection;
