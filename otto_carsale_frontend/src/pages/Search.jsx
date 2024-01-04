import { Button, Option, Select, Typography } from "@material-tailwind/react";
import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center">
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 5px",
        }}
        className="p-5 px-5 border rounded-xl mb-10 lg:w-3/4"
      >
        <Typography variant="h5" className="mb-2">
          Search your vehicle
        </Typography>
        <div className="grid grid-cols-1 md:grid-col-1 sm:grid-cols-2 lg:px-36 mt-2 justify-around items-center">
          <div className="w-full px-5 p-2">
            <Select color="blue" label="Select Version">
              <Option>add1</Option>
              <Option>add2</Option>
              <Option>add3</Option>
            </Select>
          </div>
          <div className="w-full px-5 p-2">
            <Select color="blue" label="Select Version">
              <Option>add</Option>
            </Select>
          </div>
          <div className="w-full px-5 p-2">
            <Select color="blue" label="Select Version">
              <Option>addL</Option>
            </Select>
          </div>
          <div className="w-full px-5 p-2">
            <Select color="blue" label="Select Version">
              <Option>add</Option>
            </Select>
          </div>
          <div className="w-full px-5 p-2">
            <Select color="blue" label="Select Version">
              <Option>add</Option>
            </Select>
          </div>
          <div className="flex justify-center items-center">
            <Button size="sm" color="blue">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
