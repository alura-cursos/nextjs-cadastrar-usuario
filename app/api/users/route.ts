import fs from "fs";
import { NextRequest } from "next/server";
import path from "path";
import { User } from "@/app/lib/types";
export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), "public", "data.json");

  const fileContents = fs.readFileSync(filePath, "utf8");

  const data = JSON.parse(fileContents);

  return Response.json({ data });
}
export async function POST(request: NextRequest) {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const currentData = JSON.parse(fileContents);
  const highestId = currentData.reduce(
    (maxId: number, item: User) => Math.max(maxId, item.id),
    0
  );
  const data: User = await request.json();
  const newUser = {
    id: highestId + 1,
    name: data.name,
    birthday: data.birthday,
  };
  currentData.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
  return Response.json({ status: 201, message: "Task added successfully!" });
}
