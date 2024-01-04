import React from 'react'
import '../break.css'
import MainContainer from '../../../../Layout/MainContainer'
import { Typography } from '@material-tailwind/react'
import truckbg from '../../../../assets/images/PageHeaders/truck.svg'
import CarSmallCard from '../../../../components/cards/CarSmallCard'

const trucks = [
  {
    name: "Toyota",
    imgUrl:
      "https://as2.ftcdn.net/v2/jpg/01/01/90/25/1000_F_101902599_2a3XCqOUB2M6IHXwciyTUFpBBpJnCM25.jpg"
  },
  {
    name: "Toyota",
    imgUrl:
      "https://as2.ftcdn.net/v2/jpg/01/01/90/25/1000_F_101902599_2a3XCqOUB2M6IHXwciyTUFpBBpJnCM25.jpg"
  },
  {
    name: "Toyota",
    imgUrl:
      "https://as2.ftcdn.net/v2/jpg/01/01/90/25/1000_F_101902599_2a3XCqOUB2M6IHXwciyTUFpBBpJnCM25.jpg"
  },
  {
    name: "Toyota",
    imgUrl:
      "https://as2.ftcdn.net/v2/jpg/01/01/90/25/1000_F_101902599_2a3XCqOUB2M6IHXwciyTUFpBBpJnCM25.jpg"
  },
  {
    name: "Toyota",
    imgUrl:
      "https://as2.ftcdn.net/v2/jpg/01/01/90/25/1000_F_101902599_2a3XCqOUB2M6IHXwciyTUFpBBpJnCM25.jpg"
  },
  {
    name: "Toyotttttta",
    imgUrl:
      "https://as2.ftcdn.net/v2/jpg/01/01/90/25/1000_F_101902599_2a3XCqOUB2M6IHXwciyTUFpBBpJnCM25.jpg"
  }
]

const TrucksPage = () => {
  return (
    <MainContainer>
        <div className="mb-10">
        <figure className="relative h-96 w-full">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src={truckbg}
            alt="background img"
          />
          <figcaption className="absolute top-5">
            <div className="mx-16">
              <Typography variant="h2" color="white">
                TRUCKS
              </Typography>
            </div>
          </figcaption>
          <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <Typography variant="h5" color="blue-gray">
                FIND YOUR DREAM TRUCK TODAY!
              </Typography>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="p-5 px-5 border rounded-xl drop-shadow-category-shadow mb-10">
      <div className="grid p-5 gap-10 justify-between custom-grid-cols-4 grid-rows-auto">
            {trucks.map(({ name, imgUrl }, index) => (
            <CarSmallCard
              key={index}
              name={name}
              imgUrl={imgUrl}
              id={index}
              section="trucks"
            />
          ))}
          </div>
        </div>
    </MainContainer>
  )
}

export default TrucksPage