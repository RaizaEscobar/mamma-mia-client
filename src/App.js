import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
   <ChakraProvider>
      <Router> 
      <Navbar/>
      </Router>
   </ChakraProvider> );
}

export default App;
