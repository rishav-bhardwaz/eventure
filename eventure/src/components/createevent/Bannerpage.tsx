import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EventFormData } from '../types/Createevent';
import { Image } from 'lucide-react';

interface Props {
  onSubmit: (data: Partial<EventFormData>) => void;
  defaultValues?: Partial<EventFormData>;
}

export const BannerPage: React.FC<Props> = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit } = useForm<EventFormData>({ defaultValues });
  const navigate = useNavigate();

  const handleFormSubmit = (data: EventFormData) => {
    onSubmit(data);
    navigate('/create-event/ticketing');
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Event Banner</h2>
        
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Image className="mx-auto h-12 w-12 text-gray-400" />
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Upload Banner Image
              </label>
              <input
                type="text"
                {...register('bannerImage')}
                placeholder="Enter image URL"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Banner Title
            </label>
            <input
              {...register('bannerTitle')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter banner title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Banner Subtitle
            </label>
            <input
              {...register('bannerSubtitle')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter banner subtitle"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => navigate('/create-event/edit')}
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