export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="date" className="w-full p-2 border rounded" />
          <textarea placeholder="Tattoo details..." className="w-full p-2 border rounded"></textarea>
          <div className="flex justify-between">
            <button type="submit" className="bg-pink-300 px-4 py-2 rounded hover:bg-pink-400">
              Submit
            </button>
            <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
