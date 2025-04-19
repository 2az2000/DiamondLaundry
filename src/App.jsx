import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./auth/Auth";
import ResetPassword from "./auth/ResetPassword";

import RefreshTokenPage from "./services/RefreshTokenPage";
import Manager from "./pages/Manager/index";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Invoice from "./pages/Invoice/Invoice";
import ManagerIp from "./pages/ManagerIp/ManagerIp";
import AddCustomer from "./component/Template/AddCustomer/AddCustomer";
import Customers from "./component/Template/Customers/customers";
import CreateInvoice from "./pages/CreateInvoice/CreateInvoice";
import ViewCustomerInformation from './pages/ViewCustomerInformation/ViewCustomerInformation'
function App() {
  
  const [reload,setReload]=useState(false)
  return (
    <>
      <ToastContainer
        
        closeOnClick={false}
        autoClose={3000}
      ></ToastContainer>

     
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/refresh" element={<RefreshTokenPage />} />
        {/* <Route path="/confirm" element={<ConfirmPassword />} />
        <Route path="/forgot" element={<ForgotPassword />} /> */}
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/otp2" element={<Otp2 />} /> */}
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/manager" element={<Manager />}>
          <Route index element={<Navigate to="customers" />} />
          <Route path='customers' element={<ViewCustomerInformation reload={reload} setReload={setReload}/>}/>
          <Route path="invoice" element={<Invoice />} />
          <Route path="createInvoice" element={<CreateInvoice />} />
          <Route path="addcustomer" element={<AddCustomer />} />
      
          <Route path="ip" element={<ManagerIp />} />

          {/* <Route path="logistics" element={<Logistics/>} />
          <Route path="groupobjective" element={<Groupobjective/>} />
          <Route path="nonallocation" element={<Nonallocation/>} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
{
  /* <Router>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="customer/add" element={<AddCustomer />} />
    <Route path="customer/list" element={<CustomerList />} />
  </Route>
</Routes>
</Router> */
}
