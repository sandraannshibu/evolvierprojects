import { User } from "./mongoschema.mjs";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const createProfile= async(req,res)=>{
  const email=req.body.email;
  const user=await User.findOne({email});
  if(!user)
  {
    const data={
      firstName:req.body.firstname,
      lastName:req.body.lastname,
      email:req.body.email,
      password:await bcrypt.hash(req.body.password,5),
      mobileNumber:req.body.mobno,
      gender:req.body.gender,
    }
    const userdata =await User.create(data);
    console.log(userdata);
    res.json("Profile created sucessfully,please Login");
  }
  else{
    res.json("User already exist please login");

  }

};
const loginProfile= async(req,res)=>{
  const email=req.body.email;
  const password=req.body.password
  const user=await User.findOne({email});
  if(user)
  {
    const matchpassword=await bcrypt.compare(password, user.password);
    if(matchpassword)
    {
      const token = jwt.sign({ userId: user._id}, process.env.secret_key, { expiresIn: '1h' });
      res.json({ message: 'Login successful', token });
    }
    else{
      res.json({message:"Incorrect Email or password"})
    }
  
  }
  else{
    res.json({message:"User not found,please SignUp"});

  }

};

  export{createProfile,loginProfile};