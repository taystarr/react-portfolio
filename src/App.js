import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './index.css';
import Footer from './components/Footer';

function App() {

  let Component
  // eslint-disable-next-line
  switch (window.location.pathname) {
    case "/react-portfolio":
      Component = About;
      break;
      // eslint-disable-next-line
    case "/about":
      Component = About;
      break;
    case "/portfolio":
      Component = Project;
      break;
    case "/contact":
      Component = Contact;
      break;
    case "/resume":
      Component = Resume;
      break;
  }
  return (
    
    <div>
      <Nav>
      </Nav>
      <Component></Component>
      <main>
        <h1>It would be nice if this worked</h1>
          {/* <About></About>
          <Project></Project> */}
      </main>
        <Footer />
    </div>
  );
}

export default App;
