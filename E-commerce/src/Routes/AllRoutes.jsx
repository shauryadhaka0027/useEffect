import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Product from './Product'
import Home from './Home'

import User from './User'
import Cartt from './Cartt'
import Payment from './Payment'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
       <Route  path='/Product'  element={<Product/>}/>
       <Route  path='/'  element={<Home/>}/>
     
       <Route  path='/user/:id'  element={<User/>}/>
       <Route  path='/cart'  element={<Cartt/>}/>
       <Route  path='/Payment'  element={<Payment/>}/>

      </Routes>
    </div>
  )
}

export default AllRoutes
