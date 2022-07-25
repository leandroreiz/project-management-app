// Bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Project } from '../../models/Project.model';
import React from 'react';

// Props interface
interface ProjectListProps {
  projects: Project[];
  onDeleteProject: (id: number) => void;
}

// Functional component
const ListProjects: React.FC<ProjectListProps> = ({
  projects,
  onDeleteProject,
}) => {
  // Delete project handler
  const deleteProjectHandler = (
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    const prjId = event.currentTarget.getAttribute('data-id');

    if (prjId) onDeleteProject(+prjId);
  };

  // Render
  return (
    <Container className="p-5 my-4 bg-light rounded-3">
      <Form>
        <Form.Group className="mb-2">
          {projects.map((project) => (
            <InputGroup className="mb-2" key={project.id}>
              <InputGroup.Text id="inputGroup-sizing-default">
                {project.id.toString().padStart(3, '0')}
              </InputGroup.Text>
              <Form.Control
                aria-label="Project's name"
                id="prj-list__name"
                value={project.name}
                readOnly
              ></Form.Control>
              <Button
                data-id={project.id}
                onClick={deleteProjectHandler}
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
