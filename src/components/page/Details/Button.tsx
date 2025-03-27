import React from "react"
import { FaArrowLeft } from "react-icons/fa6";

type ButtonProps = {
  goBack: () => void
}

const Button: React.FC<ButtonProps> = ({ goBack }) => {
  return (
    <button
      className="flex justify-center items-center gap-2 border-2 border-gray-300 shadow-md shadow-gray-400 w-28 p-2 rounded-md"
      onClick={goBack}>
      <span><FaArrowLeft /></span>
      Back
    </button>
  )
}

export { Button };