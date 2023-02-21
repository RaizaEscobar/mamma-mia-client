import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Pages/Landing/Landing';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
   <ChakraProvider>
      <Router> 
         <Navbar/>
         <main>
            <Routes>
               <Route path='/' element={<Landing/>}></Route>
               <Route path='/products' element={<ItemListContainer greetings='greetings'/>}></Route>
            </Routes>
         </main>
      </Router>
   </ChakraProvider> );
}

export default App;
