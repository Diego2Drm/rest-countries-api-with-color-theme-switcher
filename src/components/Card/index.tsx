import { Link } from "react-router-dom";
import { Country } from "../Home";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

type CountryProps = {
  countries: Country[]
}

const Card = ({ countries }: CountryProps) => {

  return (
    <section className="mt-10">
      <div className="md:flex md:flex-wrap md:justify-between">
        {
          countries.map((country, index) => (
            <div key={index} className="bg-white shadow-sm shadow-gray-400 rounded-md overflow-hidden mb-5 dark:bg-Dark-Blue dark:shadow-black">
              <Link to={`/details/${country.name.common}`} className="w-full">
                <div className="w-[340px] md:w-[300px]">
                  <LazyLoadImage src={country.flags.png} alt={country.name.common}
                    className="h-[200px] md:h-[150px]"
                    placeholderSrc="blur"
                    effect="blur"
                    width="100%"
                    height={150}
                  />
                </div>
                <div className="p-3 pl-10 mb-10 mt-10 md:mt-0">
                  <h3 className="font-extrabold mb-3 text-lg dark:text-white">{country.name.common}</h3>
                  <p className="info-primary">
                    <span>Population:</span>
                    <span>{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                  </p>
                  <p className="info-primary">
                    <span>Region:</span>
                    <span>{country.region}</span>
                  </p>
                  <p className="info-primary">
                    <span>Capital:</span>
                    <span>{country.capital}</span>
                  </p>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export { Card };