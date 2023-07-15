import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import MenuLayout from './pages/Menu/MenuLayout';
import Menu from './pages/Menu/Menu';
import Detail from './pages/Menu/Detail';
import Add from './pages/Menu/Add';
import Edit from './pages/Menu/Edit';
import Delete from './pages/Menu/Delete';
import Settings from './pages/Settings';
import './assets/scss/index.scss'

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='menu' element={<MenuLayout />}>
        <Route index element={<Menu/>}/>
        <Route path="add" element={<Add/>}/>
        <Route path="edit/:id" element={<Edit/>}/>
        <Route path="delete/:id" element={<Delete/>}/>
        <Route path="detail/:id" element={<Detail/>}/>
      </Route>
      <Route path='settings' element={<Settings />}/>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
