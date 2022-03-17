import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {HomeRouter} from './router/HomeRouter'
import {AuthRouter} from './router/AuthRouter'

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {[...HomeRouter,...AuthRouter].map((props, key) => (
              <Route key={key} {...props} />
            ))}
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
