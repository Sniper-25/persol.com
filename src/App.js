import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './pages/ِAbout/about';
import ContactUs from './pages/contact/contact';
import Feed from './pages/Feedback/Feedback';
import Login from './pages/Login/login';
import Product from './pages/prodect/prodect';
import Layout from './Layout';
import Loc from './pages/Loc/Loc';
import Footer from './hader_footer/footer';
import Register from './pages/Login/Register';
import LoginFor from './pages/Login/login_for';
import Prod from './prodects/prod';
import ProdR from './prodects/prodR';
import ProdD from './prodects/prodD';
import ProdC from './prodects/prodC';
function App() {
    return (

        <Router>
            <Layout>
                <Routes>
                    <Route path='/prodC' element={<ProdC />}></Route>
                    <Route path='/prodD' element={<ProdD />}></Route>
                    <Route path='/prodR' element={<ProdR />}></Route>
                    <Route path='/prod' element={<Prod />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/feed' element={<Feed />}></Route>
                    <Route path='/contact' element={<ContactUs />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/product' element={<Product />}></Route>
                    <Route path='/Loc' element={<Loc />}></Route>
                    <Route path='/foo' element={<Footer />}></Route>
                    <Route path='/re' element={<Register />}></Route>
                    <Route path='/forg' element={<LoginFor />}></Route>
                </Routes>
            </Layout>
        </Router>

    );
}

export default App;