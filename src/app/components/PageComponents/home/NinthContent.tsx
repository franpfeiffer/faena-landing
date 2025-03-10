import React from "react";

const NinthContent = () => {
  return (
    <section className="w-full h-[100px] flex items-center justify-center bg-[#3F4448]">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-1/3"></div>
        <div className="w-1/3 flex justify-center">
          <p className="text-center text-white text-sm lg:text-lg ">
            <a href="/legal-disclaimer" >
              LEGAL DISCLAIMER
            </a>
          </p>
        </div>
        <div className="w-1/3"></div>
      </div>
    </section>
  );
};

export default NinthContent;

