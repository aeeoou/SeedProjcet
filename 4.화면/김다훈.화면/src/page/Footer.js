import {Shop, PersonCircle, HouseFill} from 'react-bootstrap-icons';
import {Navbar, Container} from 'react-bootstrap'

const Footer = () => {
    let sessionStorage = window.sessionStorage;

    return (
        <Navbar id='footer' className="NavbarFooter row text-center" sticky='bottom'>
            <Container>
                <Navbar.Brand href="/restaurantList" id='footerIconShop'><Shop/></Navbar.Brand>
                {sessionStorage.getItem("loginId") ? 
                    (<Navbar.Brand href="/userUpdate"><PersonCircle id='footerIconPersonCircle'/></Navbar.Brand>):
                    (<Navbar.Brand href="/userLogin"><PersonCircle id='footerIconPersonCircle'/></Navbar.Brand>
                )}
                
                <Navbar.Brand href="/"><HouseFill id='footerIconHouseFill'/></Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer