import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';

import About from './routes/About';
import Car from './routes/Car';
import Cars from './routes/Cars';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
root.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<About />} />
        <Route path="/cars" element={<Cars />} >
            <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p style={{textAlign:"center"}}>Select a Vehicle</p>
              </main>
            }
          />
          <Route path=":carId" element={<Car />} />
        </Route>

      </Route>
      <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
    </Routes>
  </BrowserRouter>
);