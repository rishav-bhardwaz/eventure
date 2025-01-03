import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { EventFormData } from '../types/Createevent'

interface Props {
  onSubmit: (data: Partial<EventFormData>) => void;
  defaultValues?: Partial<EventFormData>;
}

export const EditPage: React.FC<Props> = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit } = useForm<EventFormData>({ defaultValues });
  const navigate = useNavigate();

  const handleFormSubmit = (data: EventFormData) => {
    onSubmit(data);
    navigate('/create-event/banner');
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Event Details</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Event Title <span className="text-red-500">*</span>
            </label>
            <input
              {...register('title', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter event name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Event Category <span className="text-red-500">*</span>
            </label>
            <select
              {...register('category', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
              <option value="concert">Concert</option>
              <option value="exhibition">Exhibition</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Date & Time</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                {...register('startDate', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Start Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                {...register('startTime', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                End Time
              </label>
              <input
                type="time"
                {...register('endTime')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Location</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Event Location <span className="text-red-500">*</span>
            </label>
            <select
              {...register('location', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select location type</option>
              <option value="venue">Physical Venue</option>
              <option value="online">Online Event</option>
              <option value="hybrid">Hybrid Event</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Description</h2>
          <div>
            <textarea
              {...register('description', { required: true })}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Describe your event..."
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save & Continue
        </button>
      </div>
    </form>
  );
};