import { useEffect, useState } from "react";

type CountryName = {
  common: string
  official: string
}
type CountryFlag = {
  png: string
  svg: string
}

interface Country {
  flags: CountryFlag
  name: CountryName
  population: number
  region: string
  capital: string
}

const Card = () => {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => { setCountries(data), console.log(data) })
  }, [])

  const deatils = (name: string) => {
    console.log(name);
    
  }
  return (
    <section className="mt-10 px-5">
      {
        countries.map((country, index) => (
          <article key={index} className="bg-white shadow-sm shadow-gray-300 rounded-md overflow-hidden mb-5"
          onClick={() => deatils(country.name.common)}
          >
            <img src={country.flags.png} alt={country.name.common} className="w-full h-[150px]"/>
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
          </article>
        ))
      }
    </section>
  )
}

export { Card };