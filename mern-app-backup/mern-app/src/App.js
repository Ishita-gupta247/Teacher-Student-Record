import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import Details from './components/Details';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
    </Routes>
  </>
  );
}

export default App;