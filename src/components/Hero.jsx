export default function Hero({ onBookClick }) {
  return (
    <section className="relative bg-black text-white">
      <img src="/tattoo-images/hero.jpg" alt="Tattoo Hero" className="w-full h-[400px] object-cover opacity-70" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Inkwell Studio</h2>
        <p className="mb-6 max-w-lg">
          Where art meets skin. Our talented artists create unique, custom tattoos in a clean, professional environment.
        </p>
        <button
          onClick={onBookClick}
          className="bg-pink-300 text-black px-6 py-2 rounded hover:bg-pink-400"
        >
          Book Now
        </button>
      </div>
    </section>
  );
}
