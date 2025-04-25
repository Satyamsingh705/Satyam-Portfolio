import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
console.log("App component is rendering");

function App() {
  useEffect(() => {
    document.title = 'Satyam Kumar - Personal Portfolio';
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;