import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login, SignUp } from '../Pages'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/signup"} element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default Router