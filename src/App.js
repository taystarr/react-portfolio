import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import './index.css';

// const faders = document.querySelectorAll('.fade-in');

function App() {

  // const appearOptions = {
  //   threshold: 1
  // };

  // const appearOnScroll = new IntersectionObserver (function(entries, appearOnScroll) {
  //   entries.forEach(entry => {
  //     if (!entry.isIntersecting) {
  //       return;
  //     } else {
  //       entry.target.classList.add('appear');
  //       appearOnScroll.unobserve(entry.target);
  //     }
  //   })
  // },
  // appearOptions);

  // faders.forEach(fader => {
  //   appearOnScroll.observe(fader);
  // });

  return (
    
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
