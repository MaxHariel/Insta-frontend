import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import './global.css';

import Header from "./components/Header"

// import { Container } from './styles';

export default function App() {
  return (
   <BrowserRouter>
     <Header />
     <Routes />
   </BrowserRouter>
  );
}
