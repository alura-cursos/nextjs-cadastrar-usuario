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
  // Redireciona o user de volta para Homepage
  redirect("/");
};

export default function UserFormSS() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="max-w-xl mx-auto px-4 w-full">
        <h1 className="text-4xl font-bold mb-5">Cadastrar usuário</h1>
        {/* Invocar a ação utilizando o atributo "action" */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nome:</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
              placeholder="Adicione o nome..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Aniversário:
            </label>
            <input
              type="date"
              name="birthday"
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 py-2 px-4 rounded-md"
          >
            Cadastrar usuário
          </button>
        </form>
      </div>
    </div>
  );
}
