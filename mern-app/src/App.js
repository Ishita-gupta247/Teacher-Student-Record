import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import Details from './components/Details';
import {Routes,Route} from "react-router-dom"
// import Header from './components/Header';
import Studentrecord from './components/Studentrecord';
import Studentview from './components/Studentview';
import Teacherview from './components/Teacherview';
import Teacherrecord from './components/Teacherrecord';
import Teachermodify from './components/Teachermodify';
function App() {
  const isLoggedIn=window.localStorage.getItem('loggedIn');
  if(isLoggedIn){
  console.log('true');}
  else{
    console.log('false');
  }
  return (
    
  <>
   {/* <Header /> */}
    <Routes>
      <Route path='/login' element={isLoggedIn=="true"?<Details/>:<Login/>} />
      <Route path='/' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='/Studentview' element={<Studentview />} />
      <Route path='/Studentrecord' element={<Studentrecord />} />
      <Route path='/Teacherrecord' element={<Teacherrecord />} />
      <Route path='/Teacherview' element={<Teacherview />} />
      <Route path='/Teachermodify/:id' element={<Teachermodify/>} />
    </Routes>
  </>
  );
}

export default App;