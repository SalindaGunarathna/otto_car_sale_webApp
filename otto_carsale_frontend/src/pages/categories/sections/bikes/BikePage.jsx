import React from 'react'
import MainContainer from '../../../../Layout/MainContainer'
import { Typography } from '@material-tailwind/react'
import bikebg from "../../../../assets/images/PageHeaders/bike.svg"

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
              <Typography variant="h2" color="gray">
                MOTORCYCLES
              </Typography>
            </div>
          </figcaption>
          <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <Typography variant="h5" color="blue-gray">
                FIND YOUR DREAM CAR TODAY!
              </Typography>
            </div>
          </figcaption>
        </figure>
      </div>
    </MainContainer>
  )
}

export default BikePage