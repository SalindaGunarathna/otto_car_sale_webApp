import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import MainContainer from "../../Layout/MainContainer";
import carkey from "../../assets/images/car_key.svg";
import rent from "../../assets/images/rent.svg";
import sale from "../../assets/images/sale.svg";
import FinanceCal from "./FinanceCal";

const Home = () => {
  return (
    <MainContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto] gap-5 pl-20 pr-20 pb-10 sm:px-0">
        <div className=" justify-center flex">
          <Card className="w-96">
            <CardHeader shadow={false} floated={false} className="h-96">
              <img
                src={sale}
                alt="view sale"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-center">
                <Typography color="blue-gray" className="font-bold">
                  Need a car!
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                We have a wide selection of vehicles available for sale. Find
                your dream car today!
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="/category">
                <Button
                  ripple={false}
                  fullWidth={true}
                  className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                  View sale
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className=" justify-center flex">
          <Card className="w-96">
            <CardHeader shadow={false} floated={false} className="h-96">
              <img
                src={rent}
                alt="rent a car"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-center">
                <Typography color="blue-gray" className="font-bold">
                  Rent a vehicle
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal opacity-75"
                >
                  Are you looking to rent a car? So, welcome. Rent a car for
                  your next adventure!
                </Typography>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Rent car
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mb-10">
        <figure className="relative h-96 w-full">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src={carkey}
            alt="background img"
          />
          <figcaption className="absolute top-5">
            <div className="mx-16">
              <Typography variant="h2" color="white">
                PLANNING ON SELLING YOUR VEHICLE ?
              </Typography>
            </div>
          </figcaption>
          <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <Typography variant="h5" color="blue-gray">
                Reach us today!
              </Typography>
              <Typography color="gray" className="mt-2 mb-2 font-normal">
                We are always looking to buy quality used vehicles. We offer
                free valuations and instant cash payments.
              </Typography>
              <Button>
                <a href="/contact">Contact us</a>
              </Button>
            </div>
          </figcaption>
        </figure>
      </div>

      <FinanceCal />
      
    </MainContainer>
  );
};

export default Home;
