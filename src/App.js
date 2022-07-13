import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './index.css';
import Footer from './components/Footer';

function App() {


  // SWITCH CASE
  const [page, setPage] = useState("about");

    const renderPage = () => {
      switch (page) {
        case "about":
          return <About />;
        case "portfolio":
          return <Project />;
        case "resume":
            return <Resume />;
        case "contact":
          return <Contact />;  
        default:
          return <About />;
      }
  };

  return (
    
    <div>
      <Nav updatePage={setPage}>
      </Nav>
      <main>
        {renderPage()}
      </main>
        <Footer />
    </div>
  );
}


export default App;
