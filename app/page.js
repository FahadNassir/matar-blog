import Link from "next/link";
import BlogCard from "./components/BlogCard";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "The Tunnel No. 12 (Teaser)",
      description: "A glimpse into the hidden tunnels beneath reality.",
      date: "July 17, 2024",
    },
    {
      id: 2,
      title: "The Blue Lotus (Teaser)",
      description: "Unfolding myths in a modern world.",
      date: "June 28, 2024",
    },
    {
      id: 3,
      title: "Rewriting Forty Paperback",
      description: "A personal reflection reshaped in print.",
      date: "June 28, 2024",
    },
    {
      id: 4,
      title: "My First Book Since 2019",
      description: "Returning to the page with purpose.",
      date: "June 28, 2024",
    },
  ];
  
  return (
    <main className="min-h-screen bg-white text-black font-serif px-4 py-12 flex flex-col items-center text-center leading-snug">
      <nav className="flex gap-6 text-sm mb-10">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>

      <h1 className="text-3xl mb-2">Hi, I&apos;m M H MATAR</h1>
      <h2 className="text-xl mb-6">Enter my brain!</h2>

      <p className="max-w-xl text-base mb-6">
        <strong>About me in 3 seconds:</strong> Storyteller &amp; teacher.<br /><br />
        <strong>About me in 10 seconds:</strong> I write allegorical fables to tackle social and political issues facing our world today.<br /><br />
        <strong>Why I started writing?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="bg-black text-white rounded-md px-6 py-10 mb-12 w-full h-56 max-w-48">
        placeholder
      </div>

      <section className="mb-12">
        <h2 className="text-2xl mb-3">Blog</h2>
        <div className="space-y-2">
          <div className="flex items-center w-full">
            <span className="text-left">About Us</span>
            <span className="flex-grow border-t border-gray-300 mx-2"></span>
            <span className="text-right text-gray-500">Jul 28</span>
          </div>
          <div className="flex items-center w-full">
            <span className="text-left">Read more</span>
            <span className="flex-grow border-t border-gray-300 mx-2"></span>
            <span className="text-right text-gray-500">Jun 22</span>
          </div>
          <div className="flex items-center w-full">
            <span className="text-left">Diving Inwards</span>
            <span className="flex-grow border-t border-gray-300 mx-2"></span>
            <span className="text-right text-gray-500">Jul 25</span>
          </div>
          <div className="flex items-center w-full">
            <span className="text-left">Million Monkeys, Million Typewriters</span>
            <span className="flex-grow border-t border-gray-300 mx-2"></span>
            <span className="text-right text-gray-500">Jun 25</span>
          </div>
          <div className="flex items-center w-full">
            <span className="text-left">Tunnel 12</span>
            <span className="flex-grow border-t border-gray-300 mx-2"></span>
            <span className="text-right text-gray-500">Jul 25</span>
          </div>
          <div className="flex items-center w-full">
            <span className="text-left">The Pearl of the Sea</span>
            <span className="flex-grow border-t border-gray-300 mx-2"></span>
            <span className="text-right text-gray-500">Jul 25</span>
          </div>
          <div className="flex items-center w-full">
            <span className="text-left">Elixir of laughter</span>
            <span className="flex-grow border-t border-gray-300 mx-2"></span>
            <span className="text-right text-gray-500">Jul 25</span>
          </div>
        </div>
      </section>

      <section className="mt-12 text-center">
  <h2 className="text-2xl mb-4">Bookshelf</h2>
  <div className="flex flex-col items-center gap-6">
    {posts.map((post) => (
      <BlogCard key={post.id} post={post} />
    ))}
  </div>
</section>
    </main>
  );
}

