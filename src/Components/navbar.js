import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SortButton from './SortButton';
import ShuffleButton from './ShuffleButton';
import Button from 'react-bootstrap/Button';

function sortNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Sorting Algorithm Visualizer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Algorithm" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Selection Sort</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <ShuffleButton/>
            < SortButton/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default sortNav;