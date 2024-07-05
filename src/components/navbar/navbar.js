import {Container,Navbar,Nav,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import tempImage from '../../assests/tempImage.jpg'


const MainNavbar=()=>{
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className='d-flex flex-direction-row'>
                <Navbar.Brand href="#home">hava havai</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end'>
                <Nav>
                    <Nav.Link href="#profile">
                        <img src={tempImage} style={{width:"40px",borderRadius:"20px"}}/>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            
            
            
        </Navbar>
    )
}

export default MainNavbar

