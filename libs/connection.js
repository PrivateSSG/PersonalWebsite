import mongoose from "mongoose";

async function getConnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/SchoolProject");
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
}
export default getConnect;