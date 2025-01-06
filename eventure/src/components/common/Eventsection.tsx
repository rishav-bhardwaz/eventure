import React, { useState, useEffect } from 'react';
import EventCard from './Eventcard';
import type { Event, FilterType } from '../types/Event';

const EventsSection: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [loading, setLoading] = useState(true);

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Today', value: 'today' },
    { label: 'Tomorrow', value: 'tomorrow' },
    { label: 'This Weekend', value: 'weekend' },
    { label: 'Free', value: 'free' },
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'free') return event.price === 'FREE';

    const eventDate = new Date(event.date);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const saturday = new Date(today);
    saturday.setDate(saturday.getDate() + (6 - today.getDay()));
    const sunday = new Date(saturday);
    sunday.setDate(sunday.getDate() + 1);

    switch (activeFilter) {
      case 'today':
        return eventDate.toDateString() === today.toDateString();
      case 'tomorrow':
        return eventDate.toDateString() === tomorrow.toDateString();
      case 'weekend':
        return eventDate >= saturday && eventDate <= sunday;
      default:
        return true;
    }
  });

  if (loading) {
    return <div className="text-center py-8">Loading events...</div>;
  }

  return (
    <section className="py-8 px-4 mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold mb-6">Popular Events</h2>
      <div className="flex gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-2 rounded-full border ${
              activeFilter === filter.value
                ? 'bg-purple-600 text-white border-purple-600'
                : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      {filteredEvents.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No events found for the selected filter.
        </div>
      )}
    </section>
  );
};

export default EventsSection;
