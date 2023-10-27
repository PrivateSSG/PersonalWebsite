import { NextResponse } from "next/server";
import User from "@/libs/models/user";
import getConnect from "@/libs/connection";
export async function GET(req,{params}){
    const id = params.id;
    await getConnect()
    const user = await User.findById(id)
    return NextResponse.json({user})
}
export async function DELETE(req,{params}){
    const id = params.id;
    await getConnect();
    const user = await User.findByIdAndDelete(id)
    return NextResponse.json({user})
}