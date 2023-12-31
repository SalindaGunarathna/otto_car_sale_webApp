import React from 'react'
import '../break.css'
import MainContainer from '../../../../Layout/MainContainer'
import { Typography } from '@material-tailwind/react'
import bikebg from "../../../../assets/images/PageHeaders/bike.svg"
import CarSmallCard from '../../../../components/cards/CarSmallCard'

const bikes = [
  {
    name: "Yamaha",
    imgUrl:
      "https://freerangestock.com/sample/38723/biking-into-the-sunset.jpg"
  },
  {
    name: "Ducati",
    imgUrl:
      "https://freerangestock.com/sample/38723/biking-into-the-sunset.jpg"
  },
  {
    name: "Honda",
    imgUrl:
      "https://freerangestock.com/sample/38723/biking-into-the-sunset.jpg"
  },
  {
    name: "Suzuki",
    imgUrl:
      "https://freerangestock.com/sample/38723/biking-into-the-sunset.jpg"
  },
  {
    name: "Mitshubishi",
    imgUrl:
      "https://freerangestock.com/sample/38723/biking-into-the-sunset.jpg"
  },
  {
    name: "Mercedes Benz",
    imgUrl:
      "https://freerangestock.com/sample/38723/biking-into-the-sunset.jpg"
  }
]
const BikePage = () => {
  return (
    <MainContainer>
        <div className="mb-10">
        <figure className="relative h-96 w-full">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src={bikebg}
            alt="background img"
          />
          <figcaption className="absolute top-5">
            <div className="mx-16">
              <Typography variant="h2" color="amber">
                MOTORCYCLES
              </Typography>
            </div>
          </figcaption>
          <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <Typography variant="h5" color="blue-gray">
                FIND YOUR DREAM BIKE TODAY!
              </Typography>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="p-5 px-5 border rounded-xl drop-shadow-category-shadow mb-10">
      <div className="grid p-5 gap-10 justify-between custom-grid-cols-4 grid-rows-auto">
          {bikes.map(({ name, imgUrl }, index) => (
            <CarSmallCard
              key={index}
              name={name}
              imgUrl={imgUrl}
              id={index}
              section="motorcycles"
            />
          ))}
        </div>
      </div>
    </MainContainer>
  )
}

export default BikePage