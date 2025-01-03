import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { EventFormData, EventFormStep } from '../components/types/Createevent';
import { ProgressBar } from './components/ProgressBar';
import { EditPage } from './pages/EditPage';
import { BannerPage } from './pages/BannerPage';
import { TicketingPage } from './pages/TicketingPage';
import { ReviewPage } from './pages/ReviewPage';
import { ArrowLeft } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState<Partial<EventFormData>>({});
  const [currentStep, setCurrentStep] = useState<EventFormStep>('edit');

  const handleFormUpdate = (data: Partial<EventFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleEventCreate = () => {
    console.log('Creating event with data:', formData);
    // Here you would typically submit the data to your backend
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-8">
              <button
                onClick={() => window.history.back()}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="w-5 h-5 mr-1" />
                Back
              </button>
              <h1 className="text-3xl font-bold mt-4 mb-8">Create a New Event</h1>
              <ProgressBar currentStep={currentStep} />
            </div>

            <Routes>
              <Route 
                path="/" 
                element={<Navigate to="/create-event/edit" replace />} 
              />
              <Route 
                path="/create-event/edit" 
                element={
                  <EditPage 
                    onSubmit={(data) => {
                      handleFormUpdate(data);
                      setCurrentStep('banner');
                    }}
                    defaultValues={formData}
                  />
                } 
              />
              <Route 
                path="/create-event/banner"
                element={
                  <BannerPage
                    onSubmit={(data) => {
                      handleFormUpdate(data);
                      setCurrentStep('ticketing');
                    }}
                    defaultValues={formData}
                  />
                }
              />
              <Route 
                path="/create-event/ticketing"
                element={
                  <TicketingPage
                    onSubmit={(data) => {
                      handleFormUpdate(data);
                      setCurrentStep('review');
                    }}
                    defaultValues={formData}
                  />
                }
              />
              <Route 
                path="/create-event/review"
                element={
                  <ReviewPage
                    formData={formData as EventFormData}
                    onSubmit={handleEventCreate}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;