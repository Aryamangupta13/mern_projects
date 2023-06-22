import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from './Counter.js'
import Home from './Home.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App=()=>{
    return(
    <div className="">
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            {/* <Route path="/counter" element={<Counter/>}></Route> */}
        </Routes>
    </BrowserRouter>
    </div>)
}

export default App;