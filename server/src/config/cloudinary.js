import { config } from "dotenv"
config()
// Require the cloudinary library
import { v2 as cloudinary } from "cloudinary"
cloudinary.config({
    secure: true,
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})

export { cloudinary }