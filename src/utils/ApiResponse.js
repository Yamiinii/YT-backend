class ApiResponse{
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode<400
    }
}

// import { ApiResponse } from "./utils/ApiResponse.js";

// app.get("/user", asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user.id);
//     res.status(200).json(new ApiResponse(200, user, "User fetched successfully"));
// }));
