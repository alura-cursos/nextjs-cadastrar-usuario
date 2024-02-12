"use client";
import React, { useState } from "react";
import { addUser } from "../actions";
export default function UserFormCS() {
  const [name, setname] = useState("");
  const [birthday, setbirthday] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("birthday", birthday);
    addUser(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="max-w-xl mx-auto px-4 w-full">
        <h1 className="text-4xl font-bold mb-5">Cadastrar um novo usuário</h1>
        <form action={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nome:
            </label>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              name="name"
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
              placeholder="Enter the name..."
            />
          </div>

          <div>
            <label
              htmlFor="birthday"
              className="block text-sm font-medium mb-2"
            >
              Aniversário:
            </label>
            <input
              type="date"
              onChange={(e) => setbirthday(e.target.value)}
              name="birthday"
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md"
          >
            Adiciona nome
          </button>
        </form>
      </div>
    </div>
  );
}
