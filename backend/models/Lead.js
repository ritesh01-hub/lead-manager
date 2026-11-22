
import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must contain at least 2 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email",
      ],
    },

    phone: {
      type: String,
      required: [true, "Phone is required"],
      trim: true,
      match: [
        /^\+?[0-9\s-]{7,15}$/,
        "Please enter a valid phone number",
      ],
    },

    company: {
      type: String,
      required: [true, "Company is required"],
      trim: true,
    },

    source: {
      type: String,
      required: [true, "Source is required"],
      enum: [
        "Website",
        "Referral",
        "LinkedIn",
        "Cold Call",
        "Advertisement",
        "Other",
      ],
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "Qualified", "Lost"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;
