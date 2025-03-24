import { act, useEffect, useState } from "react";
import { Card } from "../Card"
import { FIlterByRegion } from "../FilterByRegion"
import { InputSerach } from "..//InputSearch"

export interface Region {
  name: string
}
type CountryName = {
  common: string
  official: string
}
type CountryFlag = {
  png: string
  svg: string
}

export interface Country {
  flags: CountryFlag
  name: CountryName
  population: number
  region: string
  capital: string
}


const Home = () => {
  const regions: Region[] = [
    { name: 'All' },
    { name: 'Africa' },
    { name: 'Americas' },
    { name: 'Asia' },
    { name: 'Europe' },
    { name: 'Oceania' }
  ]

  const [countries, setCountries] = useState<Country[]>([])
  const [filterCountries, setFilterCountries] = useState<Country[]>([])
  const [selectedRegion, setSelectedRegion] = useState<string>('')
  const [activeFIlteredCountries, setActiveFilteredCoountries] = useState<string>('All')

  const getRegionName = (region: string) => {
    setSelectedRegion(region)
    filterByRegion(region)
  }

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => { setCountries(data) })
      .catch(error => {
        console.log(error)
      })

  }, [])


  const filterByRegion = (region: string) => {
    if (region === "All") {
      setFilterCountries([])
      setActiveFilteredCoountries("All")
    } else {
      const filtered = countries.filter((data: Country) => data.region === region)
      setFilterCountries(filtered)
      setActiveFilteredCoountries(region)
    }
  }

  return (
    <>
      <InputSerach />
      <FIlterByRegion regions={regions} getRegionName={getRegionName} activeCountries={activeFIlteredCountries}/>
      <Card countries={filterCountries.length > 0 ? filterCountries : countries} />
    </>
  )

}

export { Home };