import { Check } from 'lucide-react';
import { EventFormStep } from '../types/Createevent';

const STEPS = [
  { id: 'edit', label: 'Edit' },
  { id: 'banner', label: 'Banner' },
  { id: 'ticketing', label: 'Ticketing' },
  { id: 'review', label: 'Review' },
] as const;

interface Props {
  currentStep: EventFormStep;
}

export const ProgressBar: React.FC<Props> = ({ currentStep }) => {
  const currentIndex = STEPS.findIndex(step => step.id === currentStep);

  return (
    <div className="w-full mb-8">
      <div className="relative flex justify-between">
        {STEPS.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = step.id === currentStep;

          return (
            <div key={step.id} className="flex flex-col items-center flex-1">
              <div className="relative w-full">
                {index < STEPS.length - 1 && (
                  <div className={`absolute top-5 left-[50%] w-full h-[2px] ${
                    index < currentIndex ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
                <div className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  isCompleted ? 'bg-blue-600 border-blue-600' :
                  isCurrent ? 'border-blue-600 bg-white' : 'border-gray-200 bg-white'
                }`}>
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span className={`text-sm font-medium ${
                      isCurrent ? 'text-blue-600' : 'text-gray-400'
                    }`}>{index + 1}</span>
                  )}
                </div>
              </div>
              <span className={`mt-2 text-sm font-medium ${
                isCurrent ? 'text-blue-600' : 'text-gray-500'
              }`}>{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};