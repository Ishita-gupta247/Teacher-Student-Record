import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import cookieParser from "cookie-parser";
// const cookie = require('cookie-parser');
const jwt=jsonwebtoken;
const app= express()
 app.use(express.json())
 app.use(express.urlencoded({ extended: true }))
 app.use(cookieParser('thisiswebsitebasedonstudentteachermanagementsystem'));
 const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the URL of your frontend application
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));
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

// const classSchema=new mongoose.Schema({
//   name:{
//       type:String,
//       required:true
//   },
//   fathername:{
//     type:String,
//     required:true
// },
// rollno:{
//       type:String,
//       required:true
// },
//   email:{
//       type:String,
//       required:true
//   },
//   address:{
//       type:String,
//       required:true
//   },
//   phoneno:{
//       type:String,
//       required:true
//   }
// });

const teacherSchema=new mongoose.Schema({
  name:{
      type:String,
      required:true
  },
  age:{
    type:String,
    required:true
},
address:{
      type:String,
      required:true
},
  email:{
      type:String,
      required:true
  },
  phoneno:{
      type:String,
      required:true
  },
  qualification:{
      type:String,
      required:true
  },
  salary:{
    type:String,
    required:true
  },
  is_active: {
     type: Boolean, 
     default: true
     },
  is_deleted: {
     type: Boolean, 
     default: false 
    },
  created_on: { 
    type: Date,
     default: Date.now
     },
});
const loginSchema=new mongoose.Schema({
  email:{
      type:String,
      required:true
  },
  token:{
    type:String,
    required:true
}});


const classAssignSchema = new mongoose.Schema({
  teacherId: {
    type: String,
    required: true,
  },
  classesId: {
    type: [String],
    default: [],
  },
});


app.use(cors());
const User=new mongoose.model("User",userSchema);
const Student=new mongoose.model("Student",studentSchema);
const Teacher=new mongoose.model("Teacher",teacherSchema);
const Logindb=new mongoose.model("Logindb",loginSchema);
const classAssign = mongoose.model("classAssign", classAssignSchema);
app.get("/",(req,res)=>{
    res.send("welcome to backend");
    
})
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});


app.post("/register",async (req,res)=>{
  const{name,email,password,Confirmpassword}=req.body
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  const hashedConfirmPassword = bcrypt.hashSync(req.body.Confirmpassword, salt);
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    console.log('Email already exists');
    res.status(200).json({ message: 'Email already exists' });
    return; 
  }
  let user= new User();
  user.name=req.body.name;
  user.email=req.body.email;
  user.password = hashedPassword;
  user.Confirmpassword=hashedConfirmPassword;
  
user.save().then(() => {
      console.log("done");
    })
    .catch((err) => {
      console.log(err);
    });
    res.status(200).json({ message: 'register successful' });
            }
)

app.get("/cookiecheck", async (req, res) => {

  if (!req.cookies) {
    console.log("no token 1")
    return res.json({ status: "invalid" });
  }

  const token = req.cookies.auth_token;
  if (!token) {
    console.log("no token 2")
    return res.json({ status: "invalid" });
  }

  try {  console.log('hicookbegin');
    const decoded = jwt.verify(token, 'thisiswebsitebasedonstudentteachermanagementsystem');
    req.email = decoded.email;
  } catch (err) {
    console.log('middleprob');
    console.log(err);
    console.log("Middleware auth error");
  }
  const user = await User.findOne({ email: req.email });

  if (!user) {
   return res.json({ status: "invalid" });
  } else {
   return  res.json({ status: "ok" });
  }
});


app.get("/logout", (req, res) => {
  console.log("hi");
  res.clearCookie('auth_token');
  const token=req.cookies.auth_token;
  console.log(token);
  res.status(200).json({ message: "Logout successful" });
});

//
app.post("/login",async (req, res)=> {
  let email = req.body.email;
  let pass = req.body.password;
   const user = await User.findOne( { email:email });
   
   if (user) {
    const passwordMatch = await bcrypt.compare(pass, user.password);
    // console.log(passwordMatch);
    if (passwordMatch) {
      const token = jwt.sign({ email: email },'thisiswebsitebasedonstudentteachermanagementsystem');

        res.cookie("auth_token", token, {
          httpOnly: true,
          secure: 'thisiswebsitebasedonstudentteachermanagementsystem',
          maxAge: 5 * 60 * 1000,
        });
        console.log(token);

       return res.status(200).send({ status: "ok" , message: "successful reg"});
    }
   }
  console.log("Invalid credentials!!");
  res.status(200).json({ message: 'Invalid email or password' });
}) ;

