import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <div className="bg-center bg-cover  bg-[url('../public/emirates-stadium-arsenal.webp')]">
      <div className="p-5 md:p-10 lg:p-20 bg-red-600 bg-opacity-40">
        <div className="text-center text-white">
          <h2 className="mt-6 md:mt-12 text-3xl md:text-5xl lg:text-5xl font-bold">
            Overline
          </h2>
          <h1 className="text-lg md:text-7xl lg:text-7xl font-bold underline">
            Welcome to the Arsenal Product Store
          </h1>
          <p className="mt-3 text-xs md:text-md lg:text-2xl">
            Lorem Ipsum sans sin con ipsum. Lorem Ipsum sans sin con ipsum. Lorem Ipsum
            sans sin con ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
