import { Card, Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import MainContainer from "../../Layout/MainContainer";
import CarSmallCard from "./CarSmallCard";

const VehicleFull = () => {
  const images = [
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682125729312-78f16e6e6f38?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfDB8MHx8fDA%3D",
  ];

  const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "Manager",
    },
    {
      name: "John Michael",
      job: "Manager",
    },
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
  ];

  const cabs = [
    {
      name: "Toyotaqqqq",
      imgUrl:
        "https://img.freepik.com/free-photo/close-up-shot-taxi-sign-warm-colours-sunset-with-bokeh-lights-background_181624-54985.jpg",
    },
    {
      name: "Harrier",
      imgUrl:
        "https://img.freepik.com/free-photo/close-up-shot-taxi-sign-warm-colours-sunset-with-bokeh-lights-background_181624-54985.jpg",
    },
    {
      name: "Subaru",
      imgUrl:
        "https://img.freepik.com/free-photo/close-up-shot-taxi-sign-warm-colours-sunset-with-bokeh-lights-background_181624-54985.jpg",
    },
  ];

  // console.log(thi.props.location.CarNam)

  const mainImageRef = useRef();
  const subImageRef = useRef([]);
  const location = useLocation();

  console.log(location.state.CarName, location.state.imgUrl);
  return (
    <MainContainer>
      <div className="justify-center items-center flex">
        <div className="p-5 px-5 border rounded-xl drop-shadow-category-shadow mb-10">
          <div className="justify-center items-center flex flex-col">
            <div className="pb-5">
              <Typography variant="h3">{location.state.CarName}</Typography>
            </div>
            <div className="w-3/4">
              <img
                src={images[0]}
                alt="item"
                className="w-auto lg:h-96 h- rounded-md object-cover"
                ref={mainImageRef}
              />
              <div className="flex justify-items content-around">
                <div className="mt-3 grid grid-cols-4 grid-rows-1 lg:gap-x-10 sm:gap-x-3 xs:gap-x-2 gap-x-2 ">
                  {images.map((e, i) => (
                    <button
                      key={i}
                      sx={{
                        padding: "0",
                        borderRadius: "2px",
                        margin: "0 2px",
                        width: "20px",
                        height: "20px",
                      }}
                      onClick={() => {
                        subImageRef.current[i].style.border =
                          "2px solid #c82196";
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
                        className="rounded-md object-cover w-20 h-14 "
                        ref={(el) => (subImageRef.current[i] = el)}
                        name={`item image ref : ${i}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-10 pb-1">
              <Typography variant="lead">hello</Typography>
            </div>
          </div>

          {/* details of the vehicle */}
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


      {/* suggetions */}
      {/* <div className="p-5 px-5 border rounded-xl drop-shadow-category-shadow mb-10">
      <Typography variant="h4"> You may also like</Typography>
      <div className="">
      <div className="grid p-5 gap-10 justify-between custom-grid-cols-4 grid-rows-auto">
          {cabs.map(({ name, imgUrl }, index) => (
            <CarSmallCard
              key={index}
              name={name}
              imgUrl={imgUrl}
              id={index}
              section="cabs"
            />
          ))}
        </div>
      </div>
      </div> */}

    </MainContainer>
  );
};

export default VehicleFull;
