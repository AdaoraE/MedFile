import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Adminp from './Pages/Adminp';
import LandingComponent from './Components/LandingPage/LandingComponent';
import Login from './Components/LandingPage/loginSignup/Login';
import ErrorPage from './Components/LandingPage/ErrorPage'
import SignUp from './Components/LandingPage/loginSignup/SignUp';
function App() {

  let details = navigator.userAgent;
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);

  if (isMobileDevice) {
  document.write("<h3>PLEASE OPEN ON A DESKTOP FOR BETTER USER EXPERIENCE</h3>")
   } else {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<LandingComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      {/* 
      <Router>
        <div>
          <Routes>
            <Route path="/admin" element={<Adminp />} />
          </Routes>
        </div>
      </Router> */}
    </>
  );
}
}
export default App;
