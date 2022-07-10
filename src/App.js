import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './index.css';

function App() {

  let Component
  // eslint-disable-next-line
  switch (window.location.pathname) {
    case "/":
      Component = App;
      break;
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
          {/* <About></About>
          <Project></Project> */}
      </main>
    </div>
  );
}

export default App;
