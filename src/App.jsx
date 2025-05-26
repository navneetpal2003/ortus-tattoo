import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="font-sans">
      <Header onBookClick={() => setBookingOpen(true)} />
      <Hero onBookClick={() => setBookingOpen(true)} />
      <About />
      <Portfolio />
      <BookingModal isOpen={isBookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

export default App;
