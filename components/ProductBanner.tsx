import React from "react";

const ProductBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 md:my-24 mx-12">
      <div className="flex flex-col p-10 items-center  justify-center mx-14 border-b-8 border-black">
        <h2 className="text-xl md:text-3xl lg:text-7xl font-bold m-2 ">FUELED to impact.</h2>
      </div>
      <div className="flex flex-col p-8 items-center justify-center">
        <p className="text-sm md:text-md lg:text-lg font-bold text-red-800 tracking-tighter m-2">
          Arsenal, Inc. is a team comprised of the Adidas, brand
          driven by a shared purpose to leave an enduring impact
        </p>
        <p className="text-sm md:text-md lg:text-lg font-bold text-gray-800 tracking-tighter m-2">
          We’ve spent 50 years shifting big ideas into scaled, sustainable
          platforms that have changed our products and manufacturing process,
          fueled our design ethos, and championed our athlete community
        </p>
      </div>
    </div>
  );
};

export default ProductBanner;