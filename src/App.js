import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componants/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './componants/Authentication/Login/Login';
import Register from './componants/Authentication/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import About from './componants/Pages/About/About';
import Booking from './componants/Pages/BookingService/Booking';
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Payment from './componants/Pages/Paymrnt/Payment';
import Dashboard from './componants/Dashboard/Dashboard/Dashboard';
import MyOrders from './componants/Dashboard/MyOrders/MyOrders';
import AddReview from './componants/Dashboard/AddReview/AddReview';
import MakeAdmin from './componants/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './AdminRoute/AdminRoute'
import DashboardHome from './componants/Dashboard/DashboardHome/DashboardHome';
import AllOrders from './componants/Dashboard/AllOrders/AllOrders';
import ServicePage from './componants/Pages/ServicePage/ServicePage';
import Contact from './componants/Pages/Contact/Contact';
import AddService from './componants/Dashboard/AddService/AddService';
import ManageServices from './componants/Dashboard/ManageService/ManageServices';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/booking/:bookingId"
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>} />
            <Route
              path="/payment/:paymentId"
              element={
                <PrivateRoute>
                  <Payment />
                </PrivateRoute>} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>}>

              <Route path="/dashboard/review" element={<AddReview />} />
              <Route path={`/dashboard/myorders`} element={<MyOrders />} />


            </Route>

            <Route
              path="/dashboard"
              element={
                <AdminRoute>
                  <Dashboard />
                </AdminRoute>}>

              <Route path="/dashboard"
                element=
                {<AdminRoute>
                  <DashboardHome />
                </AdminRoute>} />

              <Route path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>} />
              <Route path={`/dashboard/allOrders`}
                element={
                  <AdminRoute>
                    <AllOrders />
                  </AdminRoute>} />
              <Route path={`/dashboard/addservice`}
                element={
                  <AdminRoute>
                    <AddService />
                  </AdminRoute>} />
              <Route path={`/dashboard/manageService`}
                element={
                  <AdminRoute>
                    <ManageServices />
                  </AdminRoute>} />

            </Route>

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
