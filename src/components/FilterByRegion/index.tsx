import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";



const FIlterByRegion = () => {

  const [open, setOpen] = useState(false);

  const regions = [
    { name: 'Africa' },
    { name: 'America' },
    { name: 'Asia' },
    { name: 'Europe' },
    { name: 'Oceania' }
  ]

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between gap-5 w-52 shadow-sm shadow-gray-400 border-2 border-gray-50 rounded-md p-4 bg-white"
        onClick={() => setOpen(!open)}
      >
        <p>Filter by Region</p>
        <span className={`${open ? "transform rotate-0" : "transform rotate-180"} transition-transform duration-100`}>
          <IoIosArrowDown />
        </span>
      </div>

      <div className={`${open ? "block" : "hidden"} mt-2 w-52 shadow-sm shadow-gray-400 border-2 border-gray-50 rounded-md p-4 bg-white`}
      >
        <ul className="flex flex-col gap-2 ">
          {regions.map(region => (
            <li key={region.name}>{region.name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}


export { FIlterByRegion };