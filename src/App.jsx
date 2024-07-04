import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Note the correct import from 'react-router-dom'
import './App.css';
import User from './routes/User';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
