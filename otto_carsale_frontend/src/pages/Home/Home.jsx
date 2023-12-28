import React from "react";
import MainContainer from "../../Layout/MainContainer";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import rent from "../../assets/images/rent.svg";
import sale from "../../assets/images/sale.svg";

const Home = () => {
  return (
    <MainContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto] gap-5 pl-20 pr-20 pb-10">
        <div className=" justify-center flex">
          <Card className="w-96">
            <CardHeader shadow={false} floated={false} className="h-96">
              <img
                src={sale}
                alt="view sale"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-center">
                <Typography color="blue-gray" className="font-medium">
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
                <Typography color="blue-gray" className="font-medium">
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
    </MainContainer>
  );
};

export default Home;
