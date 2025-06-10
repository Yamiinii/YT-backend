//centralised way

import { app } from "../app";

//Large apps, clean error handling
const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}
// app.get("/user/:id", asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id);
//   res.json(user);
// }));
// and then at the end of the app
// app.use((err, req, res, next) => {
//   res.status(err.statusCode || 500).json({
//     success: false,
//     message: err.message || "Something went wrong!",
//   });
// });



//if you do not want a global error handler and want to customise the error message per route
//Small/simple routes, custom response per route
// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(err.code|| 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }
//usage
// app.get("/user/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });
