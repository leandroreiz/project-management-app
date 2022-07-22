// Bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Project } from './Project.model';
import React from 'react';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const updateProjectHandler = () => {
    const prjNameInput = document.getElementById(
      'prj-list__name'
    ) as HTMLInputElement;
    prjNameInput.attributes.removeNamedItem('disabled');
    prjNameInput.attributes.removeNamedItem('readOnly');
    prjNameInput.focus();
  };

  return (
    <Container className="p-5 my-2 bg-light rounded-3">
      <Form>
        <Form.Group className="mb-2">
          {projects.map((project) => (
            <InputGroup className="mb-2" key={project.id}>
              <InputGroup.Text id="inputGroup-sizing-default">
                {project.id.toString().padStart(3, '0')}
              </InputGroup.Text>
              <Form.Control
                aria-label="Project's name"
                disabled
                id="prj-list__name"
                value={project.name}
                readOnly
              ></Form.Control>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={solid('list-check')} />
              </Button>
              <Button
                onClick={updateProjectHandler}
                variant="outline-secondary"
              >
                <FontAwesomeIcon icon={solid('pencil')} />
              </Button>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={solid('eraser')} />
              </Button>
            </InputGroup>
          ))}
        </Form.Group>
      </Form>
    </Container>
  );
};

export default ProjectList;
