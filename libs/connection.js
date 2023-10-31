import mongoose from "mongoose";

async function getConnect() {
  try {
    await mongoose.connect("mongodb+srv://privatessg4:privatessg4@cluster0.lfpsz0z.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
}
export default getConnect;