import React, { createContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: "light" | "dark",
  handleChangeTheme : () => void
}

type ContextProps = {
  children: React.ReactNode
}


const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  handleChangeTheme: () => {}
});

const MyContextProvider = ({ children }: ContextProps) => {

  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html')?.classList.add("dark")
    } else {
      document.querySelector('html')?.classList.remove("dark")
    }

  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme == 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{theme, handleChangeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export { MyContextProvider, ThemeContext }