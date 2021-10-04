//Libraries
import express from "express";
import passport from "passport";
import multer from "multer";

//Database Models
import { ImageModel } from "../../database/allModels";

//Utilities
import { s3Upload } from "../../Utils/s3";



const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });
/*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET
*/
Router.get("/:_id", async(req,res)=>{
    try {
        const image = await ImageModel.findById(req.params._id);
        return res.json({image});

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})


/*
Route     /
Des       give an image to S3 bucket and saves link to mongodb
Params    none
Access    Public
Method    POST
*/
Router.post("/", upload.single("file"), async(req, res) => {

    try {
        const file = req.file;

       // s3 bucket options
         const bucketOptions = {
            Bucket: "zomatoprojectaashita",
            Key:file.originalname,
            Body:file.buffer,
            ContentType: file.mimetype,
            ACL:"public-read", //access control list
        };


         const uploadImage = await s3Upload(bucketOptions);
        return res.status(200).json({ uploadImage });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

});



export default Router;




























// import express from "express";
// import passport from "passport";;
// import multer from "multer"; //processed properly image
// import AWS from "aws-sdk";

// //Database
// import { ImageModel } from "../../database/image";

// //Utilities
// //import { s3Upload } from "../../Utils/AWS/s3";

// const Router = express.Router();

// //AWS S3 bucket config
// const s3Bucket=new AWS.S3({
//     accesskeyId:process.env.AWS_S3_ACCESS_KEY,
//     secretAccessKey:process.env.AWS_S3_SECRET_KEY,
//     region:"ap-south-1",
// });

// //Multer config
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// /*
// Route         /
// Descrp        Uploads given image to s3 bucket and saves file link to mongoDB.
// Params        none
// Access        Public
// Method        POST
// */

// Router.post("/", upload.single("file"), async(req,res) => {
//     try{
//         //UPLOAD TO S3
//         const file = req.file;

//         //s3 bucket options
//         const bucketOptions = {
//             Bucket:"shapeaijunebatch123",
//             key: file.originalname,
//             Body: file.buffer,
//             contentType: file.mimetype,
//             ACL:"public-read",

//         };
//        const s3upload = (options)=>{
//            return new Promise((resolve,reject)=> 
//            s3Bucket.upload(options, (error,data)=> {
//             if(error) return reject(error);
//             return resolve(data);
//            })
//            );
//         };

//         const uploadImage = await s3Upload(bucketoptions);
    
// return res.status(200).json({uploadImage});
// }
//     catch(error){
//         return res.status(500).json({error: error.message});

//     }
// });


        

     

// export default Router;