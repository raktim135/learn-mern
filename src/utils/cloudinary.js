import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";          

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadToCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(
            localFilePath,
            { 
                resource_type: "auto"
            }, 
            function(error, result) {
                // console.log(result);
            }
        );
        fs.unlinkSync(localFilePath)
        // console.log("file is uploaded to cloudnairy.", response.url);
        return response;
    }
    catch(err){
        fs.unlinkSync(localFilePath) //remove local file
    }
}

export {uploadToCloudinary}; 