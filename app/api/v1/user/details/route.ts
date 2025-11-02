import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    username: "john_doe",
    email: "john@gmail.com",
  });
}
