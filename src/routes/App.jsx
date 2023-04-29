import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//archivos de configuracion global de estilos
import "../styles/App.css"; 
import "../styles/App.scss";
// conponentes jsx
import Layout from "../containers/Layout";
import CreateAccount from "../pages/CreateAccount"; 
import Home from '../pages/Home';
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import NewPassword from "../pages/NewPassword"; 
import NotFound from "../pages/NotFound";
import Orders from "../pages/Orders"; 
import RecoveryPassword from "../pages/RecoveryPassword";
import SendEmail from "../pages/SendEmail";
import CheckOut from "../pages/Checkout"; 

function App(){
    return(
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/checkout" element={<CheckOut />}/>
            <Route exact path="/create-account" element={<CreateAccount />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/my-account" element={<MyAccount />}/>
            <Route exact path="/new-password" element={<NewPassword />}/>
            <Route exact path="/orders" element={<Orders />}/>
            <Route exact path="/send-email" element={<SendEmail />}/>
            <Route exact path="/recovery-password" element={<RecoveryPassword />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    );
}

export default App; 