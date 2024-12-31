import type { Event } from '../types/Event';

interface EventCardProps {
  event: Event;
  onFavoriteToggle: (eventId: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onFavoriteToggle }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
    const day = date.getDate();
    return { month, day };
  };

  const { month, day } = formatDate(event.date);

  return (
    <div className="relative group rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow">
      <div className="relative aspect-[4/3]">
        <img 
          src={event.imageUrl} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onFavoriteToggle(event.id)}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <svg
            className={`w-5 h-5 ${event.isFavorite ? 'text-yellow-400' : 'text-gray-600'}`}
            fill={event.isFavorite ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </button>
        <span className="absolute bottom-2 left-2 px-2 py-1 bg-white/80 rounded text-sm font-medium">
          {event.category.name}
        </span>
      </div>
      <div className="p-4">
        <div className="flex gap-4 mb-2">
          <div className="text-center">
            <div className="text-sm font-bold text-purple-600">{month}</div>
            <div className="text-xl font-bold">{day}</div>
          </div>
          <h3 className="text-lg font-semibold leading-tight">{event.title}</h3>
        </div>
        <div className="space-y-2 text-sm text-gray-600">
          <p>{event.location}</p>
          <p>{event.startTime} - {event.endTime}</p>
          <div className="flex justify-between items-center">
            <span className="font-semibold">
              {typeof event.price === 'number' ? `INR ${event.price}` : 'FREE'}
            </span>
            <span className="text-gray-500">
              {event.interestedCount} interested
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

