// Bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import React, { useRef } from 'react';

interface NewProjectProps {
  onAddProject: (prjName: string) => void;
  prjId: number;
}

const NewProject: React.FC<NewProjectProps> = (props) => {
  // Gets user input on project's name
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Submit handler
  const ProjectSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const prjName = nameInputRef.current?.value as string;
    props.onAddProject(prjName);
  };

  return (
    <Container className="p-5 my-4 bg-light rounded-3">
      <Form onSubmit={ProjectSubmitHandler}>
        <Form.Group className="mb-3" controlId="prj-id">
          <Form.Label>Project Id</Form.Label>
          <Form.Control
            disabled
            placeholder={props.prjId.toString().padStart(3, '0')}
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

export default NewProject;
