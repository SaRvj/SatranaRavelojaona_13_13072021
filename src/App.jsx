import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import "./index.css"
import Header from "./components/Header"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Error from "./pages/Error"
console.disableYellowBox = true;

function App() {
  return (
    <div className="App">
        < Header />
          <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route path="/argent-bank-app" element={<HomePage />}/>
            <Route path="/sign-in" element={<Login/>}/>
            <Route path="/user" element={<Profile/>}/>
            <Route path="/*" element={<Error />}/>
          </Routes>
          < Footer />
      </div>
  );
}

export default App;