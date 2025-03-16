import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white p-5 shadow-md shadow-gray-300 flex justify-between items-center">
      <p className="text-lg font-bold">Where in the world?</p>
      <p className="flex items-center gap-2 text-sm font-semibold">
        <FaRegMoon />
        <span>Dark Mode</span>
      </p>
    </header>
  );
}

export { Header };