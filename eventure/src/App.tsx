import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import Modal from "react-modal";
import CreateEvent from './pages/Cevent';
import { Landing } from './pages/Landing';
import Navbar from './components/common/Navbar';
import EventReview from './components/event/Eventreview';

Modal.setAppElement('#root'); // Required for accessibility

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    setTimeout(() => setIsModalOpen(true), 0); // Open modal if not authenticated
    return (
      <>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Login Required"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <h2 className="text-lg font-bold mb-4">Login Required</h2>
          <p className="mb-4">You must log in to access this page.</p>
          <div className="flex justify-end">
            <button
              onClick={() => {
                setIsModalOpen(false);
                loginWithRedirect();
              }}
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-4 py-2 rounded-md text-sm font-medium"
            >
              Log In
            </button>
          </div>
        </Modal>
      </>
    );
  }

  return children;
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/create-event"
          element={
            <ProtectedRoute>
              <CreateEvent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/review-event"
          element={
            <ProtectedRoute>
              <EventReview />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
