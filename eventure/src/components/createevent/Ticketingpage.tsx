mport { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EventFormData, TicketType } from '../types/Createevent';

interface Props {
  onSubmit: (data: Partial<EventFormData>) => void;
  defaultValues?: Partial<EventFormData>;
}

export const TicketingPage: React.FC<Props> = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit } = useForm<EventFormData>({
    defaultValues: {
      ticketTypes: [{ name: '', price: 0, quantity: 0 }],
      ...defaultValues
    }
  });
  const navigate = useNavigate();

  const handleFormSubmit = (data: EventFormData) => {
    onSubmit(data);
    navigate('/create-event/review');
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Ticket Information</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Ticket Type #1</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Ticket Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('ticketTypes.0.name')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="e.g., General Admission"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Price <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  {...register('ticketTypes.0.price')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Quantity Available <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  {...register('ticketTypes.0.quantity')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  {...register('ticketTypes.0.description')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ticket description"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Maximum Tickets per Person
              </label>
              <input
                type="number"
                {...register('maxTicketsPerPerson')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="0"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Sales Start Date
                </label>
                <input
                  type="date"
                  {...register('salesStartDate')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Sales End Date
                </label>
                <input
                  type="date"
                  {...register('salesEndDate')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => navigate('/create-event/banner')}
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Back
        </button>
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