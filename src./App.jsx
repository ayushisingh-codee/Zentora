import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminProject from './components/admin/AdminProject';
import AdminUsers from './components/admin/AdminUsers';
import AdminClients from './components/admin/AdminClients';
import AdminBids from './components/admin/AdminBids';
import AdminProfile from './components/admin/AdminProfile';
import AdminPlans from './components/admin/AdminPlans';
import ClientDashboard from "./components/client/ClientDashboard";
import ClientPostProjects from './components/client/ClientPostProjects';
import ClientManageProjects from './components/client/ClientManageProjects';
import ClientReviewBids from './components/client/ClientReviewBids';
import ClientProfile from './components/client/ClientProfile';
import UserDashboard from './components/user/UserDashboard';
import UserProject from "./components/user/UserProject";
import UserBids from './components/user/UserBids';
import UserProfile from "./components/user/UserProfile";
import UserPlans from './components/user/UserPlans';

import 'aos/dist/aos.css';
import AOS from 'aos';

const App = () => {
  const [user,setUser]=useState(null);
  useEffect(()=>{
    AOS.init({
      offset:200,
      duration:600,
      easing:'ease-in-sine'

    })
    

  },[])
   const Location=useLocation()
  useEffect(()=>{
    const info=JSON.parse(localStorage.getItem('info'))
    setUser(info)
  },[location])

 return (
    <>
     
        <Navbar />
        <Routes>
          {/* common url */}
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/services' element={<Services />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/about' element={<Aboutus />} />
          {/* admin url*/ }
       {user?.type =='admin' && <>
      <Route path='/admin-dashboard' element={<AdminDashboard/>} />
      <Route path='/admin-project' element={< AdminProject/>} />
      <Route path='/admin-users' element={< AdminUsers/>} />
      <Route path='/admin-clients' element={<AdminClients/>} />
      <Route path='/admin-bids' element={<AdminBids/>} />
      <Route path='/admin-profile' element={< AdminProfile/>} />
      <Route path='/admin-plans' element={<AdminPlans/>} />
      </>}

      {/* client url */ }
      {user?.type=='client'&& <>
      <Route path='/client-dashboard' element={< ClientDashboard/>} />
      <Route path='/client-post-projects' element={<ClientPostProjects/>} />
      <Route path='/client-manage-projects' element={<ClientManageProjects/>} />
      <Route path='/client-review-bids' element={<ClientReviewBids/>} />
      <Route path='/client-profile' element={<ClientProfile/>} />
      </>}

      {/* user url*/ }
      {user?.type=='user'&& <>
      <Route path='/user-dashboard' element={<UserDashboard/>} />
      <Route path='/user-project' element={<UserProject/>} />
      <Route path='/user-bids' element={<UserBids/>} />
      <Route path='/user-profile' element={< UserProfile/>} />
      <Route path='/user-plans' element={<UserPlans/>} />
      </>}

      <Route path='*' element={<h1>404 page not Found</h1>}/>

        </Routes>
        <Footer />
      
    </>
  )
}
export default App
