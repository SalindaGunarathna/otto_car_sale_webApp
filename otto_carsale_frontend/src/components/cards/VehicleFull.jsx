import { Card, IconButton, Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import MainContainer from "../../Layout/MainContainer";

const VehicleFull = ({ CarName, imgVhl }) => {
  const images = [
    "https://majesticjourney.in/wp-content/uploads/2022/05/goa-featured.jpg",
    "https://wallpaperaccess.com/full/267434.jpg",
    "https://www.bestoflanka.com/images/slider/best-things-to-do-in-sri-lanka/beach-destinations-sri-lanka/01.jpg",
    "https://wallpapers.com/images/featured/2ygv7ssy2k0lxlzu.jpg",
  ];

  const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "Manager",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
    },
  ];

  const mainImageRef = useRef();
  const subImageRef = useRef([]);

  return (
    <MainContainer>
      <div className="justify-center items-center flex">
        <div className="p-5 px-5 border rounded-xl drop-shadow-category-shadow mb-10">
          <div className="justify-center items-center flex flex-col">
            <div className="pb-5">
              <Typography variant="h3">Susuki</Typography>
            </div>
            <div className="w-3/4">
              <img
                src={images[0]}
                alt="item"
                className="w-full h-[400px] rounded-md object-cover"
                ref={mainImageRef}
              />
              <div className=" w-full mt-3 grid grid-cols-4 text-center grid-rows-1 gap-3">
                {images.map((e, i) => (
                  <IconButton
                    key={i}
                    sx={{ padding: "0", borderRadius: "2px" }}
                    onClick={() => {
                      subImageRef.current[i].style.border = "2px solid #c82196";
                      mainImageRef.current.src = subImageRef.current[i].src;
                      for (let x = 0; x < subImageRef.current.length; x++) {
                        if (x !== i) {
                          subImageRef.current[x].style.border = "none";
                        }
                      }
                    }}
                  >
                    <img
                      src={e}
                      alt="item"
                      className="w-full"
                      ref={(el) => (subImageRef.current[i] = el)}
                      name={`item image ref : ${i}`}
                    />
                  </IconButton>
                ))}
              </div>
            </div>
            <div className="p-10">
              <Typography variant="lead">hello</Typography>
            </div>
          </div>
          <div className="py-5 pt-2 flex justify-center">
            <Card className="h-full w-3/4">
              <table className="w-full min-w-max table-auto text-left">
                <tbody>
                  {TABLE_ROWS.map(({ name, job }, index) => (
                    <tr key={index} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {job}
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default VehicleFull;
