import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEvent from './pages/Cevent';
import { Landing } from './pages/Landing';
import Navbar from './components/common/Navbar';
const App: React.FC = () => {
  return (
    <Router>
                <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
    </Router>
  );
};

export default App;