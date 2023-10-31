import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';

function ProjectCard(props) {
  const [expandedText, setExpandedText] = useState(false);

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title
          className="mb-3 text-2xl text-[#ff651c] font-bold"
          style={{ textAlign: 'center' }}
        >
          {props.title}
        </Card.Title>

        <Card.Text
          style={{ textAlign: 'left', padding: '0 20px' }}
          className={expandedText ? 'expanded-card-text' : ''}
        >
          {props.description}
        </Card.Text>

        <button
          onClick={() => setExpandedText(!expandedText)}
          className="text-[#ff651c] px-5"
        >
          {expandedText ? 'Hide' : 'Read more'}
        </button>

        <div className="flex justify-center	py-6">
          {!!props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              {props.icon || <CgWebsite />}&nbsp;
              {props.customButton || 'Website'}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
