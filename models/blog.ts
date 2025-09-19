import mongoose, { Schema, Document, models } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  author: string;
  image?: string;
  createdAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Prevent recompiling the model in dev
export default models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
