import { FaAngleDown, FaHamburger, FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-full h-[45px] px-[68px] flex justify-between mt-5 items-center text-white">
      <div>
        <h2 className="font-extrabold italic drop-shadow-sm">Research</h2>
      </div>
      <div className="h-full w-[363px] bg-[#ffffff40] rounded-full flex justify-around items-center">
        <h2>Home</h2>
        <h2 className="flex items-end">
          Registration{" "}
          <span>
            <FaAngleDown />
          </span>
        </h2>
      </div>
      <div className="flex gap-5">
        <div className="min-w-[45px] h-[45px] rounded bg-[#ffffff40] flex justify-center items-center">
          <FaSearch />
        </div>
        <div className="min-w-[45px] h-[45px] rounded bg-[#ffffff40] flex justify-center items-center">
          <FaHamburger />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
