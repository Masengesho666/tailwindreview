import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from "./pages/Home";
import NotFound from './components/NotFound';



const App = () => {
  return (
    <div>
      <Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="*" element={<NotFound/>}/>

 
  </Routes>
</Router>
    </div>
  )
}

export default App