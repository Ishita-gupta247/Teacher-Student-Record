// import React, { useEffect, useState } from 'react';
// import { useNavigate, NavLink, Link } from 'react-router-dom';
// import axios from 'axios';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// import { Bar, Doughnut } from 'react-chartjs-2';
// import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const options = {
//   scales: {
//     x: {
//       title: {
//         display: true,
//         text: 'Classes',
//       },
//       grid: {
//         color: 'grey',
//       },
//       ticks: {
//         color: 'grey',
//       },
//     },
//     y: {
//       title: {
//         display: true,
//         text: 'Students',
//       },
//       grid: {
//         color: 'grey',
//       },
//       ticks: {
//         color: 'grey',
//       },
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'right',
//     },
//     title: {
//       display: true,
//       text: 'Class Record',
//     },
//   },
//   indexAxis: 'x',
//   elements: {
//     bar: {
//       borderWidth: 2,
//       backgroundColor: 'rgba(75,192,192,1)',
//     },
//   },
// };

// const UserData = [
//   {
//     class: 1,
//     students: 30,
//   },
//   {
//     class: 2,
//     students: 25,
//   },
//   {
//     class: 3,
//     students: 35,
//   },
//   {
//     class: 4,
//     students: 33,
//   },
//   {
//     class: 5,
//     students: 38,
//   },
// ];

// const Details = () => {
//   const [classassigned, setClass] = useState([]);

//   const [chartData, setChartData] = useState({
//     datasets: [
//       {
//         data: [],
//         backgroundColor: [],
//       },
//     ],
//     labels: [],
//   });

//   const [logindata, setLoginData] = useState([]);
//   const history = useNavigate();

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

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
//           alert('Invalid auth');
//           history('/login');
//         }
//       } catch (error) {
//         console.error(error);
//         // Handle error
//       }
//     };
//     checkCookie();
//   }, []);

//   const logout = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/logout', {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//         credentials: 'include',
//       });

//       const data = await response.json();
//       if (response.status === 200) {
//         // alert(data.message);
//         if (data.message === 'Logout successful') {
//           history('/login');
//         }
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchClassData = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/classview');
//       setClass(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchClassData();
//   }, []);

//   const userData = {
//     labels: UserData.map((data) => data.class),
//     datasets: [
//       {
//         label: 'Strength',
//         data: UserData.map((data) => data.students),
//         backgroundColor: ['rgba(75,192,192,1)', '#ecf0f1', '#50AF95', '#f3ba2f', '#2a71d0'],
//         // borderColor: 'yellow',
//         borderWidth: 2,
//       },
//     ],
//   };

//   useEffect(() => {
//     const labels = [];
//     const data = [];
//     const backgroundColors = [];

//     classassigned.forEach((classassign) => {
//       labels.push(classassign.name);
//       data.push(parseInt(classassign.classCount));
//       console.log(classassign.classCount);
//       backgroundColors.push(getRandomColor());
//     });

//     setChartData({
//       datasets: [
//         {
//           data: data,
//           backgroundColor: backgroundColors,
//         },
//       ],
//       labels: labels,
//     });
//   }, [classassigned]);

//   const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   return (
//     <div>
//       <Navbar bg="dark" variant="dark">
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
//           <button className="btn btn-danger" onClick={logout}>
//             Logout
//           </button>
//         </Container>
//       </Navbar>
//       <div
//         style={{
//           margin: '3% 10%',
//           width: '90% 80%',
//           background: 'black',
//           opacity: '0.75',
//           color: 'white',
//           padding: '1%',
//         }}
//       >
//         <center>
//           <h1>Home Page!!!!!</h1>
//         </center>
//         <center>
//           <p>Welcome on board!</p>
//         </center>
//         <div className="row">
//           <div className="col-md-8">
//             <div style={{ width: '100%', margin: '0 auto' }}>
//               <Bar data={userData} options={options} />
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div style={{ width: 'auto', margin: '0 auto' }}>
//               <Doughnut data={chartData} />
//             </div>
//           </div>
//         </div>
//         {/* <center>
//           <Button
//             variant="primary"
//             className="col-lg-10"
//             onClick={logout}
//             style={{ background: 'red', margin: '0% 0% 5% 0%' }}
//             type="submit"
//           >
//             Logout
//           </Button> 
//         </center>*/}
//       </div>
//     </div>
//   );
// };

// export default Details;
///////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import axios from 'axios';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// import { Bar, Doughnut } from 'react-chartjs-2';
// import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const options = {
//   scales: {
//     x: {
//       title: {
//         display: true,
//         text: 'Classes',
//       },
//       grid: {
//         color: 'grey',
//       },
//       ticks: {
//         color: 'grey',
//       },
//     },
//     y: {
//       title: {
//         display: true,
//         text: 'Students',
//       },
//       grid: {
//         color: 'grey',
//       },
//       ticks: {
//         color: 'grey',
//       },
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'right',
//     },
//     title: {
//       display: true,
//       text: 'Class Record',
//     },
//   },
//   indexAxis: 'x',
//   elements: {
//     bar: {
//       borderWidth: 2,
//       backgroundColor: 'rgba(75,192,192,1)',
//     },
//   },
// };

