// import React, {useEffect,useState } from 'react'
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
// const Studentrecord = () => {
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
//         fathername:"",
//         rollno:"",
//         email: "",
//         address: "",
//         phoneno:""
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

//         const { name,fathername,rollno, email, address, phoneno } = inpval;
//         if (name === "") {
//             toast.error(' name field is requred!',{
//                 position: "top-center",
//             });
//         } else if (fathername === "") {
//             toast.error('father name field is requred',{
//                position: "top-center",
//            });
//        } else if (rollno === "") {
//         toast.error('rollno field is requred',{
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
//         } else if (address === "") {
//             toast.error('address field is requred',{
//                position: "top-center",
//            });
//        } else if (phoneno === "") {
//         toast.error('phoneno field is requred',{
//            position: "top-center",
//        });
//    } 
//       else{   
//         axios.post("http://localhost:8000/studentrecord",inpval)
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
//         <div className="container mt-3">
//             <section className='d-flex justify-content-between'>
//                 <div className="left_data mt-3 p-3" style={{ width: "100%",margin:'5%',background:"black",opacity:"0.75",color:"white" }}>
//                     <div style={{padding:'0% 0% 0% 10%'}} >
//                    <h3 className='text-center col-lg-6' style={{padding:'0% 0% 0% 25%'}}>Student Record</h3>  
//                       <Form >
//                         <Form.Group className="mb-3 col-lg-10" controlId="formBasicname">
//                            <label>Name: &nbsp;</label>
//                             <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Student Name" />
//                         </Form.Group>
//                         <Form.Group className="mb-3 col-lg-10" controlId="formBasicfathername">
//                            <label>FatherName: &nbsp;</label>
//                             <Form.Control type="text" name='fathername' onChange={getdata} placeholder="Enter Student's Father Name" />
//                         </Form.Group>
//                         <Form.Group className="mb-3 col-lg-10" controlId="formBasicrollno">
//                            <label>Rollno: &nbsp;</label>
//                             <Form.Control type="number" name='rollno' onChange={getdata} placeholder="Enter Student's Rollno" />
//                         </Form.Group>
//                         <Form.Group className="mb-3 col-lg-10" controlId="formBasicEmail">
//                         <label>Email: &nbsp;</label>
//                             <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter Student's email" />
//                         </Form.Group>

//                         <Form.Group className="mb-3 col-lg-10" controlId="formBasicaddress">
//                        <label>Address: </label>
//                             <Form.Control type="text" name='address' onChange={getdata} placeholder="Enter Student's address" />
//                         </Form.Group>

//                         <Form.Group className="mb-3 col-lg-10" controlId="formBasicPhoneno">
//                           <label>PhoneNo: &nbsp;</label>
//                             <Form.Control type="number" name='phoneno' onChange={getdata} placeholder="Enter Student's Phoneno" />
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

// export default Studentrecord


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

const Studentrecord = () => {
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
    fathername: '',
    rollno: '',
    email: '',
    address: '',
    phoneno: '',
  });

  console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, fathername, rollno, email, address, phoneno } = inpval;

    if (name === '') {
      toast.error('Name field is required!', {
        position: 'top-center',
      });
    } else if (fathername === '') {
      toast.error('Father name field is required', {
        position: 'top-center',
      });
    } else if (rollno === '') {
      toast.error('Rollno field is required', {
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
    } else if (address === '') {
      toast.error('Address field is required', {
        position: 'top-center',
      });
    } else if (phoneno === '') {
      toast.error('Phone number field is required', {
        position: 'top-center',
      });
    } else {
      axios
        .post('http://localhost:8000/studentrecord', inpval)
        .then((res) => {
          alert(res.data.message);
          history.push('/details');
        })
        .catch((error) => {
          console.error(error);
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
          <section className="d-flex justify-content-between">
            <div className="left_data mt-3 p-3" style={{ width: '100%', background: 'rgba(0, 0, 0, 0.75)', color: 'white' }}>
              <div style={{ padding: '0% 0% 0% 10%' }}>
                <h3 className="text-center col-lg-6" style={{ padding: '0% 0% 0% 25%' }}>
                  Student Record
                </h3>
                <Form>
                  <Form.Group className="mb-3 col-lg-10" controlId="formBasicname">
                    <label>Name: &nbsp;</label>
                    <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Student Name" />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-10" controlId="formBasicfathername">
                    <label>Father Name: &nbsp;</label>
                    <Form.Control type="text" name="fathername" onChange={getdata} placeholder="Enter Student's Father Name" />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-10" controlId="formBasicrollno">
                    <label>Roll No: &nbsp;</label>
                    <Form.Control type="number" name="rollno" onChange={getdata} placeholder="Enter Student's Roll No" />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-10" controlId="formBasicEmail">
                    <label>Email: &nbsp;</label>
                    <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter Student's Email" />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-10" controlId="formBasicaddress">
                    <label>Address: </label>
                    <Form.Control type="text" name="address" onChange={getdata} placeholder="Enter Student's Address" />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-10" controlId="formBasicPhoneno">
                    <label>Phone No: &nbsp;</label>
                    <Form.Control type="number" name="phoneno" onChange={getdata} placeholder="Enter Student's Phone No" />
                  </Form.Group>
                  <Button variant="primary" className="col-lg-10" onClick={addData} style={{ background: 'red' }} type="submit">
                    Submit
                  </Button>
                  <NavLink to="/details" className="text-decoration-none text-light" style={{ padding: '0% 0% 0% 28%' }}>
                    Go back to Home-&gt;
                  </NavLink>
                </Form>
              </div>
            </div>
          </section>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Studentrecord;

