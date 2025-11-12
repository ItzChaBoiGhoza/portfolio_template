import React from "react";

import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
// import Contact from './components/Contact';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main>
          <Hero />
          <About />
          <Projects />
          {/* <Contact /> */}
        </main>
      </div>
    );
  }
}

export default App;