import {
  Card,
  CardBody,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import MainContainer from "../../Layout/MainContainer";
import bike from "../../assets/images/caregories/bikes.svg";
import cab from "../../assets/images/caregories/cab.svg";
import car from "../../assets/images/caregories/car.svg";
import truck from "../../assets/images/caregories/truck.svg";
import van from "../../assets/images/caregories/van.svg";
import backim from "../../assets/images/cate.svg";
import Product from "./Product";

const Categorypage = () => {
  return (
    <MainContainer>
      <div className="mb-10">
        <figure className="relative h-96 w-full">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src={backim}
            alt="background img"
          />
          <figcaption className="absolute top-5">
            <div className="mx-16">
              <Typography variant="h2" color="gray">
                OTTO CAR SALE
              </Typography>
            </div>
          </figcaption>
          <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <Typography variant="h5" color="blue-gray">
                FOR ALL YOUR VEHICLE SOLUTIONS
              </Typography>
              <Typography color="gray" className="mt-2 font-normal">
                Your premier destination for quality motor vehicles and
                comprehensive services. With a widespread At Otto Car sale, we
                are your all-in-one solution for fulfilling your vehicle trading
                needs.
              </Typography>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="p-5 px-5 border rounded-xl drop-shadow-category-shadow mb-10">
        <Typography variant="h5" className="-mb-1">
          Vehicle Categories
        </Typography>
        <div className="grid p-5 gap-10 justify-between grid-cols-2 sm:grid-cols-5 grid-rows[auto]">
          <a href="#">
            <div>
              <Card className="mt-2 w-auto">
                <img className="px-3 -mt-2" src={car} alt="car" />
                <CardBody className="pt-0 justify-center items-center flex -mt-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-0"
                  >
                    Cars
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </a>

          <a href="#">
            <div>
              <Card className="mt-2 w-auto">
                <img className="px-3 -mt-2" src={cab} alt="cab" />
                <CardBody className="pt-0 justify-center items-center flex -mt-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-0"
                  >
                    Cabs
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </a>

          <a href="#">
            <div>
              <Card className="mt-2 w-auto">
                <img className="px-3 -mt-2" src={truck} alt="truck" />
                <CardBody className="pt-0 justify-center items-center flex -mt-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-0"
                  >
                    Trucks
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </a>

          <a href="#">
            <div>
              <Card className="mt-2 w-auto">
                <img className="px-3 -mt-2" src={bike} alt="bike" />
                <CardBody className="pt-0 justify-center items-center flex -mt-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-0"
                  >
                    Motorcycles
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </a>

          <a href="#">
            <div>
              <Card className="mt-2 w-auto">
                <img className="px-3 -mt-2" src={van} alt="van" />
                <CardBody className="pt-0 justify-center items-center flex -mt-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-0"
                  >
                    Vans
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </a>
        </div>
      </div>

      <div className="p-5 px-5 border rounded-xl drop-shadow-category-shadow">
        <Typography variant="h5" className="mb-2">
          Search your vehicle
        </Typography>
        <div className="grid  grid-cols-2 sm:grid-cols-3 justify-center">
          <div className="w-56 p-2">
            <Select color="blue" label="Select Version">
              <Option>add</Option>
            </Select>
          </div>
          <div className="w-56 p-2">
            <Select color="blue" label="Select Version">
              <Option>add</Option>
            </Select>
          </div>
          <div className="w-56 p-2">
            <Select color="blue" label="Select Version">
              <Option>addL</Option>
            </Select>
          </div>
          <div className="w-56 p-2">
            <Select color="blue" label="Select Version">
              <Option>add</Option>
            </Select>
          </div>
          <div className="w-56 p-2">
            <Select color="blue" label="Select Version">
              <Option>add</Option>
            </Select>
          </div>
        </div>
      </div>

      <Product title="Our Brands" />

    </MainContainer>
  );
};

export default Categorypage;
