import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactsList from './components/Contacts';
import ContactInfo from './components/ContactInfo'; 
import ComposeMessage from './components/ComposeMessage';

const App: React.FC = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactsList />} />
        <Route path="/contact/:id" element={<ContactInfo />} />
        <Route path="/compose/:id" element={<ComposeMessage />} />
      </Routes>
    </Router>
  );
};

export default App;
