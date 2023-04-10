import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { navbar } from '../utils/navbar'
import Navbar from '../components/Navbar'

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Navbar/>}>
          {
            navbar.map(value => <Route key={value.id} path={value.path} element={value.element} />)
          }
        </Route>
        <Route path='*' element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}
