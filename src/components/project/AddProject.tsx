import React, { useRef } from 'react';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { errorHandler } from '../utils/errorHandler';

// Props interface
interface CreateProjectProps {
  onAddProject: (prjName: string) => void;
  prjId: number;
}

const AddProject: React.FC<CreateProjectProps> = ({ onAddProject, prjId }) => {
  // Hooks
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Add project
  const ProjectSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const enteredPrjName = nameInputRef.current?.value as string;

      if (!enteredPrjName) throw new Error('You must inform a project name!');
      onAddProject(enteredPrjName);
    } catch (err) {
      errorHandler(err);
    }
  };

  return (
    <Container className="p-5 my-4 bg-light rounded-3">
      <Form onSubmit={ProjectSubmitHandler}>
        <Form.Group className="mb-3" controlId="prj-id">
          <Form.Label>Project Id</Form.Label>
          <Form.Control
            disabled
            placeholder={prjId.toString().padStart(3, '0')}
            readOnly
            type="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="prj-name">
          <Form.Label>Project Name</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control ref={nameInputRef} />
            <Button id="btn-add-prj" type="submit" variant="outline-success">
              Add Project
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AddProject;
