import { useNavigate } from 'react-router-dom';
import { EventFormData } from '../types/Createevent';

interface Props {
  formData: EventFormData;
  onSubmit: () => void;
}

export const ReviewPage: React.FC<Props> = ({ formData, onSubmit }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Review Event Details</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Basic Information</h3>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Event Title</dt>
                <dd className="mt-1 text-sm text-gray-900">{formData.title}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="mt-1 text-sm text-gray-900">{formData.category}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Date</dt>
                <dd className="mt-1 text-sm text-gray-900">{formData.startDate}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Time</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {formData.startTime} - {formData.endTime}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="mt-1 text-sm text-gray-900">{formData.location}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Banner Information</h3>
            {formData.bannerImage && (
              <img
                src={formData.bannerImage}
                alt="Event Banner"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <dl className="grid grid-cols-1 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Banner Title</dt>
                <dd className="mt-1 text-sm text-gray-900">{formData.bannerTitle}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Banner Subtitle</dt>
                <dd className="mt-1 text-sm text-gray-900">{formData.bannerSubtitle}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Ticket Information</h3>
            <div className="space-y-4">
              {formData.ticketTypes?.map((ticket, index) => (
                <div key={index} className="border-b pb-4">
                  <h4 className="font-medium mb-2">Ticket Type #{index + 1}</h4>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Name</dt>
                      <dd className="mt-1 text-sm text-gray-900">{ticket.name}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Price</dt>
                      <dd className="mt-1 text-sm text-gray-900">${ticket.price}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Quantity</dt>
                      <dd className="mt-1 text-sm text-gray-900">{ticket.quantity}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => navigate('/create-event/ticketing')}
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create Event
        </button>
      </div>
    </div>
  );
};