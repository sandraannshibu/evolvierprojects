import express from 'express';
import routers from './routes.mjs';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectdb } from './dbconnection.mjs';

dotenv.config()
connectdb();
const app = express();
app.use(express.json());

// router.use(
//   cors({
//     Credentials:true,

//     origin:'http://localhost:3000',
//   })
// )
// router.post('/',(req,res)=>{
//   res.json("test is working")
// })
app.use(
  cors({
    
    origin:'http://localhost:3000',
    Credentials:true,
  }),
)
app.use("/api/kongcouriers",routers)

// app.post('/api/login', (req, res) => {
//   const dataReceived = req.body;
//   console.log('Received data:', dataReceived); // Print received data in the server console
//   res.json({ message: 'sucessfully logged in' });
// });
// app.post('/api/signup', (req, res) => {
//   const dataReceived = req.body;
//   console.log('Received data:', dataReceived); // Print received data in the server console
//   res.json({ message: 'sucessfully registered as a new user' });
// });



// app.use(express.urlencoded({extended:false}));

// // Define a route
// app.get('/', (req, res) => {
//   res.render("login");
// });
// app.get("/signup",(req,res)=>{res.render("signup");
// })

// Start the server
const PORT = process.env.port;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});



