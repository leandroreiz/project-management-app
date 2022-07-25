import React, { useRef, useState } from 'react';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ErrorAlert from '../utils/ErrorAlert';

// Props interface
interface CreateProjectProps {
  onAddProject: (prjName: string) => void;
}

// Functional component
const CreateProject: React.FC<CreateProjectProps> = ({ onAddProject }) => {
  const [message, setMessage] = useState<string>('');
  const [errorState, setErrorState] = useState<boolean>(false);
  let nameInputRef = useRef<HTMLInputElement>(null);

  const ProjectSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Get project's name entered by user
      const enteredPrjName = nameInputRef.current?.value as string;

      // Validate project's name
      if (!enteredPrjName) throw new Error('You must inform a project name!');
      onAddProject(enteredPrjName);

      // Clear input
      nameInputRef.current!.value = '';
    } catch (err) {
      setErrorState(true);

      let errMessage;
      if (err instanceof Error) errMessage = err.message;
      else errMessage = String(err);

      setMessage(errMessage);
      setTimeout(() => {
        setErrorState(false);
      }, 5000);
    }
  };

  // Render
  return (
    <Container className="p-5 my-4 bg-light rounded-3">
      {errorState ? <ErrorAlert message={message} /> : ''}
      <Form onSubmit={ProjectSubmitHandler}>
        <Form.Group className="mb-3" controlId="prj-name">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter project's name here..."
              ref={nameInputRef}
            />
            <Button id="btn-add-prj" type="submit" variant="outline-success">
              Add Project
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default CreateProject;
