// src/App.jsx
import { Route,Routes } from 'react-router-dom';

import Home from './Home';
import './App.css'; // Import global styles
import AddBook from './components/AddBook';
function App() {
  return (
    <Routes>
    <div className="App">

      <Home />
      <Route path="/add-book" element={<AddBook />} />
    </div>
    </Routes>
  );
}

export default App;
