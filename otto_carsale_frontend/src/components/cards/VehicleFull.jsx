import React from "react";
import MainContainer from "../../Layout/MainContainer";
import { Card, Typography } from "@material-tailwind/react";

const VehicleFull = ({CarName , imgVhl}) => {
  
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

  return (
    <MainContainer>
      <div className="justify-center items-center flex">
        <div className="p-5 px-5 border rounded-xl drop-shadow-category-shadow mb-10">
          <div className="justify-center items-center flex flex-col">
            <div className="pb-5">
              <Typography variant="h3">{CarName}</Typography>
            </div>
            <div className="w-3/4">
              <img
                className="w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                src={imgVhl}
                alt={CarName}
              />
            </div>
            <div className="p-10">
              <Typography variant="lead">
               hello
              </Typography>
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
