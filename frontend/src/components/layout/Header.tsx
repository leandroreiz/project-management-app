// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Header = () => (
  <Navbar bg="" variant="light">
    <Container>
      <Navbar.Brand href="/">Project Management</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">
          <FontAwesomeIcon icon={solid('power-off')} size="lg" />
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
