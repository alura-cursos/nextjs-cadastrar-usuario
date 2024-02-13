import React from "react";
import { User } from "../lib/types";

export default async function UserList() {
  const users = await fetch("http://localhost:3000/api/users", {
    next: { tags: ["User"] },
  });

  const { data } = await users.json();

  return (
    <div className="max-w-xl mx-auto pt-10">
      <h1 className="text-4xl font-bold mb-5">Lista de usuários</h1>
      <ul>
        {data.map((user: User) => (
          <li
            key={user.id}
            className="bg-gray-800 p-4 rounded-lg mb-2 flex justify-between"
          >
            <div>{user.name}</div>
            <div className="bg-purple-500 text-gray-900 px-2 py-1 rounded text-sm text-white">
              {user.birthday}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
