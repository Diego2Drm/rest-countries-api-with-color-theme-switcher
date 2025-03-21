import { Card } from "../Card"
import { FIlterByRegion } from "../FilterByRegion"
import { InputSerach } from "..//InputSearch"

const Home = () => {
  return (
    <>
      <InputSerach />
      <FIlterByRegion />
      <Card />
    </>
  )

}

export { Home };