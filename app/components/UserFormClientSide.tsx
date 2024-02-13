"use client";
import React, { useState } from "react";
import { addUser } from "../actions";

export default function UserFormCS() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("birthday", birthday);
    addUser(formData);
  };

  return (
    <article className="flex justify-center items-center h-screen bg-gray-900">
      <section className="max-w-xl mx-auto px-4 w-full">
        <h1 className="text-4xl font-bold mb-5">Cadastrar usuário</h1>
        <form
          action={handleSubmit}
          className="space-y-6 p-10 bg-gray-800 rounded-md"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-white font-medium mb-1"
            >
              Nome:
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="w-full p-2 rounded-md bg-white border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-black"
              placeholder="Insira o nome..."
            />
          </div>

          <div>
            <label
              htmlFor="birthday"
              className="block text-sm text-white font-medium mb-2"
            >
              Aniversário:
            </label>
            <input
              type="date"
              onChange={(e) => setBirthday(e.target.value)}
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
