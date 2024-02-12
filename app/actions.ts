"use server";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const addUser = async (data: FormData) => {
  // Logica para inserir os dados do form...
  const name = data.get("name")?.toString();
  const birthday = data.get("birthday")?.toString();
  const newUserBody = {
    name,
    birthday,
  };
  // Post user para o mock database
  await axios.post("http://localhost:3000/api/users", newUserBody);
  // Refetch User's
  revalidateTag("User");
  // Redireciona o user de volta para Homepage
  redirect("/");
};
