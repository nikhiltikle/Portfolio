import React, { useState } from 'react';
import { CgWebsite } from 'react-icons/cg';

function ProjectCard(props) {
  const [expandedText, setExpandedText] = useState(false);

  return (
    <div className="bg-[#313131]   project-card-view">
      <img src={props.imgPath} alt="card-img" className="w-full" />

      <div className="p-4">
        <h2 className="mb-3 text-2xl text-[#ff651c] font-bold text-center">
          {props.title}
        </h2>

        <p
          className={` card-text ${
            expandedText ? 'expanded-card-text' : ''
          } text-left px-4 bg-[#212121]`}
        >
          {props.description}
        </p>

        <button
          onClick={() => setExpandedText(!expandedText)}
          className="text-[#ff651c] px-5"
        >
          {expandedText ? 'Hide' : 'Read more'}
        </button>

        <div className="flex justify-center py-6">
          {props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white rounded py-2 px-6 flex items-center"
            >
              {props.icon || <CgWebsite />}
              <span className="ml-2">{props.customButton || 'Website'}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
