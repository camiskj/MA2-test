import './sass/styles.scss';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Contact from "./components/contact/Contact";
import Holidays from "./components/holidays/Holidays";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink to="/" exact>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className="nav-link">
            Home
            </NavLink>
            <NavLink to="/contact" className="nav-link">
            Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/" exact>
            <Holidays />
          </Route>
          <Route path="/contact" component={Contact} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
