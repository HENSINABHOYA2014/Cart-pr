import React from 'react';  // You need to import React
import './App.css';
import './Style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './user/Home';
import AdminLogic from './admin/AdminLogic';
import AdminRegister from './admin/AdminRegister';
import AdminProduct from './admin/AdminProduct';
import AdminCategeory from './admin/AdminCategeory';
import Layout from './components/Layout';
import Product from './user/Product';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route  element={<Layout/>}/>
        <Route path="/" element={<Home />} />
        <Route path='/product' element={<Product/>}>

        </Route>
        

        {/* admin route */}
        <Route path="/adminlogic" element={<AdminLogic />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/adminProduct" element={<AdminProduct />} />
        <Route path="/admincategory" element={<AdminCategeory />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
