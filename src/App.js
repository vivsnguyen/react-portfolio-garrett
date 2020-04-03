import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          title: "Vivi Nguyen",
          headerLinks: [
              { title: "Home", path: "/"},
              { title: "About", path: "/about"},
              { title: "Contact", path: "/contact"}
          ],
          home: {
              title: 'Be Relentless',
              subTitle: 'Projects that make a difference',
              text: 'Check out my projects below'
          },
          about: {
              title: 'About Me',
          },
          contact: {
              title: "Let's talk",
          }
      }
  }

  render() {
    return (
        <Router>
            <Container className="p-0" fluid={true}>
                <NavBar className="border-bottom" bg="transparent" expand="lg">
                    <NavBar.Brand>Vivi Nguyen</NavBar.Brand>
                    <NavBar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                    <NavBar.Collapse id="navbar-toggle">
                        <Nav className="ml-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>

                        </Nav>
                    </NavBar.Collapse>
                </NavBar>

                <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
                <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
                

                <Footer />
            </Container>

        </Router>
    );
  }

}

export default App;
