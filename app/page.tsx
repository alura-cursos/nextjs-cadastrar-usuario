import Link from "next/link";
import UserList from "./components/UserList";

export default function Home() {
  return (
    <main className="">
      <Link
        href="/user/create"
        className="block mx-auto text-1xl font-bold mb-5 w-1/2 mt-8 w-80 text-center bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        Cadastrar novo usuário
      </Link>
      <UserList />
    </main>
  );
}
