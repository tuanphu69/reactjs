import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Main from './component/Main.jsx';
import Backend from './component/Backend/index.jsx';


// import Login from './login';

// import Login from './components/login/index';

// import { Redirect } from 'react-router';

export default function AppRouter() {
  return (
    <Router>
    <Routes>
         <Route path="/"  render element={<Backend/>}> </Route>
         {/* <Route path="/admin" render element={<Admin/>}> </Route> */}

         {/* <Route path="/admin" render={()=>{
             return localStorage.getItem("accessToken") ? <Admin /> : <Navigate to ="/admin" />}} /> */}
     </Routes>
   </Router>
  );
}
// function Admin(){

//     return <div>Amin

//     </div>
// }
