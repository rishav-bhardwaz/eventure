import { useLocation, useNavigate } from 'react-router-dom';

const EventReview: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handlePublish = () => {
    alert('Event Published Successfully!');
    navigate('/');
  };

  const handleEdit = () => {
    navigate('/create-event', { state });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Event Review</h1>
      <div className="space-y-4">
        <p><strong>Title:</strong> {state?.title}</p>
        <p><strong>Category:</strong> {state?.category}</p>
        <p><strong>Event Type:</strong> {state?.eventType}</p>
        <p><strong>Session:</strong> {state?.startDate} {state?.startTime} - {state?.endTime}</p>
        <p><strong>Location:</strong> {state?.locationType} ({state?.location})</p>
        <p><strong>Additional Info:</strong> {state?.additionalInfo}</p>
        {state?.banner && <img src={state.banner} alt="Event Banner" className="max-h-40" />}
        <p><strong>Ticketing:</strong> {state?.ticketing} {state?.ticketPrice && `(₹${state.ticketPrice})`}</p>
      </div>

      <div className="mt-6 flex space-x-4">
        <button
          onClick={handlePublish}
          className="flex-1 bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Publish Event
        </button>
        <button
          onClick={handleEdit}
          className="flex-1 bg-yellow-600 text-white p-2 rounded hover:bg-yellow-700"
        >
          Change Details
        </button>
      </div>
    </div>
  );
};

export default EventReview;