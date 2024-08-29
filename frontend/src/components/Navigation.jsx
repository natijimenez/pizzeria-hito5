/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation = ({ token }) => {

  const total = 25000

  return (
    <>
      <Navbar expand="lg" className="navigation-bar sticky-top" bg="dark" data-bs-theme="dark" >
        <Container fluid>
          <Navbar.Brand href="#">Pizzería Mamma Mía</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/" className='nav-btn'>🍕 Home </Link>
              {token ? (
                <>
                  <Link to="/profile" className='nav-btn'>🔓 Profile</Link>
                  <Link to="/logout" className='nav-btn'>🔓 Logout</Link>
                </>
              ) : (
                <>
                  <Link to="/login" className='nav-btn'>🔐 Login</Link>
                  <Link to="/register" className='nav-btn'>🔐 Register</Link>
                </>
              )}
            </Nav>
            <Form className="d-flex">
              <Link to="/cart" className='nav-btn-total'>🛒 Total: ${total.toLocaleString()}</Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation