import TopBar from "./components/topbar/TopBar";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const user = true;

  return (
    <div className="App">
      <BrowserRouter>
        <TopBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/settings" element={user? <Settings /> : <Login />}/>
          <Route path="/login" element={user? <Home /> : <Login />}/>
          <Route path="/register" element={user? <Home /> : <Register />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/post/:id" element={<Single />}/>
          <Route path="/write" element={user? <Write /> : <Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

