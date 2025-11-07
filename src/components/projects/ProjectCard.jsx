import React from "react";

function ProjectCard({ img1, img2 }) {
  console.log(img1, img2);

  return (
    <>
      <div className="relative group h-full w-1/2 cursor-pointer hover:rounded-[50px] overflow-hidden transition-all">
        <img className="h-full w-full object-cover" src={img1} alt="" />

        <div className="opacity-0 group-hover:opacity-100 transition-all absolute top-0 h-full w-full bg-black/40 ">
          <div className="h-full w-full flex items-center justify-center">
            <h2 className="font-[font1] text-4xl uppercase text-white border-2 px-10 pt-5 py-4 rounded-full">
              View the Project
            </h2>
          </div>
        </div>
      </div>

      <div className="relative group h-full w-1/2 cursor-pointer hover:rounded-[50px] overflow-hidden transition-all">
        <img className="h-full w-full object-cover" src={img2} alt="" />

        <div className="opacity-0 group-hover:opacity-100 transition-all absolute top-0 h-full w-full bg-black/40 ">
          <div className="h-full w-full flex items-center justify-center">
            <h2 className="font-[font1] text-4xl uppercase text-white border-2 px-10 pt-5 py-4 rounded-full">
              View the Project
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
