import { NextResponse } from "next/server";
import getConnect from "@/libs/connection";
import User from "@/libs/models/user";
export async function GET(req) {
  await getConnect();
  let user = await User.find();
  return NextResponse.json(user);
}
export async function POST(request) {
  let { name, fatherName, email,interested, phoneNumber, classInterest } =
    await request.json();
  try {
    await getConnect();
    let user = await User.create({
      name,
      fatherName,
      email,
      phoneNumber,
      interested,
      classInterest,
    });
    const result = await user.save();
    return NextResponse.json({ messge: "User Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
