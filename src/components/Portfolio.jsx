const tattoos = [
  "tattoo1.jpg", "tattoo2.jpg", "tattoo3.jpg", "tattoo4.jpg", "tattoo5.jpg", "tattoo6.jpg"
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="p-6 bg-gray-900 text-white">
      <h3 className="text-2xl font-semibold mb-4">Portfolio</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {tattoos.map((img, index) => (
          <img
            key={index}
            src={`/tattoo-images/${img}`}
            alt={`Tattoo ${index + 1}`}
            className="rounded shadow hover:scale-105 transition-transform duration-200"
          />
        ))}
      </div>
    </section>
  );
}
