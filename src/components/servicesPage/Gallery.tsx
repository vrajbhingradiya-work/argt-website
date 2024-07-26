import Image from "next/image";
import Icon from "@/public/logo/Icon.png";
import React from "react";

const Gallery = ({ Projects, setIsOpen, setSelectedCardProject }: any) => {
  if (Projects.length != 0) {
    return (
      <div
        id="1"
        className=" my-24 flex justify-center items-center w-full   md:px-6"
      >
        {/* Section: Design Block */}
        <section className="mb-32 w-full">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      .zoom:hover img {\n        transform: scale(1.1);\n      }\n    ",
            }}
          />
          <h2 className="mb-12 text-left md:text-center text-3xl font-bold text-blue-600 py-8 lg:py-16">
            Projects we are
            <br /> proud of...
          </h2>
          <div className="flex justify-center items-center lg:w-full w-[95vw]">
            <div className="grid grid-cols-1 w-full  md:grid-cols-2 gap-3 lg:gap-6 lg:grid-cols-3 ">
              {/* card */}
              {Projects?.map((project: any, index: any) => {
                return (
                  <ProjectCards
                    setSelectedCardProject={setSelectedCardProject}
                    setIsOpen={setIsOpen}
                    key={index}
                    project={project}
                  />
                );
              })}
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
    );
  } else {
    return <></>;
  }
};

export default Gallery;

function ProjectCards({ project, setIsOpen, setSelectedCardProject }: any) {
  return (
    <div
      onClick={() => {
        setIsOpen(true);
        setSelectedCardProject(project);
      }}
      className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] h-[30vh] lg:h-[30vh] w-full lg:w-[300px]"
      data-te-ripple-init=""
      data-te-ripple-color="dark"
    >
      <Image
        src={project?.imgLogo ? project?.imgLogo : Icon}
        alt={project.title}
        layout="fill"
        objectFit="contain"
        className="w-full align-middle transition duration-300 hover:ease-linear p-2"
      />

      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.6)]">
        <div className="flex h-full items-end justify-start">
          <h5 className="m-6 text-2xl font-black text-white">
            {/* {project.title} */}
          </h5>
        </div>
      </div>
      <div>
        <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50 bg-[hsla(0,0%,99.2%,0.15)]"></div>
      </div>
    </div>
  );
}
