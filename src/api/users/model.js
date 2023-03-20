import mongoose from "mongoose";

const { Schema, model } = mongoose;

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String },
    bio: { type: String },
    title: { type: String },
    area: { type: String },
    image: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80",
    },
    experience: [],
    post: [],
  },
  { timestamps: true }
);

export default model("User", usersSchema);
