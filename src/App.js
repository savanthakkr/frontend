import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../src/components/Login';
import AllProduct from '../src/components/AllProduct';
import AddProduct from '../src/components/AddProduct';
import Search from './components/Search';
import AddCategory from './components/AddCategory';
import UpdateProduct from './components/EditProduct';
import Register from './components/Register';
import Excel from './components/excel';
import ShowAllExcel from './components/showExcel';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/allProducts" element={<AllProduct />} />
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/search" element={<Search />} />
      <Route path="/addCategory" element={<AddCategory />} />
      <Route path="/updateProduct/:id" element={<UpdateProduct />} />
      <Route path="/register" element={<Register />} />
      <Route path='/' element={<Excel/>}/>
      <Route path='/ShowAllExcel' element={<ShowAllExcel/>}/>
    </Routes>
  );
}

export default App; 