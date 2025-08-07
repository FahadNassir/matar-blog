import Link from "next/link";
import BlogCard from "./components/BlogCard";

export default function Home() {
      const posts = [
    {
      id: 1,
      title: "The Tunnel No. 12 (Teaser)",
      description: "tunnel-12",
      date: "July 17, 2024",
    },
    {
      id: 2,
      title: "The Blue Lotus (Teaser)",
      desription: "blue-lotus",
      date: "June 28, 2024",
    },
    {
      id: 3,
      title: "Rewriting Forty Paperback",
      desription: "blue-lotus",
      date: "June 28, 2024",
    },
    {
      id: 4,
      title: "My First Book Since 2019",
      desription: "blue-lotus",
      date: "June 28, 2024",
    },
  ];

  return (
    <main className="flex flex-col items-center w-1/2 bg-white mx-auto px-10">
      <nav className="flex justify-between gap-3 mb-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
      <div className="mb-9 align-center gap-5 flex">
        <span className="w-1/2">
        <h1 className="text-3xl">Hi, I&apos;m M H MATAR</h1>
        <h2 className="text-3xl">Enter my brain!</h2>
        <p className="text-xl">
          About me in 3 seconds: Storyteller & teacher.

          About me in 10 seconds: I write allegorical fables to tackle social and political issues facing our world today.

          Why I started writing?
        </p>
        </span>
        <span className="w-1/2 rounded-xl bg-black">
          placeholder
        </span>
        
      </div>  
      <div className="mb-5">
        <h1>Blog</h1>
        <div>
          <p>Diving Inwards----------------------25 jul</p>
          <p>Million Monkeys, Million Typewriters--------------25 jun</p>
        </div>
      </div>
      <div>
        <h1>Bookshelf</h1>
        <ul className="flex items-center gap-5">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </ul>
      </div>      
    </main>
  );
}
