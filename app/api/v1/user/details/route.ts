import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    username: "john_doe",
    email: "john@gmail.com",
  });
}

export function POST() {
  return NextResponse.json({
    message: "This is a POST request",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "This is a DELETE request",
  });
}
