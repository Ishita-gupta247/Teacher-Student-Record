import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link, useParams ,NavLink} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import "./RegisterTeacher.css";
import axios from "axios";

const Teachermodify = (props) => {
  const params = useParams();
  const history = useNavigate();
  const [teacherData, setTeacherData] = useState({
    _id: "",
    name: "",
    age: "",
    address: "",
    email: "",
    phoneno: "",
    qualification: "",
    salary: "",
  });

  useEffect(() => {
    v();
  }, []);

  const v = async () => {
    const res = await fetch("http://localhost:8000/cookiecheck", {
      mode: "cors",
      credentials: "include",
    });

    const data = await res.json();

    if (data.status === "invalid") {
      history("/");
    } else {
      const id = params.id;
      const result = await axios.post(
        "http://localhost:8000/teacher",
        {
          id: id,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // let result = await fetch("http://localhost:5000/teacher", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   credentials: "include",
      //   body: JSON.stringify({ id }),
      // });
      setTeacherData(result.data);
    }
  };

  const handleChange = (e) => {
    setTeacherData({ ...teacherData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setTeacherData({
      name: "",
      age: "",
      address: "",
      email: "",
      phoneno: "",
      qualification: "",
      salary: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(teacherData);
    try {
      const response = await axios.post(
        "http://localhost:8000/modifyTeacher",
        teacherData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const data = response.data;
      if (response.status === 200) {
        alert(data.message);
        if (data.message === "Updated successfully") {
          history("/details");
        } else {
          setTeacherData({
            ...teacherData,
            Mail: "",
          });
        }
      }
      console.log("Teacher updated successfully:", response.data);
    } catch (error) {
      console.error("Failed to update teacher:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const data = await response.json();
      if (response.status === 200) {
        alert(data.message);
        if (data.message === "Logout successful") {
          history("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
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
      {/* <button className="btn btn-danger" onClick={logout}>
        Logout
      </button> */}
    </Container>
  </Navbar>
    <div className="home-container">
   
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card mt-5">
            <div className="card-body" style={{ background: 'black', opacity: '0.75', color: 'white'}}>
              <h3 className="card-title text-center">Modify Teacher</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    defaultValue={teacherData.name}
                    value={teacherData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    name="age"
                    defaultValue={teacherData.age}
                    value={teacherData.age}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    defaultValue={teacherData.address}
                    value={teacherData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    defaultValue={teacherData.email}
                    value={teacherData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="Phoneno"
                    defaultValue={teacherData.phoneno}
                    value={teacherData.phoneno}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="qualification">Qualification</label>
                  <input
                    type="text"
                    className="form-control"
                    id="qualification"
                    name="qualification"
                    defaultValue={teacherData.qualification}
                    value={teacherData.qualification}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="number"
                    className="form-control"
                    id="salary"
                    name="salary"
                    defaultValue={teacherData.salary}
                    value={teacherData.salary}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br></br>
                <div className="d-flex justify-content-center gap-5">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary ml-2"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </form>
              <br></br>
              <NavLink to="/details" className="text-decoration-none text-light" style={{ padding: '0% 0% 0% 42%' }}>
                 Go back to Home -&gt;
             </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Teachermodify;