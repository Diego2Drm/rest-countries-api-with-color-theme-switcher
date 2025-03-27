import React, { act, useEffect, useState } from "react";
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
  const [inputText, setInputText] = useState<string>('')

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

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(inputText);

  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputText(value)

    // Lógica de filtrado dinámica basada en el texto ingresado
    if (value.trim() === "") {
      setFilterCountries([]); // Si el input está vacío, restablece los filtros
    } else {
      const filtered = countries.filter((country) =>
        country.name.common.toLowerCase().includes(value.toLowerCase())
      );
      setFilterCountries(filtered); // Actualiza la lista filtrada
    }

  }

  return (
    <>
      <div className="md:flex md:items-center md:justify-between">
        <InputSerach handleSubmit={HandleSubmit} handleChange={handleChange} inputText={inputText} />
        <FIlterByRegion regions={regions} getRegionName={getRegionName} activeCountries={activeFIlteredCountries} />
      </div>
      <Card countries={filterCountries.length > 0 ? filterCountries : countries} />
    </>
  )

}

export { Home };