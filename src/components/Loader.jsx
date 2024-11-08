import { Html } from "@react-three/drei";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 w-full h-full justify-center items-center ">
        <div className="w-[10vw] h-[10vw] rounded-full">
          {" "}
          <ThreeDots
            visible={true}
            height="75"
            width="75"
            color="gray"
            radius="8"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </div>
    </Html>
  );
};

export default Loader;
