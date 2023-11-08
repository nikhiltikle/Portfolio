import { CgWebsite } from "react-icons/cg";
import { useState } from "react";

const ProjectCard = ({project}) => {
    const [expandedText, setExpandedText] = useState(false);

    return <div
    key={project.id}
    className={`${
      project.id % 2 === 0
        ? "bg-accent shadow-lg"
        : "bg-[#313131] shadow-md"
    } rounded-lg p-3 hover:shadow-primary cursor-pointer duration-300`}
  >
    <div className="mb-4 text-center">
      <img
        className="inline-block text-primary"
        src={project.imgurl}
        alt="project_screenshot"
      />
    </div>
    <h2 className="mb-4 text-2xl font-semibold text-center">
      {project.title}
    </h2>
    <p
      className={` card-text ${
        expandedText ? `expanded-card-text` : ""
      } text-left`}
    >
      {project.description}
    </p>

    <button
      onClick={() => setExpandedText(!expandedText)}
      className="text-[#ff651c]"
    >
      {expandedText ? "Hide" : "Read more"}
    </button>

    <div className="flex justify-center py-6">
      {project.demoLink && (
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white rounded-md py-2 px-6 mt-8 flex items-center"
        >
          {project.icon || <CgWebsite />}
          <span className="ml-2">
            {project.customButton || "Visit Website"}
          </span>
        </a>
      )}
    </div>
  </div>
}

export {ProjectCard}