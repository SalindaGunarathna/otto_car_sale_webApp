import React from "react";
import MainContainer from "../../../../Layout/MainContainer";
import { Typography } from "@material-tailwind/react";
import carbg from "../../../../assets/images/PageHeaders/car.svg";
import CarSmallCard from "../../../../components/cards/CarSmallCard";

const CarPage = () => {
  return (
    <MainContainer>
      <div className="mb-10">
        <figure className="relative h-96 w-full">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src={carbg}
            alt="background img"
          />
          <figcaption className="absolute top-5">
            <div className="mx-16">
              <Typography variant="h2" color="white">
                CARS
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

      <div className="p-5 px-5 border rounded-xl drop-shadow-category-shadow mb-10">
        <div className="grid p-5 gap-10 justify-between grid-cols-2 sm:grid-cols-4 grid-rows[auto]">
          <CarSmallCard name="Toyota" imgUrl="https://wallpaperaccess.com/full/267434.jpg" />
          <CarSmallCard name="Toyota" imgUrl="https://wallpaperaccess.com/full/267434.jpg" />
          <CarSmallCard name="Toyota" imgUrl="https://wallpaperaccess.com/full/267434.jpg" />
          <CarSmallCard name="Toyota" imgUrl="https://wallpaperaccess.com/full/267434.jpg" />
          <CarSmallCard name="Toyota" imgUrl="https://wallpaperaccess.com/full/267434.jpg" />
        </div>
      </div>
    </MainContainer>
  );
};

export default CarPage;
