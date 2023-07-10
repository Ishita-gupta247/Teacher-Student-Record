


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, NavLink, Link } from 'react-router-dom';
// // import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
// // import { Doughnut } from 'react-chartjs-2';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// //ChartJs.register(Tooltip, Title, ArcElement, Legend);

// const Teacherview = () => {
//   const history = useNavigate();

//   const [teachers, setTeachers] = useState([]);
//   // const [classassigned, setClass] = useState([]);

//   // const [chartData, setChartData] = useState({
//   //   datasets: [
//   //     {
//   //       data: [],
//   //       backgroundColor: [],
//   //     },
//   //   ],
//   //   labels: [],
//   // });

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
//           alert('Invalid authentication');
//           history('/login');
//         }
//       } catch (error) {
//         console.error(error);
//         // Handle error
//       }
//     };
//     checkCookie();
//   }, [history]);

//   // const fetchClassData = async () => {
//   //   try {
//   //     const response = await axios.post('http://localhost:8000/classview');
//   //     setClass(response.data);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   const fetchTeacherData = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/teacherview');
//       setTeachers(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
    
//     fetchTeacherData();
    
//     // fetchClassData();
//   }, []);

 

//   // useEffect(() => {
//   //   const labels = [];
//   //   const data = [];
//   //   const backgroundColors = [];
//     // classassigned.forEach((classassign) => {
//     //   labels.push(classassign.name);
//     //   data.push(parseInt(classassign.classCount));
//     //   console.log(classassign.classCount);
//     //   backgroundColors.push(getRandomColor());
//     // });

//   //   setChartData({
//   //     datasets: [
//   //       {
//   //         data: data,
//   //         backgroundColor: backgroundColors,
//   //       },
//   //     ],
//   //     labels: labels,
//   //   });
//   // }, [classassigned]);

//   const deleteRecord = async (teacherId) => {
//     console.log(teacherId);
//     const confirmed = window.confirm("Press OK to delete the record?");
//     if (confirmed) {
//       try {
//         const response = await axios.post("http://localhost:8000/deleteRecord", {
//           teacherId
//         }, {
//           withCredentials: true, // Include credentials (cookies)
//         });
//         console.log(response);
//         const data = response.data;
//         console.log(data);
//         if (data.success) {
//           // Delete successful, update the teachers state
//           setTeachers(teachers => teachers.filter(teacher => teacher._id !== teacherId));
         
//         }
//         fetchTeacherData();
//       } catch (error) {
//         console.log("Error deleting record:", error);
//       }
//     }
//   };

//   // const getRandomColor = () => {
//   //   const letters = '0123456789ABCDEF';
//   //   let color = '#';
//   //   for (let i = 0; i < 6; i++) {
//   //     color += letters[Math.floor(Math.random() * 16)];
//   //   }
//   //   return color;
//   // };

//   return (<div>
//     <Navbar bg="dark" variant="dark">
//         <Container>
//           <NavLink to="/" className="text-decoration-none text-light mx-2">
//             User Registration
//           </NavLink>
//           <NavLink to="/details" className="text-decoration-none text-light mx-2">
//             Home&nbsp;
//           </NavLink>
//           <NavLink to="/Teacherrecord" className="text-decoration-none text-light">
//             Teacherrecord&nbsp;
//           </NavLink>
//           <NavLink to="/Teacherview" className="text-decoration-none text-light">
//             Teacherview&nbsp;
//           </NavLink>
//           <NavLink to="/Studentrecord" className="text-decoration-none text-light">
//             Studentrecord&nbsp;
//           </NavLink>
//           <NavLink to="/Studentview" className="text-decoration-none text-light">
//             Studentview&nbsp;
//           </NavLink>
//           {/* <button className="btn btn-danger" onClick={logout}>
//             Logout
//           </button> */}
//         </Container>
//       </Navbar>

