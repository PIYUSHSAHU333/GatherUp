import mongoose from "mongoose";
import bcrypt from "bcrypt"
const schema = mongoose.Schema;

const userSchema = new schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true
    }
});
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  });
  userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  const user = mongoose.model("User", userSchema);
  export default user;