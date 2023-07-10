// import React, { useEffect,useState } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import SIgn_img from './SIgn_img'
// import { NavLink } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// const Register = () => {
//     const history = useNavigate();
//     useEffect(() => {
//         const checkCookie = async () => {
//           try {
//             const response = await axios.get('http://localhost:8000/cookiecheck', {
//               withCredentials: true, // Include credentials (cookies)
//             });
    
//             const data = response.data;
//             console.log(data.status);
//             if (data.status === 'invalid') {
//               // Redirect to login page
//               alert('invalid auth');
//               history('/login');
//             }
//           } catch (error) {
//             console.error(error);
//             // Handle error
//           }
//         };
//         checkCookie();
//       }, []);
//     const [inpval, setInpval] = useState({
//         name: "",
//         age:"",
//         address:"",
//         email: "",
//         phoneno:"",
//         qualification: "",
//         salary: ""
//     })
//     const [data,setData] = useState([]);
//     console.log(inpval);

//     const getdata = (e) => {
//         // console.log(e.target.value);


//         const { value, name } = e.target;
//         // console.log(value,name);


//         setInpval(() => {
//             return {
//                 ...inpval,
//                 [name]: value
//             }
//         })

//     }
//     const addData = (e) => {
//         e.preventDefault();

//         const { name,age,address, email, phoneno,qualification,salary } = inpval;
        
//         if (name === "") {
//             toast.error(' name field is requred!',{
//                 position: "top-center",
//             });
//         } else if (age === "") {
//             toast.error('age field is requred',{
//                position: "top-center",
//            });
//        } else if (address === "") {
//         toast.error('address field is requred',{
//            position: "top-center",
//        });
//    } else if (email === "") {
//              toast.error('email field is requred',{
//                 position: "top-center",
//             });
//         } else if (!email.includes("@")) {
//              toast.error('plz enter valid email addres',{
//                 position: "top-center",
//             });
//         } else if (phoneno === "") {
//             toast.error('phoneno field is requred',{
//                position: "top-center",
//            });
//        } else if (qualification=== "") {
//         toast.error('qualification field is requred',{
//            position: "top-center",
//        });
//    } else if (salary === "") {
//             toast.error('salary field is requred',{
//                position: "top-center",
//            });
//        } 
//       else{   
//         axios.post("http://localhost:8000/teacherrecord",inpval)
//         .then( res => {
//             alert(res.data.message)
//             history.push("/details")
//         })
     
//             console.log("data added succesfully");
        
//       }
//     }

// return (
//     <>
//     <div>
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

//         <div className="container mt-3">
//             <section className='d-flex justify-content-between'>
//                 <div className="left_data mt-3 p-3" style={{ width: "100%",margin:'1%',background:"black",opacity:"0.75",color:"white" }}>
//                     <div style={{padding:'0% 0% 0% 10%'}} >
//                  <h3 className='text-center col-lg-6' style={{padding:'0% 0% 0% 25%'}}>Teacher Record</h3>
//                       <Form >
//                         <Form.Group className="mb-3 col-lg-10" controlId="formBasicname">
//                            <label>Name: &nbsp;</label>
//                             <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Teacher's name" />
//                         </Form.Group>
//                         <Form.Group className="mb-3 col-lg-10" controlId="formBasicage">
//                            <label>Age: &nbsp;</label>
//                             <Form.Control type="number" name='age' onChange={getdata} placeholder="Enter Teacher's Age" />
//                         </Form.Group>
//                         <Form.Group className="mb-3 col-lg-10" controlId="formBasicaddress">
//                            <label>Address: &nbsp;</label>
//                             <Form.Control type="text" name='address' onChange={getdata} placeholder="Enter Teacher's Address" />
//                         </Form.Group>
//                         <Form.Group className="mb-3 col-lg-10" controlId="formBasicEmail">
//                         <label>Email: &nbsp;</label>
//                             <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter Teacher's email" />
//                         </Form.Group>
//                         <Form.Group className="mb-3 col-lg-10" controlId="formBasicPhoneno">
//                           <label>PhoneNo: &nbsp;</label>
//                             <Form.Control type="number" name='phoneno' onChange={getdata} placeholder="EnterTeacher's Phoneno" />
//                         </Form.Group>
//                          <Form.Group className="mb-3 col-lg-10" controlId="formBasicqualification">
//                        <label>Qualification: </label>
//                             <Form.Control type="text" name='qualification' onChange={getdata} placeholder="Enter Teacher's qualification" />
//                         </Form.Group>
//                         <Form.Group className="mb-3 col-lg-10" controlId="formBasicsalary">
//                         <label>Salary: &nbsp;</label>
//                             <Form.Control type="number" name='salary' onChange={getdata} placeholder="Enter teacher's salary" />
//                         </Form.Group>
//                         <Button variant="primary" className='col-lg-10' onClick={addData} style={{ background: "red" }} type="submit">
//                             Submit
//                         </Button>
//                 <NavLink to="/details" className="text-decoration-none text-light"style={{padding:'0% 0% 0% 28%'}}>Go back to Home-&gt;</NavLink>
//                     </Form>
        
