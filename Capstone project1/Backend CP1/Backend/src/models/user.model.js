import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minlength: 3,
            maxlength: 30,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,

        },
        
        password: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 45,
        },

        

    },
    
    {
        timestamps: true
    }
)

//before saving any password, we will hash it
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);

    next();
});

//compare passwords
userSchema.methods.comparePassword = async function (Password) {
    return await bcrypt.compare(Password, this.password);
};
export const User = mongoose.model("User", userSchema);