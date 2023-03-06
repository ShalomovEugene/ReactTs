import {Route, Routes} from 'react-router-dom'
import Nav from './components/Navigation';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductPage';

function App() {

  return (
    <>
    <Nav/>
    
    <Routes>
      <Route path='/' element={<ProductsPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    </>
  );
}

export default App;
