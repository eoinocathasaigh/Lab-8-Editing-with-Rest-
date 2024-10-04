//Importing the container from bootstrap
import Container from 'react-bootstrap/Container';
//Importing navigation from bootstrap
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

//This navbar is an example of client side routing
//Essentially changes the url to different pages
//In order to enable routing we need to install the react router

//Creating the navbar component to be used later in our code
//It will return a navbar element to whoever imports and uses it
//Furthermore we set the background to a bright colour and we change the theme to dark
const NavigationBar = () => {
    return (
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
              </Nav>
            </Container>
        </Navbar>
    );
  };
  
  //Then marking the code to be exported
  export default NavigationBar;