// const UserData = [
//   {
//     class: 1,
//     students: 30,
//   },
//   {
//     class: 2,
//     students: 25,
//   },
//   {
//     class: 3,
//     students: 35,
//   },
//   {
//     class: 4,
//     students: 33,
//   },
//   {
//     class: 5,
//     students: 38,
//   },
// ];

// const Details = () => {
//   const [classassigned, setClass] = useState([]);

//   const [chartData, setChartData] = useState({
//     datasets: [
//       {
//         data: [],
//         backgroundColor: [],
//       },
//     ],
//     labels: [],
//   });

//   const [logindata, setLoginData] = useState([]);
//   const history = useNavigate();

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

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
//           alert('Invalid auth');
//           history('/login');
//         }
//       } catch (error) {
//         console.error(error);
//         // Handle error
//       }
//     };
//     checkCookie();
//   }, []);

//   const logout = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/logout', {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//         credentials: 'include',
//       });

//       const data = await response.json();
//       if (response.status === 200) {
//         // alert(data.message);
//         if (data.message === 'Logout successful') {
//           history('/login');
//         }
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchClassData = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/classview');
//       setClass(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchClassData();
//   }, []);

//   const userData = {
//     labels: UserData.map((data) => data.class),
//     datasets: [
//       {
//         label: 'Strength',
//         data: UserData.map((data) => data.students),
//         backgroundColor: ['rgba(75,192,192,1)', '#ecf0f1', '#50AF95', '#f3ba2f', '#2a71d0'],
//         // borderColor: 'yellow',
//         borderWidth: 2,
//       },
//     ],
//   };

//   useEffect(() => {
//     const labels = [];
//     const data = [];
//     const backgroundColors = [];

//     classassigned.forEach((classassign) => {
//       labels.push(classassign.name);
//       data.push(parseInt(classassign.classCount));
//       console.log(classassign.classCount);
//       backgroundColors.push(getRandomColor());
//     });

//     setChartData({
//       datasets: [
//         {
//           data: data,
//           backgroundColor: backgroundColors,
//         },
//       ],
//       labels: labels,
//     });
//   }, [classassigned]);

//   const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   return (
//     <div>
//       <Navbar bg="dark" variant="dark">
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
//           <Button variant="danger" onClick={logout}>
//             Logout
//           </Button>
//         </Container>
//       </Navbar>
//       <div className="p-3">
//         <h1 className="text-center">Home Page!</h1>
//         <p className="text-center">Welcome on board!</p>
//         <div className="row">
//           <div className="col-md-8">
//             <div className="w-100">
//               <Bar data={userData} options={options} />
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="w-auto">
//               {/* <Doughnut data={chartData} /> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;
//////////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import axios from 'axios';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// import { Bar, Doughnut } from 'react-chartjs-2';
// import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const options = {
//   scales: {
//     x: {
//       title: {
//         display: true,
//         text: 'Classes',
//       },
//       grid: {
//         color: 'grey',
//       },
//       ticks: {
//         color: 'grey',
//       },
//     },
//     y: {
//       title: {
//         display: true,
//         text: 'Students',
//       },
//       grid: {
//         color: 'grey',
//       },
//       ticks: {
//         color: 'grey',
//       },
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'right',
//     },
//     title: {
//       display: true,
//       text: 'Class Record',
//     },
//   },
//   indexAxis: 'x',
//   elements: {
//     bar: {
//       borderWidth: 2,
//       backgroundColor: 'rgba(75,192,192,1)',
//     },
//   },
// };

// const UserData = [
//   {
//     class: 1,
//     students: 30,
//   },
//   {
//     class: 2,
//     students: 25,
//   },
//   {
//     class: 3,
//     students: 35,
//   },
//   {
//     class: 4,
//     students: 33,
//   },
//   {
//     class: 5,
//     students: 38,
//   },
// ];

// const Details = () => {
//   const [classassigned, setClass] = useState([]);

//   const [chartData, setChartData] = useState({
//     datasets: [
//       {
//         data: [],
//         backgroundColor: [],
//       },
//     ],
//     labels: [],
//   });

//   const [logindata, setLoginData] = useState([]);
//   const history = useNavigate();

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

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
//           alert('Invalid auth');
//           history('/login');
//         }
//       } catch (error) {
//         console.error(error);
//         // Handle error
//       }
//     };
//     checkCookie();
//   }, []);

