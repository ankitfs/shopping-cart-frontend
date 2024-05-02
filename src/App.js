import ProductListingComponent from "./components/ProductListingComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import { BrowserRouter,Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div>
        <HeaderComponent />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProductListingComponent/>}></Route>
                           
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
