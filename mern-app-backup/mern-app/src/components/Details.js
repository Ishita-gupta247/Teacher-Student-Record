import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const addData=()=>{
    history("/details")
}

const Details = () => {

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    const [show, setShow] = useState(false);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   

    return (
        <div style={{margin:"10% 25%",width:"50%",background:"black",opacity:"0.75",color:"white", padding:"5%"}}>
            
                
                     <center><h1>Home Page!!!!!</h1></center>   
                     <br/><br/><center><p>Welcome on board!</p></center>
                     <Button variant="primary" className='col-lg-10' onClick={addData} style={{ background: "red" }} type="submit">
                               Logout
                            </Button>
             
            
        </div>
    )
}

export default Details





















