// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate,NavLink } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// const Studentview = () => {
//   const history=useNavigate();
//   useEffect(() => {
//     const checkCookie = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/cookiecheck', {
//           withCredentials: true, // Include credentials (cookies)
//         });

//         const data = response.data;
//         console.log(data.status);
//         if (data.status === 'invalid') {
//           // Redirect to login page
//           alert('invalid auth');
//           history('/login');
//         }
//       } catch (error) {
//         console.error(error);
//         // Handle error
//       }
//     };
//     checkCookie();
//   }, []);
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const Studentsview = async () => {
//       try {
//         const response = await axios.post("http://localhost:8000/studentview"); 
//         setStudents(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     Studentsview();
//   }, []);

//   return (<div>
//     <Navbar bg="dark" variant="dark">
//     <Container>
//       <NavLink to="/" className="text-decoration-none text-light mx-2">
//         User Registration
//       </NavLink>
//       <NavLink to="/details" className="text-decoration-none text-light mx-2">
//         Home&nbsp;
//       </NavLink>
//       <NavLink to="/Teacherrecord" className="text-decoration-none text-light">
//         Teacherrecord&nbsp;
//       </NavLink>
//       <NavLink to="/Teacherview" className="text-decoration-none text-light">
//         Teacherview&nbsp;
//       </NavLink>
//       <NavLink to="/Studentrecord" className="text-decoration-none text-light">
//         Studentrecord&nbsp;
//       </NavLink>
//       <NavLink to="/Studentview" className="text-decoration-none text-light">
//         Studentview&nbsp;
//       </NavLink>
//       {/* <button className="btn btn-danger" onClick={logout}>
//         Logout
//       </button> */}
//     </Container>
//   </Navbar>
//       <div style={{margin:"5% 20%",width:"60%",background:"black",opacity:"0.75",color:"white", padding:"5%"}}>
//       <center><h1 style={{ color: 'white' }}>Student Records</h1></center>
//       <table className="table table-striped" style={{border: '1px solid white',
//   bordercollapse: 'collapse', color: 'white' }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Father's Name</th>
//             <th>Roll No</th>
//             <th>Address</th>
//             <th>Email</th>
//             <th>Phone No</th>
//           </tr>
//         </thead>
//         <tbody >
//           {students.map((student) => (
//             <tr key={student.email}>
//               <td style={{ color: 'white' }}>{student.name}</td>
//               <td style={{ color: 'white' }}>{student.fathername}</td>
//               <td style={{ color: 'white' }}>{student.rollno}</td>
//               <td style={{ color: 'white' }}>{student.address}</td>
//               <td style={{ color: 'white' }}>{student.email}</td>
//               <td style={{ color: 'white' }}>{student.phoneno}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
      
//   <NavLink to="/details" className="text-decoration-none text-light"style={{padding:'0% 0% 0% 34%'}}>Go back to Home-&gt;</NavLink>
//     </div></div>
//   );
// };

// export default Studentview;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Studentview = () => {
  const history = useNavigate();
  useEffect(() => {
    const checkCookie = async () => {
      try {
        const response = await axios.get('http://localhost:8000/cookiecheck', {
          withCredentials: true, // Include credentials (cookies)
        });

        const data = response.data;
        console.log(data.status);
        if (data.status === 'invalid') {
          // Redirect to login page
          alert('invalid auth');
          history('/login');
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };
    checkCookie();
  }, []);

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const Studentsview = async () => {
      try {
        const response = await axios.post('http://localhost:8000/studentview');
        setStudents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    Studentsview();
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-2">
            User Registration
          </NavLink>
          <NavLink to="/details" className="text-decoration-none text-light mx-2">
            Home&nbsp;
          </NavLink>
          <NavLink to="/Teacherrecord" className="text-decoration-none text-light">
            Teacherrecord&nbsp;
          </NavLink>
          <NavLink to="/Teacherview" className="text-decoration-none text-light">
            Teacherview&nbsp;
          </NavLink>
          <NavLink to="/Studentrecord" className="text-decoration-none text-light">
            Studentrecord&nbsp;
          </NavLink>
          <NavLink to="/Studentview" className="text-decoration-none text-light">
            Studentview&nbsp;
          </NavLink>
        </Container>
      </Navbar>

      <div className="container mt-5">
        <div className="card bg-dark text-white">
          <div className="card-header text-center">
            <h1>Student Records</h1>
          </div>
          <div className="card-body">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Father's Name</th>
                  <th>Roll No</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Phone No</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.email}>
                    <td>{student.name}</td>
                    <td>{student.fathername}</td>
                    <td>{student.rollno}</td>
                    <td>{student.address}</td>
                    <td>{student.email}</td>
                    <td>{student.phoneno}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer text-center">
            <NavLink to="/details" className="text-decoration-none text-light">
              Go back to Home -&gt;
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentview;
