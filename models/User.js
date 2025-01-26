import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    cnic: {
      type: String,
      required: true,
      match: /^\d{5}-\d{7}-\d{1}$/,
    },
    name: { type: String, required: true },
    assistanceStatus: { type: String, default: "null" },
    remarks: { type: String, default: "null" },
    count: { type: Number, default: "0" },
    token: { type: String, required: true, default: "null" },
    contactDetails: {
      type: String,
      required: true,
      match: /^\d{10,15}$/,
    },
    address: { type: String, required: true },
    purpose: {
      type: String,
      required: true,
      enum: ["Rasan", "Bijli", "Pani", "Education", "Medical"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
