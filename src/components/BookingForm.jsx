import React from "react";

function BookingForm() {
  return (
    <section id="booking" className="p-10 bg-black">
      <h3 className="text-3xl font-semibold mb-6">Book an Appointment</h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="fullName" type="text" placeholder="Full Name" className="p-3 rounded bg-gray-800 text-white" />
        <input name="email" type="email" placeholder="Email" className="p-3 rounded bg-gray-800 text-white" />
        <input name="tattooIdea" type="text" placeholder="Tattoo Idea / Style" className="p-3 rounded bg-gray-800 text-white md:col-span-2" />
        <textarea name="notes" placeholder="Additional Notes" className="p-3 rounded bg-gray-800 text-white md:col-span-2" rows="4"></textarea>
        <button type="submit" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-white md:col-span-2">Submit</button>
      </form>
    </section>
  );
}

export default BookingForm;
