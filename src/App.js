import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Pages/Landing/Landing';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetail from './Components/ItemDetail/ItemDetail';

function App() {
  return (
   <ChakraProvider>
      <Router> 
         <Navbar/>
         <main>
            <Routes>
               <Route exact path='/' element={<Landing/>}></Route>
               <Route exact path='/products' element={<ItemListContainer/>}></Route>
               <Route exact path='/products/:id' element={<ItemDetail/>}></Route>
            </Routes>
         </main>
      </Router>
   </ChakraProvider> );
}

export default App;
