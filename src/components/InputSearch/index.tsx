import React from 'react';
import { FaSearch } from "react-icons/fa";

type InputProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputText: string
}

const InputSerach: React.FC<InputProps> = ({ handleSubmit, handleChange, inputText }) => {
  return (
    <section className='w-full shadow-sm shadow-gray-400 border-2 border-gray-50 rounded-md p-4 pl-16 relative'>
      <form action="" onSubmit={handleSubmit}>
        <span className='absolute top-5 left-5 w-5 h-5 text-gray-400'>
          <FaSearch />
        </span>
        <input type="text" placeholder='Search for a coutry...'
          className='w-full bg-transparent focus:outline-dotted pl-2 placeholder:text-gray-400 placeholder:text-sm'
          value={inputText}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}

export { InputSerach };