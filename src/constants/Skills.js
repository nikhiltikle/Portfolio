import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub,
} from 'react-icons/fa';
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
  SiVisualstudiocode,
  SiNginx,
  SiLinux,
} from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
import { DiJqueryLogo } from "react-icons/di";
import { MdManageAccounts } from "react-icons/md";


const languages = [
  { title: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
  { title: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
  {
    title: 'JavaScript',
    icon: <SiJavascript className="text-yellow-500 rounded" />,
  },
  { title: 'NodeJS', icon: <FaNodeJs className="text-green-600" /> },
];

const frameworks = [
  { title: 'React', icon: <FaReact className="text-cyan-400" /> },
  { title: 'Bootstrap', icon: <FaBootstrap className="text-indigo-600" /> },
  { title: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
  { title: 'Redux', icon: <SiRedux className="text-purple-600" /> },
  { title: 'Material UI', icon: <img width={40} src="mui.png" alt="mui" /> },
  { title: 'JQuery', icon: <DiJqueryLogo className="text-blue-600" /> },
];

const tools = [
  { title: 'Jira', icon: <SiJira className="text-blue-600" /> },
  { title: 'GitHub', icon: <FaGithub className="text-black" /> },
  { title: 'Git', icon: <SiGit className="text-red-500" /> },
  { title: 'Sonar', icon: <SiSonarcloud className="text-blue-600" /> },
  { title: 'EsLint', icon: <SiEslint className="text-purple-600" /> },
  { title: 'Prettier', icon: <SiPrettier className="text-white" /> },
  { title: 'VS Code', icon: <SiVisualstudiocode className="text-blue-600" /> },
  { title: 'NGINX', icon: <SiNginx className="text-green-600" /> },
  { title: 'Linux', icon: <SiLinux /> },
];

const other = [
  { title: "Rest API's", icon: <AiOutlineApi className="text-blue-500" /> },
  {
    title: 'Unit Testing',
    icon: <SiTestinglibrary className="text-red-400" />,
  },
  { title: 'Credit Risk Management', icon: <MdManageAccounts className="text-red-500"/> },
];

export { languages, frameworks, tools, other };