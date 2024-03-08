import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Products from './component/Products'
import Navbar from './component/Navbar'
import Edit from './component/Edit'
import AddUser from './component/AddUser'

const App = () => {


  //usestate to update the data
  const [id, setId] = useState(0);


  return (
    //Routing
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Products setId={setId} />} />
          <Route path="/edit/:id" element={<Edit id={id} />} />
          <Route path="/adduser" element={<AddUser />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
