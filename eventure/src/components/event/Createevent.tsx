import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEvent: React.FC = () => {
  const [eventDetails, setEventDetails] = useState({
    title: '',
    category: '',
    eventType: 'Single', // Default to Single
    startDate: '', // Should be a date input
    startTime: '',
    endTime: '',
    locationType: 'Real', // Default to Real
    location: '',
    additionalInfo: '',
    banner: '',
    ticketing: 'Free', // Default to Free
    ticketPrice: 0, // Default to 0 for Free events
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventDetails),
      });

      if (response.ok) {
        alert('Event created successfully!');
        navigate('/'); 
      } else {
        const error = await response.json();
        console.error('Error creating event:', error);
        alert(`Failed to create event: ${error.error}`);
      }
    } catch (err) {
      console.error('Error during event creation:', err);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={eventDetails.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Event Category"
          value={eventDetails.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="eventType"
          value={eventDetails.eventType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="Single">Single Event</option>
          <option value="Recurring">Recurring Event</option>
        </select>
        <input
          type="date"
          name="startDate"
          value={eventDetails.startDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="time"
          name="startTime"
          value={eventDetails.startTime}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="time"
          name="endTime"
          value={eventDetails.endTime}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="locationType"
          value={eventDetails.locationType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="Real">Real Event</option>
          <option value="Virtual">Virtual Event</option>
        </select>
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={eventDetails.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="additionalInfo"
          placeholder="Additional Information (optional)"
          value={eventDetails.additionalInfo}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="banner"
          placeholder="Banner URL (optional)"
          value={eventDetails.banner}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select
          name="ticketing"
          value={eventDetails.ticketing}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="Free">Free</option>
          <option value="Ticketed">Ticketed</option>
        </select>
        {eventDetails.ticketing === 'Ticketed' && (
          <input
            type="number"
            name="ticketPrice"
            placeholder="Ticket Price"
            value={eventDetails.ticketPrice}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        )}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
