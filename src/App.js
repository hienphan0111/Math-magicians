import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'route/Home';
import Cal from 'route/Calculator.route';
import Quote from 'route/Quote';
import Layout from 'route/Layout';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/Math-magicians" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Cal />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
