import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEvent: React.FC = () => {
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState({
    title: '',
    category: '',
    eventType: 'Single',
    startDate: '',
    startTime: '',
    endTime: '',
    locationType: 'Real',
    location: '',
    additionalInfo: '',
    banner: null,
    ticketing: 'Free',
    ticketPrice: ''
  });

  const predefinedCategories = ['Conference', 'Workshop', 'Concert', 'Meetup'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setEventDetails({ ...eventDetails, banner: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleSubmit = () => {
    navigate('/event-review', { state: eventDetails });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create Event</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Event Title</label>
        <input
          type="text"
          name="title"
          value={eventDetails.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Event Category</label>
        <select
          name="category"
          value={eventDetails.category}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select a category</option>
          {predefinedCategories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Event Type</label>
        <select
          name="eventType"
          value={eventDetails.eventType}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="Single">Single Event</option>
          <option value="Recurring">Recurring Event</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Session</label>
        <input
          type="date"
          name="startDate"
          value={eventDetails.startDate}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-2"
        />
        <div className="flex space-x-2">
          <input
            type="time"
            name="startTime"
            value={eventDetails.startTime}
            onChange={handleInputChange}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="time"
            name="endTime"
            value={eventDetails.endTime}
            onChange={handleInputChange}
            className="flex-1 p-2 border rounded"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Location</label>
        <select
          name="locationType"
          value={eventDetails.locationType}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-2"
        >
          <option value="Real">Real</option>
          <option value="Virtual">Virtual</option>
        </select>
        {eventDetails.locationType === 'Real' ? (
          <input
            type="text"
            name="location"
            value={eventDetails.location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter location"
          />
        ) : (
          <input
            type="url"
            name="location"
            value={eventDetails.location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter virtual meeting link"
          />
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Additional Information</label>
        <textarea
          name="additionalInfo"
          value={eventDetails.additionalInfo}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Banner</label>
        <input type="file" onChange={handleBannerChange} className="w-full" />
        {eventDetails.banner && <img src={eventDetails.banner} alt="Banner" className="mt-4 max-h-40" />}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Ticketing</label>
        <select
          name="ticketing"
          value={eventDetails.ticketing}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-2"
        >
          <option value="Free">Free</option>
          <option value="Ticketed">Ticketed</option>
        </select>
        {eventDetails.ticketing === 'Ticketed' && (
          <input
            type="number"
            name="ticketPrice"
            value={eventDetails.ticketPrice}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter ticket price"
          />
        )}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Create Event
      </button>
    </div>
  );
};

export default CreateEvent;