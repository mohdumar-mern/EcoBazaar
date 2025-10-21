import mongoose from 'mongoose'
import validator from 'validator'
import crypto from 'crypto'

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"],
            maxlength: [30, "Name cannot exceed 30 characters"],
            minlength: [4, "Name should have more than 4 characters"]
        },
        email: {
            type: String,
            required: [true, "Please enter your email"],
            unique: true,
            validate: [validator.isEmail, "Please enter a valid email"]
        },
        password: {
            type: String,
            required: [true, "Please enter your password"],
            minlength: [6, "Password must be at least 6 characters"],
            select: false
        },
        avatar: {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        },
        role: {
            type: String,
            enum: { values: ['user', 'admin'], message: 'Please select a valid role' },
            default: 'user'
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date
    },
    { timestamps: true }
)

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 minutes

  return resetToken;
};

const User = mongoose.model("User", userSchema);
export default User;