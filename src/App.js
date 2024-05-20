import HomePageComponent from "./components/HomePageComponent";
import LoginPageComponent from "./components/LoginPageComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import { BrowserRouter,Routes, Route } from 'react-router-dom'; 
import AddProductComponent from "./components/products/AddProductComponent";

function App() {
  return (
    <div>
        <HeaderComponent />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPageComponent/>}></Route>
                <Route path="/home" element={<HomePageComponent/>}></Route>
                <Route path='/addproduct' element={<AddProductComponent/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
