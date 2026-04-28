import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    emiail: String,
  });

export default mongoose.models.User || mongoose.model("User", userSchema);
 