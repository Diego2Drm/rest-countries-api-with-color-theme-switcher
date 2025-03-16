import React from 'react';
import { FaSearch } from "react-icons/fa";


const InputSerach: React.FC = () => {
  return (
    <section className='w-full mt-24 shadow-sm shadow-gray-400 border-2 border-gray-50 rounded-md p-4 pl-16 relative'>
      <form action="">
        <span className='absolute top-5 left-5 w-5 h-5 text-gray-400'>
          <FaSearch />
        </span>
        <input type="text" placeholder='Search for a coutry...' 
        className='w-full bg-transparent focus:outline-none pl-2 placeholder:text-gray-400 placeholder:text-sm'
        />
      </form>
    </section>
  );
}

export { InputSerach };