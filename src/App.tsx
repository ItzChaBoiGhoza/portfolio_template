import React from "react";

// import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

import Navbar from './components/Navbar'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          {/* <Hero /> */}
          {/* <About /> */}
          {/* <Projects /> */}
          {/* <Contact /> */}
        </main>
      </div>
    );
  }
}

export default App;