import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<div>Home</div>} />
        <Route path='/properties' element={<div>properties</div>} />
        <Route path='/' element={<Navigate to={'/home'} />} />
        <Route path='*' element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}
