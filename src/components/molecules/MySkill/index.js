import React from "react";
import Lottie from "react-lottie";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiSonarcloud,
  SiGit,
  SiJira,
  SiRedux,
  SiTestinglibrary,
  SiEslint,
  SiPrettier,
  SiVisualstudiocode
} from "react-icons/si";
import {AiOutlineApi} from "react-icons/ai";
import man from "../../../assets/man.json";

const MySkill = () => {
  const languages = [
    { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 rounded" />,
    },
    { title: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
  ];
  const frameworks = [
    { title: "React", icon: <FaReact className="text-cyan-400" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
    { title: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { title: "Redux", icon: <SiRedux classname="text-purple-600"/> },
    { title: "Material UI", icon: <img width={40} src="mui.png" alt="mui" /> },
  ];
  const tools = [
    { title: "Jira", icon: <SiJira className="text-blue-600" /> },
    { title: "GitHub", icon: <FaGithub className="text-black" /> },
    { title: "Git", icon: <SiGit className="text-red-500" /> },
    {title: "Sonar", icon: <SiSonarcloud className="text-blue-600" />},
    {title: "EsLint", icon: <SiEslint className="text-purple-600" />},
    {title: "Prettier", icon: <SiPrettier className="text-white" />},
    {title: "VS Code", icon: <SiVisualstudiocode className="text-blue-600" />},
  ];
  const other = [
    { title: "Rest API's", icon: <AiOutlineApi className="text-blue-500" /> },
    { title: "Unit Testing", icon: <SiTestinglibrary className="text-red-400" /> },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: man,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
        My <span className="text-primary">Skills</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly my-8">

        <div>
          <h2 className="text-cyan-500 text-xl font-semibold">Languages:</h2>
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
          <h2 className="text-cyan-500 text-xl font-semibold">
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
          <h2 className="text-cyan-500 text-xl font-semibold">
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
          <h2 className="text-cyan-500 text-xl font-semibold">
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
