import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import wtsapp from "../../assets/whatsapp-whats-app-svgrepo-com.svg";
import call from "../../assets/telephone-svgrepo-com.svg";
import mzg from "../../assets/mail-svgrepo-com.svg";
import { Link } from "react-router-dom";

const CarSmallCard = ({ section, name, imgUrl, id }) => {

  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} className="border border-amber-100">
        <img src={imgUrl} alt={name + id} />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between -mt-2">
          <Typography variant="h5" color="blue-gray" className="font-semibold">
            {name}
          </Typography>
        </div>
        <div className="group mt-4 flex items-center justify-center gap-3">
          <Tooltip
            content="Contact us"
            placement="left"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: -25 },
            }}
          >
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-0 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={wtsapp} alt="wtsapp" className="w-8" />
            </span>
          </Tooltip>
          <Tooltip
            content="Contact us"
            placement="bottom"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: -25 },
            }}
          >
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-0 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={call} alt="call" className="w-8" />
            </span>
          </Tooltip>
          <Tooltip
            content="Contact us"
            placement="right"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: -25 },
            }}
          >
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-0 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={mzg} alt="email" className="w-8" />
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="flex justify-center items-center">
          <Link to={`/category/${section}/${id}`}>
          <Button size="md">More Details</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarSmallCard;
