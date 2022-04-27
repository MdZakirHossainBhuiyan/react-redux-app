
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './Components/ProductDetails';
import ProductListing from './Components/ProductListing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<ProductListing />} />
        <Route exact path='/product/:productId' element={<ProductDetails />} />
        <Route path='*' element={<h1 style={{"marginTop": "50px", "textAlign": "center"}}>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
