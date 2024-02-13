import axios from "axios";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

const addUser = async (data: FormData) => {
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

  redirect("/");
};

export default function UserFormServerSide() {
  return (
    <article className="flex justify-center items-center h-screen bg-gray-900">
      <section className="max-w-xl mx-auto px-4 w-full">
        <h1 className="text-4xl font-bold text-white mb-5">
          Cadastrar usuário
        </h1>
        <form className="space-y-6 p-10 bg-gray-800 rounded-md">
          <div className="text-2xl font-bold text-white">Insira os dados:</div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Nome:
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-2 rounded-md bg-white border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-black"
              placeholder="Insira o nome..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Aniversário:
            </label>
            <input
              type="date"
              name="birthday"
              className="w-full p-2 rounded-md bg-white border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md"
          >
            Cadastrar usuário
          </button>
        </form>
      </section>
    </article>
  );
}
