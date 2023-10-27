import React from "react";
import Lottie from "react-lottie";
import man from "../../../assets/man.json";
import {languages, frameworks, tools, other} from "../../../constants/Skills";

const MySkill = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: man,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-2 sm:pt-24">
      <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
        My <span className="text-primary">Skills</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly my-8">

        <div>
          <h2 className="text-cyan-500 text-xl ml-2 font-semibold">Languages:</h2>
          <div className="flex flex-wrap mb-4">
            {languages?.map((skill) => (
              <div key={skill.title} className="text-center m-2">
                <div
                  className="rounded-lg h-20 w-20 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                >
                  <div className="flex flex-col justify-center items-center space-y-2">
                    {skill?.icon}
                    <p className="text-xs">{skill.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl ml-2 font-semibold">
            Library & Frameworks:
          </h2>
          <div className="flex flex-wrap mb-4">
            {frameworks?.map((skill) => (
              <div key={skill.title} className="text-center m-2">
                <div
                  className="rounded-lg h-20 w-20 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                >
                  <div className="flex flex-col justify-center items-center space-y-2">
                    {skill?.icon}
                    <p className="text-xs">{skill.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl ml-2 font-semibold">
            Tools & Technologies:
          </h2>
          <div className="flex flex-wrap mb-4">
            {tools?.map((skill) => (
              <div key={skill.title} className="text-center m-2">
                <div
                  className="rounded-lg h-20 w-20 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                >
                  <div className="flex flex-col justify-center items-center space-y-2">
                    {skill?.icon}
                    <p className="text-xs">{skill.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl ml-2 font-semibold">
            Other:
          </h2>
          <div className="flex flex-wrap mb-4">
            {other?.map((skill) => (
              <div key={skill.title} className="text-center m-2">
                <div
                  className="rounded-lg h-20 w-20 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                >
                  <div className="flex flex-col justify-center items-center space-y-2">
                    {skill?.icon}
                    <p className="text-xs">{skill.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Lottie options={defaultOptions} height={400} width={320} />
        </div>
      </div>
    </div>
  );
};

export default MySkill;
