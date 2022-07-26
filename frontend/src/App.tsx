import { useState } from 'react';

import Container from 'react-bootstrap/Container';

import Header from './components/layout/Header';
import CreateProject from './components/project/CreateProject';
import ListProjects from './components/project/ListProjects';
import { Project } from './interfaces/Project.interface';

const App: React.FC = () => {
  return (
    <Container className="px-2">
      <Header />
      <CreateProject />
      <ListProjects />
    </Container>
  );
};

export default App;
