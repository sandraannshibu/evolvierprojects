import mongoose from 'mongoose';

const connectdb=async()=>{
    try{
        const connect=await mongoose.connect(process.env.connection_string);
        console.log("database connected",connect.connection.host,connect.connection.name);
    }
    catch(err)
    {
        console.log(err);
        process.exit(1);
    }
};
export {connectdb};