//     <div style={{ margin: '5% 15% 5% 15%', width: '70%', background: 'black', opacity: '0.75', color: 'white', padding: '5%' }}>
//       <center>
//         <h1 style={{ color: 'white' }}>Teacher Records</h1>
//       </center>
//       <table className="table table-striped" style={{ border: '1px solid white', bordercollapse: 'collapse', color: 'white' }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Address</th>
//             <th>Email</th>
//             <th>Phone No</th>
//             <th>Qualification</th>
//             <th>Salary</th>
//             <th>Delete</th>
//             <th>Update</th>
//           </tr>
//         </thead>
//         <tbody style={{ color: 'white' }}>
//           {teachers.map((teacher) => (
//             <tr key={teacher.email}>
//               <td style={{ color: 'white' }}>{teacher.name}</td>
//               <td style={{ color: 'white' }}>{teacher.age}</td>
//               <td style={{ color: 'white' }}>{teacher.address}</td>
//               <td style={{ color: 'white' }}>{teacher.email}</td>
//               <td style={{ color: 'white' }}>{teacher.phoneno}</td>
//               <td style={{ color: 'white' }}>{teacher.qualification}</td>
//               <td style={{ color: 'white' }}>{teacher.salary}</td>
//               <td>
//                 <button className="btn btn-primary" onClick={() => deleteRecord(teacher._id)}>Delete</button>
//               </td>
//               <td>
//                 <NavLink to={"/Teachermodify/" + teacher._id} key={teacher._id}>
//                   <button className="btn btn-warning">Modify</button>
//                 </NavLink>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* <div style={{ width: '60%', margin: '0 auto' }}>
//         <Doughnut data={chartData} />
//       </div> */}
//       <br/>
//       <NavLink to="/details" className="text-decoration-none text-light" style={{ padding: '0% 0% 0% 42%' }}>
//         Go back to Home -&gt;
//       </NavLink>
//     </div>
//     </div>
//   );
// };

// export default Teacherview;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Teacherview = () => {
  const history = useNavigate();
  const [teachers, setTeachers] = useState([]);

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
          alert('Invalid authentication');
          history('/login');
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };
    checkCookie();
  }, [history]);

  const fetchTeacherData = async () => {
    try {
      const response = await axios.post('http://localhost:8000/teacherview');
      setTeachers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTeacherData();
  }, []);

  const deleteRecord = async (teacherId) => {
    console.log(teacherId);
    const confirmed = window.confirm('Press OK to delete the record?');
    if (confirmed) {
      try {
        const response = await axios.post(
          'http://localhost:8000/deleteRecord',
          {
            teacherId,
          },
          {
            withCredentials: true, // Include credentials (cookies)
          }
        );
        console.log(response);
        const data = response.data;
        console.log(data);
        if (data.success) {
          // Delete successful, update the teachers state
          setTeachers((teachers) => teachers.filter((teacher) => teacher._id !== teacherId));
        }
        fetchTeacherData();
      } catch (error) {
        console.log('Error deleting record:', error);
      }
    }
  };
return (  <div>    <Navbar bg="dark" variant="dark">      <Container>        <NavLink to="/" className="text-decoration-none text-light mx-2">
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
           {/* <button className="btn btn-danger" onClick={logout}>
             Logout
           </button> */}
       </Container>    </Navbar>
     <div className="mt-5 mx-auto" style={{ maxWidth: '70%' }}>      <Card bg="dark" text="white">
          <Card.Body>
            <Card.Title>
              <h1>Teacher Records</h1>
            </Card.Title>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Phone No</th>
                  <th>Qualification</th>
                  <th>Salary</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => (
                  <tr key={teacher.email}>
                    <td>{teacher.name}</td>
                    <td>{teacher.age}</td>
                    <td>{teacher.address}</td>
                    <td>{teacher.email}</td>
                    <td>{teacher.phoneno}</td>
                    <td>{teacher.qualification}</td>
                    <td>{teacher.salary}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => deleteRecord(teacher._id)}>
                        Delete
                      </button>
                    </td>
                    <td>
                      <NavLink to={`/Teachermodify/${teacher._id}`} key={teacher._id}>
                        <button className="btn btn-warning">Modify</button>
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <NavLink to="/details" className="text-decoration-none text-light" style={{ marginLeft: '42%' }}>
              Go back to Home -&gt;
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Teacherview;
