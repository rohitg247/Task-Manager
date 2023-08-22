import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        height: '100vh'
      }}>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/details/:id" element={<ContactDetails />} />
     </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
