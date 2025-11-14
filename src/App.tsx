import React from "react";

import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="ml-14 scroll-smooth">
          <section id="hero" className="flex h-screen items-center justify-center"><Hero /></section>
          <section id="about" className="flex h-screen items-center justify-center"><About /></section>
          <section id="projects" className="flex h-screen items-center justify-center"><Projects /></section>
          <section id="contact"><Contact /></section>
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;