
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Navbar from './pages/shared/Navbar';
import Register from './pages/authentication/Register';
import Login from './pages/authentication/Login';
import ResetPassword from './pages/authentication/ResetPassword';
import NewPassword from './pages/authentication/NewPassword';
import Home from './pages/home/Home';
import Details from './screens/Details';
import Search from './screens/Search';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/newpassword" element={<NewPassword />} />
            <Route path="/details/:productId" element={<Details />}/>

            <Route path="/search" element={<Search />}/>
            <Route />
            <Route />
            <Route />
            <Route />
            <Route />

          </Routes>

        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
