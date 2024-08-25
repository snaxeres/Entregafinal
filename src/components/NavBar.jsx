import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { CartWidget } from "./CartWidget";


export const NavBar = () =>
(<>

    <Navbar className='nv-bg'>
        <Container>
            <Navbar.Brand as={NavLink} to="/">Growshop 4:20</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/category/Autofloreciente">Autoflorecientes</Nav.Link>
                <Nav.Link as={NavLink} to="/category/Fotoperiodica">Fotoperiodicas</Nav.Link>
                <Nav.Link as={NavLink} to="/category/Blisterx12">Blister x12</Nav.Link>
            </Nav>
                <CartWidget />
        </Container>
    </Navbar>
    <hr />


</>
)