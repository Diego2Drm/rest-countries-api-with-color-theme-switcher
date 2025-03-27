import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Region } from "../Home";

type RegionProps = {
  regions: Region[]
  getRegionName: (region: string) => void
  activeCountries: string
}

const FIlterByRegion = ({ regions, getRegionName, activeCountries }: RegionProps) => {

  const [open, setOpen] = useState(false);

  return (
    <section className="mt-10 relative md:mt-0">
      <div className="flex items-center justify-between gap-5 w-52 shadow-sm shadow-gray-400 border-2 border-gray-50 rounded-md p-4 bg-white dark:bg-Dark-Blue dark:border-Dark-Blue dark:shadow-black"
        onClick={() => setOpen(!open)}
      >
        <p className="dark:text-white">Filter by Region</p>
        <span className={`${open ? "transform rotate-0" : "transform rotate-180"} transition-transform duration-100 dark:text-white`}>
          <IoIosArrowDown />
        </span>
      </div>

      <div className={`${open ? "block" : "hidden"} mt-2 w-52 shadow-sm shadow-gray-400 border-2 border-gray-50 rounded-md p-4 bg-white absolute z-10 dark:border-Dark-Blue dark:bg-Dark-Blue dark:shadow-black`}
      >
        <ul className="flex flex-col gap-2">
          {regions.map(region => (
            <li key={region.name}
              onClick={() => getRegionName(region.name)}
              className={activeCountries == region.name ? 'text-red-700 font-semibold dark:text-blue-500' : 'text-black font-medium dark:text-white cursor-pointer'}
            >{region.name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}


export { FIlterByRegion };