//   const logout = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/logout', {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//         credentials: 'include',
//       });

//       const data = await response.json();
//       if (response.status === 200) {
//         // alert(data.message);
//         if (data.message === 'Logout successful') {
//           history('/login');
//         }
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchClassData = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/classview');
//       setClass(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchClassData();
//   }, []);

//   const userData = {
//     labels: UserData.map((data) => data.class),
//     datasets: [
//       {
//         label: 'Strength',
//         data: UserData.map((data) => data.students),
//         backgroundColor: ['rgba(75,192,192,1)', '#ecf0f1', '#50AF95', '#f3ba2f', '#2a71d0'],
//         // borderColor: 'yellow',
//         borderWidth: 2,
//       },
//     ],
//   };

//   useEffect(() => {
//     const labels = [];
//     const data = [];
//     const backgroundColors = [];

//     classassigned.forEach((classassign) => {
//       labels.push(classassign.name);
//       data.push(parseInt(classassign.classCount));
//       console.log(classassign.classCount);
//       backgroundColors.push(getRandomColor());
//     });

//     setChartData({
//       datasets: [
//         {
//           data: data,
//           backgroundColor: backgroundColors,
//         },
//       ],
//       labels: labels,
//     });
//   }, [classassigned]);

//   const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   return (
//     <div>
//       <Navbar bg="dark" variant="dark">
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
//           <Button variant="danger" onClick={logout}>
//             Logout
//           </Button>
//         </Container>
//       </Navbar>
//       <div className="p-3">
//         <h1 className="text-center text-white">Home Page!</h1>
//         <p className="text-center text-white">Welcome on board!</p>
//         <div className="row">
//           <div className="col-md-8">
//             <Card bg="dark" text="light">
//               <Card.Body>
//                 <div className="w-100">
//                   <Bar data={userData} options={options} />
//                 </div>
//               </Card.Body>
//             </Card>
//           </div>
//           <div className="col-md-4">
//             <Card bg="dark" text="light">
//               <Card.Body>
//                 <div className="w-auto">
//                   <Doughnut data={chartData} />
//                 </div>
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;
import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement );

const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Classes',
      },
      grid: {
        color: 'grey',
      },
      ticks: {
        color: 'grey',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Students',
      },
      grid: {
        color: 'grey',
      },
      ticks: {
        color: 'grey',
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Class Record',
    },
  },
  indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 2,
      backgroundColor: 'rgba(75,192,192,1)',
    },
  },
};

const UserData = [
  {
    class: 1,
    students: 30,
  },
  {
    class: 2,
    students: 25,
  },
  {
    class: 3,
    students: 35,
  },
  {
    class: 4,
    students: 33,
  },
  {
    class: 5,
    students: 38,
  },
];

const Details = () => {
  const [classassigned, setClass] = useState([]);

  const [chartData, setChartData] = useState({
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
    labels: [],
  });

  const [logindata, setLoginData] = useState([]);
  const history = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          alert('Invalid auth');
          history('/login');
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };
    checkCookie();
  }, []);

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:8000/logout', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      const data = await response.json();
      if (response.status === 200) {
        // alert(data.message);
        if (data.message === 'Logout successful') {
          history('/login');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchClass = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/teacherInfo"
      );
      setClass(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchClass();
  }, []);

  const userData = {
    labels: UserData.map((data) => data.class),
    datasets: [
      {
        label: 'Strength',
        data: UserData.map((data) => data.students),
        backgroundColor: ['rgba(75,192,192,1)', '#ecf0f1', '#50AF95', '#f3ba2f', '#2a71d0'],
        borderWidth: 2,
      },
    ],
  };

  useEffect(() => {
    const labels = [];
    const data = [];
    const backgroundColors = [];

    classassigned.forEach((classassign) => {
      labels.push(classassign.name);
      data.push(parseInt(classassign.classCount));
      console.log(classassign.classCount);
      backgroundColors.push(getRandomColor());
    });

    setChartData({
      datasets: [
        {
          data: data,
          backgroundColor: backgroundColors,
        },
      ],
      labels: labels,
    });
  }, [classassigned]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

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
          <Button variant="danger" onClick={logout}>
            Logout
          </Button>
        </Container>
      </Navbar>
      <div className="p-3">
        <h1 className="text-center text-white">Home Page!</h1>
        <p className="text-center text-white">Welcome on board!</p>
        <div className="row">
          <div className="col-md-8">
            <Card bg="dark" text="light">
              <Card.Body>
                <div className="w-100">
                  <Bar data={userData} options={options} />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card bg="dark" text="light">
              <Card.Body>
                <div className="w-auto">
                  {chartData.labels.length > 0 }
                  <Doughnut data={chartData} /> 
                  {/* {console.log(chartData.labels.length)} */}
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

