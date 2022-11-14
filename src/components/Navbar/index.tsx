import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
const Navbar: FC = (): ReactElement => {
  return (
    <nav className="flex  w-screen h-[10vh] bg-[#51557E] text-[#D6D5A8] items-center justify-center">
      <ul className="flex flex-row gap-x-10 text-xl">
        <Link to="/" className="cursor-pointer ">
          Home
        </Link>
        <Link to="/about" className="cursor-pointer">
          About
        </Link>
        <Link to="/contact" className="cursor-pointer">
          Contact
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