//                     </div>
//                 </div>
//                 {/* <SIgn_img /> */}
//             </section>
//             <ToastContainer />
//         </div>
//         </div>
//     </>
// )
// }

// export default Register

import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Register = () => {
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

  const [inpval, setInpval] = useState({
    name: '',
    age: '',
    address: '',
    email: '',
    phoneno: '',
    qualification: '',
    salary: '',
  });

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, age, address, email, phoneno, qualification, salary } = inpval;

    if (name === '') {
      toast.error('Name field is required!', {
        position: 'top-center',
      });
    } else if (age === '') {
      toast.error('Age field is required', {
        position: 'top-center',
      });
    } else if (address === '') {
      toast.error('Address field is required', {
        position: 'top-center',
      });
    } else if (email === '') {
      toast.error('Email field is required', {
        position: 'top-center',
      });
    } else if (!email.includes('@')) {
      toast.error('Please enter a valid email address', {
        position: 'top-center',
      });
    } else if (phoneno === '') {
      toast.error('Phone number field is required', {
        position: 'top-center',
      });
    } else if (qualification === '') {
      toast.error('Qualification field is required', {
        position: 'top-center',
      });
    } else if (salary === '') {
      toast.error('Salary field is required', {
        position: 'top-center',
      });
    } else {
      axios
        .post('http://localhost:8000/teacherrecord', inpval)
        .then((res) => {
          alert(res.data.message);
          history.push('/details');
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    }
  };

  return (
    <>
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

        <div className="container mt-3">
          <section className="d-flex justify-content-center">
            <div className="left_data mt-3 p-3 bg-dark rounded" style={{ width: '70%', opacity: 0.75, color: 'white' }}>
              <h3 className="text-center">Teacher Record</h3>
              <Form>
                <Form.Group controlId="formBasicname">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Teacher's name" />
                </Form.Group>
                <Form.Group controlId="formBasicage">
                  <Form.Label>Age:</Form.Label>
                  <Form.Control type="number" name="age" onChange={getdata} placeholder="Enter Teacher's Age" />
                </Form.Group>
                <Form.Group controlId="formBasicaddress">
                  <Form.Label>Address:</Form.Label>
                  <Form.Control type="text" name="address" onChange={getdata} placeholder="Enter Teacher's Address" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter Teacher's email" />
                </Form.Group>
                <Form.Group controlId="formBasicPhoneno">
                  <Form.Label>PhoneNo:</Form.Label>
                  <Form.Control type="number" name="phoneno" onChange={getdata} placeholder="Enter Teacher's Phoneno" />
                </Form.Group>
                <Form.Group controlId="formBasicqualification">
                  <Form.Label>Qualification:</Form.Label>
                  <Form.Control
                    type="text"
                    name="qualification"
                    onChange={getdata}
                    placeholder="Enter Teacher's qualification"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicsalary">
                  <Form.Label>Salary:</Form.Label>
                  <Form.Control type="number" name="salary" onChange={getdata} placeholder="Enter teacher's salary" />
                </Form.Group>
                <br/>
                <Button variant="primary" className="w-100" onClick={addData} style={{ background: 'red' }} type="submit">
                  Submit
                </Button>
                <NavLink to="/details" className="text-decoration-none text-light d-block mt-3">
                 <center> Go back to Home</center>
                </NavLink>
              </Form>
            </div>
          </section>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Register;

