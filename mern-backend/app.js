import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
const app= express()
 app.use(express.json())
 app.use(express.urlencoded())
 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/reg');
  console.log('DB connected');

}
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Confirmpassword:{
        type:String,
        required:true
    }
});
const studentSchema=new mongoose.Schema({
  name:{
      type:String,
      required:true
  },
  fathername:{
    type:String,
    required:true
},
rollno:{
      type:String,
      required:true
},
  email:{
      type:String,
      required:true
  },
  address:{
      type:String,
      required:true
  },
  phoneno:{
      type:String,
      required:true
  }
});
app.use(cors());
const User=new mongoose.model("User",userSchema);
const Student=new mongoose.model("Student",studentSchema);
app.post("/login",async (req, res)=> {
    let email = req.body.email;
    let pass = req.body.password;
     const user = await User.findOne(
       [{ email:email }]);
     if (user) {
      const passwordMatch = await bcrypt.compare(pass, user.password);
     }
 const existingUser = await User.findOne({ email ,password});
  if (!existingUser) {
    console.log("Invalid credentials!!");
    res.status(200).json({ message: 'Invalid email or password' });
   return;
  }
  console.log("correct credentials")
  res.status(200).json({ message: 'Login successful' });
}) 
////

app.get("/studentrecord",async (req,res)=>{
  res.send("hello");
  // console.log(req.body);
  // const{name,fathername,rollno,email,address,phoneno}=req.body
  // const existingStudent = await Student.findOne({ email });
  // if (existingUser) {
  //   console.log('Email already exists');
  //   res.status(200).json({ message: 'Email already exists' });
  //   return; 
  // }
  // let student= new Student();
  // student.name=req.body.name;
  // student.fathername=req.body.fathername;
  // student.rollno=req.body.rollno;
  // student.email=req.body.email;
  // student.address=req.body.address;
  // student.phoneno=req.body.phoneno;
  //  const doc= await student.save();
  //   console.log(doc);   
  //   res.status(200).json({ message: 'student register successful' });
            }
)

app.get("/st",(req,res)=>{
    res.send("welcome to backend");
    
    
})
// app.get("/student",(req,res)=>{
//   res.send("welcome student");
  
// })

app.post("/register",async (req,res)=>{
  res.send(res.body);
  const{name,email,password,Confirmpassword}=req.body
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    console.log('Email already exists');
    res.status(200).json({ message: 'Email already exists' });
    return; 
  }
  let user= new User();
  user.name=req.body.name;
  user.email=req.body.email;
  user.password=req.body.password;
  user.Confirmpassword=req.body.Confirmpassword;
   const doc= await user.save();
    console.log(doc);   
    res.status(200).json({ message: 'register successful' });
            }
)
app.listen(8000,()=>{
    console.log(" started port")
})
