import Header from './components/Header';
import Hero from './components/Hero';
import PropertyGrid from './components/PropertyGrid';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PropertyGrid />
        <Experiences />
      </main>
      <Footer />
    </div>
  );
}

export default App;