import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  street: { type: String, required: true },
  number: { type: Number, required: false },
  url_photo:{ type: String, required: false},
  location: { type: String, required: false}
}, { timestamps: true });

export default mongoose.model('Usuario', userSchema);
