import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b h-20 bg-green-200">Header</header>
      <main className="flex-grow bg-blue-300">Main Contain</main>
      <footer className="border-t h-40 bg-purple-200">Footer</footer>
    </div>
  );
}
