import { Link } from "react-router-dom";
import { Country } from "../Home";

type CountryProps = {
  countries: Country[]
}

const Card = ({countries}: CountryProps) => {

  return (
    <section className="mt-10 px-5">
      {
        countries.map((country, index) => (
          <Link to={`/details/${country.name.common}`} key={index} className="bg-white shadow-sm shadow-gray-300 rounded-md overflow-hidden mb-5"
          >
            <img src={country.flags.png} alt={country.name.common} className="w-full h-[150px]" />
            <div className="p-3 mb-10">
              <h3 className="font-extrabold mb-5 text-lg">{country.name.common}</h3>
              <p className="text-sm">
                <span className="font-bold">Population:</span> {country.population}
              </p>
              <p className="text-sm">
                <span className="font-bold">Region:</span> {country.region}
              </p>
              <p className="text-sm">
                <span className="font-bold">Capital:</span> {country.capital}
              </p>
            </div>
          </Link>
        ))
      }
    </section>
  )
}

export { Card };