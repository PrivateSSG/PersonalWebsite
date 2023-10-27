import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  fatherName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  interested: Object,
  classInterest: {
    type: String,
    require: true,
  },
});

export default mongoose.models.user || mongoose.model('user',userSchema)