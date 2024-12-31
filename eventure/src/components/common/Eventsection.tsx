import { useState, useEffect } from 'react';
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
        // API call 
        const response = await fetch('/api/events');
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

  const handleFavoriteToggle = async (eventId: string) => {
    try {
      // await fetch(`/api/events/${eventId}/favorite`, { method: 'POST' });
      
      setEvents(events.map(event => 
        event.id === eventId 
          ? { ...event, isFavorite: !event.isFavorite }
          : event
      ));
    } catch (error) {
      console.error('Error updating favorite status:', error);
    }
  };

  const filteredEvents = events.filter(event => {
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
      
      {/* Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {filters.map(filter => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-2 rounded-full border transition-colors whitespace-nowrap
              ${activeFilter === filter.value
                ? 'bg-purple-600 text-white border-purple-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-purple-600'
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onFavoriteToggle={handleFavoriteToggle}
          />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No events found for the selected filter.
        </div>
      )}

      {filteredEvents.length > 0 && (
        <div className="text-center mt-8">
          <button className="px-6 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default EventsSection;