app.post("/teacherrecord",async (req,res)=>{
  
  const{name,age,address, email, phoneno,qualification,salary}=req.body
  const existingTeacher = await Teacher.findOne({ email });
  if (existingTeacher) {
    console.log('Email already exists');
    res.status(200).json({ message: 'Email already exists' });
    return; 
  }
  let teacher= new Teacher();
  teacher.name=req.body.name;
  teacher.age=req.body.age;
  teacher.address=req.body.address;
  teacher.email=req.body.email;
  teacher.phoneno=req.body.phoneno;
  teacher.qualification=req.body.qualification;
  teacher.salary=req.body.salary;

   const doc= await teacher.save();
    console.log(doc);   
    res.status(200).json({ message: 'teacher register successful' });
            }
)

// app.post("/viewTeacher", async (req, res) => {
//   try {
//     const teachers = await teacherForm.find({is_deleted:false});
//     res.status(200).json(teachers);
//   } catch (error) {
//     console.error("Failed to fetch teachers:", error);
//     res.status(500).json({ error: "Failed to fetch teachers" });
//   }
// });
app.post("/teacherview", async (req, res) => {
  try {
    const teachers = await Teacher.find({is_deleted:false});
    console.log(teachers);
    res.status(200).json(teachers);
  } catch (error) {
    console.error("Failed to fetch teachers:", error);
    res.status(500).json({ error: "Failed to fetch teachers" });
  }
});

app.post("/studentrecord",async (req,res)=>{
  
  const{name,fathername,rollno,email,address,phoneno}=req.body
  const existingStudent = await Student.findOne({ email });
  if (existingStudent) {
    console.log('Email already exists');
    res.status(200).json({ message: 'Email already exists' });
    return; 
  }
  
  let student= new Student();
  student.name=req.body.name;
  student.fathername=req.body.fathername;
  student.rollno=req.body.rollno;
  student.email=req.body.email;
  student.address=req.body.address;
  student.phoneno=req.body.phoneno;
   const doc= await student.save();
    console.log(doc);   
    res.status(200).json({ message: 'student register successful' });
            }
)
app.post("/studentview", async (req, res) => {
  try {
    const students = await Student.find();
    console.log(students);
    res.status(200).json(students);
  } catch (error) {
    console.error("Failed to fetch students' details:", error);
    res.status(500).json({ error: "Failed to fetch students' details" });
  }
});

////
// app.post("/classview", async (req, res) => {
//   try {

//     const teachers = await classteacher.find({});
//     const classTeacherInfo = teachers.map((teacherclass) => {
//       console.log(teacherclass.email);
//       console.log(teacherclass.classesAssigned);
//       return {
//         name: teacherclass.name,
//         email: teacherclass.email,
//         classCount: teacherclass. classesAssigned.length,
//       };
//     });
//     // console.log(classTeacherInfo);
//     res.json(classTeacherInfo);
//   } catch (error) {
//     console.error("Failed to fetch class teachers class details:", error);
//     res.status(500).json({ error: "Failed to fetch class teachers" });
//   }
// });
app.post("/teacherInfo", async (req, res) => {
  try {
    const teachers = await classAssign.find({});
    const teacherIds = teachers.map((teacher) => teacher.teacherId);
    const teacherInfo = await Teacher.find({ _id:{$in: teacherIds} });

    const response = teacherInfo.map((teacher) => {
      return {
        name: teacher.name,
        classCount: teachers.find((t) => t.teacherId === teacher._id.toString())
          .classesId.length,
      };
    });
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error("Failed to fetch teacher information:", error);
    res.status(500).json({ error: "Failed to fetch teacher information" });
  }
});
app.post("/deleteRecord", async (req, res) => {
  const teacherId = req.body.teacherId;

  try {
    const result = await Teacher.findByIdAndUpdate(
      teacherId,
      { $set: { is_deleted: true } },
      { new: true }
    );

    if (result) {
      res.json({ message: "Record marked as deleted successfully" });
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (error) {
    console.log("Error deleting record:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.post("/teacher", async (req, res) => {
  const teacherId = req.body.id;
  const teacher = await Teacher.findById(teacherId);
  res.status(200).json(teacher);
});

app.post("/modifyTeacher", async (req, res) => {
  const teacherData = req.body;
  const teacherId = teacherData._id; 
  console.log(teacherData);
  try {
    const existingTeacher = await Teacher.findOne({
      email: teacherData.email,
      _id: { $ne: teacherId }, // Exclude the current teacher from the check
    });
    console.log(existingTeacher);

    if (existingTeacher) {
      res.json({ message: "Email already exists" });
      return;
    }
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      teacherId,
      teacherData,
      { new: true }
    );

    if (updatedTeacher) {
      res.status(200).json({ message: "Updated successfully" });
    } else {
      res.status(404).json({ error: "Teacher not found" });
    }
  } catch (error) {
    console.log("Error updating teacher:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(8000,()=>{
    console.log(" started port")
})
