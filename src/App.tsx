import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// temporary
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import InputGroup from 'react-bootstrap/esm/InputGroup';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const App: React.FC = () => {
  return (
    <Container className="px-5">
      {/* Navigation bar */}
      <Navbar bg="" variant="light">
        <Container>
          <Navbar.Brand href="#home">Project Management</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#About">
              <FontAwesomeIcon icon={solid('circle-question')} size="lg" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Form to add new projects */}
      <Container className="p-5 my-4 bg-light rounded-3">
        <Form>
          <Form.Group className="mb-3" controlId="prj-id">
            <Form.Label>Project Id</Form.Label>
            <Form.Control disabled placeholder="001" readOnly type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="prj-name">
            <Form.Label>Project Name</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control />
              <Button id="btn-add-prj" type="submit" variant="outline-success">
                Add Project
              </Button>
            </InputGroup>
          </Form.Group>
        </Form>
      </Container>

      {/* Projects list */}
      <Container className="p-5 my-2 bg-light rounded-3">
        {/* PrjId, PrjName / Buttons to Add Task, Edit Project, Delete Project */}
        <Form>
          <Form.Group className="mb-2">
            <InputGroup className="mb-2">
              <InputGroup.Text id="inputGroup-sizing-default">
                001
              </InputGroup.Text>
              <Form.Control
                aria-label="Project's name"
                disabled
                placeholder="Learn React + TypeScript"
                readOnly
              />
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={solid('list-check')} />
              </Button>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={solid('pencil')} />
              </Button>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={solid('eraser')} />
              </Button>
            </InputGroup>
          </Form.Group>
        </Form>
      </Container>
    </Container>
  );
};

export default App;
