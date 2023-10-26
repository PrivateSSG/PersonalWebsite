
import { NextResponse } from "next/server";

export async function GET(req) {
    return NextResponse.json({ msg: "its working" })
}

export async function POST(request) {
    return NextResponse.json({ msg: "POST Request" })
}

export async function GET(req){
    return NextResponse.json({msg})
}