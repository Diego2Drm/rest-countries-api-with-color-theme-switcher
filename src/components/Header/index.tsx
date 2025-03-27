import { useContext } from "react";
import { FaRegMoon } from "react-icons/fa";
import { ThemeContext } from "../../context/MyContext";
import { FaMoon } from "react-icons/fa";

const Header = () => {

  const { theme, handleChangeTheme } = useContext(ThemeContext)
  
  return (
    <header className="bg-white p-5 shadow-md shadow-gray-300 flex justify-between items-center fixed w-full top-0 left-0 z-50 md:px-10 dark:bg-Dark-Blue dark:text-white dark:shadow-black">
      <p className="text-lg font-bold md:text-xl">Where in the world?</p>
      <p className="flex items-center gap-2 text-sm font-semibold md:text-lg cursor-pointer" onClick={handleChangeTheme}>
        { theme == 'light' ? <FaRegMoon /> : <FaMoon />}
        <span>Dark Mode</span>
      </p>
    </header>
  );
}

export { Header };