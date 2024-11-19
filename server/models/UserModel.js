import mongoose from "mongoose"
import {genSalt} from "bcrypt"

const userSchema = new mongoose.Schema({
     email: {
         type: String,
         required: [true,"Email is required"],
         unique: true,
         lowercase: true,
     },
     password: {
         type: String,
         required: [true,"Password is required"],
         minlength: [8,"Password should be at least 8 characters long"],
     },
     firstName: {
         type: String,
         required: false,
     },
     lastName: {
         type: String,
         required: false,
     },
     image: {
         type: String,
         required: false,
     },
     colour: {
         type: Number,
         required: false,
     },
     profileSetup: {
         type: Boolean,
         default: false,
     },
});

userSchema.pre("save", async function(next) {
    const salt = await genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export default mongoose.model("User", userSchema);

