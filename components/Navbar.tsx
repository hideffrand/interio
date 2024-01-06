import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="w-full p-10 flex justify-between items-center absolute z-10">
      <h1 className="text-2xl font-bold">interio.</h1>
      <div className="hidden md:flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <button className="px-4 py-2 border bg-brown text-white border-brown rounded-full">
          Chat with Experts
        </button>
      </div>
      <div className="block md:hidden text-4xl">
        <IoMenu />
      </div>
    </nav>
  );
}
