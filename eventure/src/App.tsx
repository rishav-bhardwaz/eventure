import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEvent from './pages/Cevent';
import { Landing } from './pages/Landing';
import Navbar from './components/common/Navbar';
import EventReview from './components/event/Eventreview';
const App: React.FC = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/review-event" element={<EventReview />} />
        </Routes>
    </Router>
  );
};

export default App;