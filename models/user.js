
import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email_or_phone: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const User = models?.User ? models?.User : mongoose.model("User", userSchema);
export default User;
