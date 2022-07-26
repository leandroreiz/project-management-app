// ---------------------------------
// Imports
// ---------------------------------
import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { Project } from '../../interfaces/Project.interface';

// ---------------------------------
// List all projects in database
// ---------------------------------
const ListProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/v1/projects');
      const data = await response.json();

      if (response.ok) setProjects(data.data);
    };

    fetchProjects();
  }, []);

  return (
    <Container className="p-5 my-4 bg-light rounded-3">
      <Form>
        <Form.Group className="mb-2">
          {projects.map((project) => (
            <InputGroup className="mb-2" key={project._id}>
              <InputGroup.Text id="inputGroup-sizing-default">
                {project._id.toString().padStart(3, '0')}
              </InputGroup.Text>
              <Form.Control
                aria-label="Project's name"
                id="prj-list__name"
                value={project.projectName}
                readOnly
              ></Form.Control>
              <Button
                data-id={project._id}
                onClick={() => console.log('Delte register')}
                variant="outline-danger"
              >
                <FontAwesomeIcon icon={solid('xmark')} />
              </Button>
            </InputGroup>
          ))}
        </Form.Group>
      </Form>
    </Container>
  );
};

export default ListProjects;
