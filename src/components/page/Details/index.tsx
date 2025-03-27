import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from './Button';

type CountryFlag = {
  png: string
  svg: string
}

type CountryName = {
  common: string
  official: string
  nativeName: {
    [key: string]: {
      official: string
      common: string
    }
  }
}

type CountryCurrencies = {
  [key: string]: {
    name: string
    symbol: string
  }
}

type CountryLanguages = {
  [key: string]: string
}

interface Country {
  flags: CountryFlag
  name: CountryName
  population: number
  region: string
  subregion: string
  capital: string
  tld: string[]
  currencies: CountryCurrencies
  languages: CountryLanguages
  borders: string[]
}


const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams()

  const [country, setCountry] = useState<Country[]>([])

  const goBack = () => {
    navigate('/')
  }

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => response.json())
      .then(data => setCountry(data))
  }, [])

  return (
    <section className="mt-5">
      <Button goBack={goBack} />

      {
        country.map((country, i) => {
          const nativeName = country.name.nativeName;
          const firstKey = Object.keys(nativeName)[0];
          const nativeNameCommon = nativeName[firstKey].common;
          const currencies = country.currencies;
          const firstKeyCurrencies = Object.keys(currencies)[0];
          const currenciesName = currencies[firstKeyCurrencies].name;
          const languages = country.languages;
          const firstKeyLanguages = Object.keys(languages);
          const languagesName = firstKeyLanguages.map((key) => languages[key]).join(', ');

          return (
            <article key={i} className="space-y-8 mt-10 mb-5 w-full">
              <div className="md:flex">
                <img src={country.flags.png} alt={country.name.common} className="h-52 mb-10 md:w-1/2 md:h-96 md:mb-0" />

                <div className="md:w-1/2 md:flex md:flex-col md:justify-center md:pr-10 md:gap-5 md:pl-28">
                  <h3 className="text-xl font-bold md:text-2xl md:font-extrabold">{country.name.common}</h3>

                  <div className="md:flex md:justify-between">
                    <div className="space-y-5 md:space-y-2">
                      <p>
                        <span className="textBold">Native Name: </span>
                        {nativeNameCommon}</p>
                      <p>
                        <span className="textBold">Population: </span>
                        {country.population}
                      </p>
                      <p>
                        <span className="textBold">Region: </span>
                        {country.region}
                      </p>
                      <p>
                        <span className="textBold">Sub Region </span>
                        {country.subregion}
                      </p>
                      <p>
                        <span className="textBold">Capital: </span>
                        {country.capital}
                      </p>
                    </div>
                    <div className="space-y-5">
                      <p>
                        <span className="textBold">Top Level Domain: </span>
                        {country.tld}
                      </p>
                      <p>
                        <span className="textBold">Currencies: </span>
                        {currenciesName}
                      </p>
                      <p>
                        <span className="textBold">Languages: </span>
                        {languagesName}
                      </p>
                    </div>
                  </div>

                  <ul className="flex flex-col flex-wrap md:pt-8 md:flex-row md:items-center md:gap-5">
                    <span className="textBold">Border Countries: </span>
                    <div className="flex flex-wrap gap-2 mt-5 md:mt-0">
                      {country.borders?.map((border, i) => (
                        <li key={i} className="border-2 border-gray-300  px-2 rounded-md md:px-4">{border}
                        </li>
                      ))}
                    </div>
                  </ul>

                </div>
              </div>
            </article>
          )
        })
      }

    </section >
  )
}

export { Details };