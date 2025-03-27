import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white p-5 shadow-md shadow-gray-300 flex justify-between items-center fixed w-full top-0 left-0 z-50 md:px-10 ">
      <p className="text-lg font-bold md:text-xl">Where in the world?</p>
      <p className="flex items-center gap-2 text-sm font-semibold md:text-lg">
        <FaRegMoon />
        <span>Dark Mode</span>
      </p>
    </header>
  );
}

export { Header };