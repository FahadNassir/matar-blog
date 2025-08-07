// import Link from "next/link";
// import BlogCard from "./components/BlogCard";

// export default function Home() {
//       const posts = [
//     {
//       id: 1,
//       title: "The Tunnel No. 12 (Teaser)",
//       description: "tunnel-12",
//       date: "July 17, 2024",
//     },
//     {
//       id: 2,
//       title: "The Blue Lotus (Teaser)",
//       desription: "blue-lotus",
//       date: "June 28, 2024",
//     },
//     {
//       id: 3,
//       title: "Rewriting Forty Paperback",
//       desription: "blue-lotus",
//       date: "June 28, 2024",
//     },
//     {
//       id: 4,
//       title: "My First Book Since 2019",
//       desription: "blue-lotus",
//       date: "June 28, 2024",
//     },
//   ];

//   return (
//     <main className="flex flex-col items-center w-1/2 bg-white mx-auto px-10">
//       <nav className="flex justify-between gap-3 mb-6">
//         <Link href="/" className="hover:underline">Home</Link>
//         <Link href="/about" className="hover:underline">About</Link>
//         <Link href="/contact" className="hover:underline">Contact</Link>
//       </nav>
//       <div className="mb-9 align-center gap-5 flex">
//         <span className="w-1/2">
//         <h1 className="text-3xl">Hi, I&apos;m M H MATAR</h1>
//         <h2 className="text-3xl">Enter my brain!</h2>
//         <p className="text-xl">
//           About me in 3 seconds: Storyteller & teacher.

//           About me in 10 seconds: I write allegorical fables to tackle social and political issues facing our world today.

//           Why I started writing?
//         </p>
//         </span>
//         <span className="w-1/2 rounded-xl bg-black">
//           placeholder
//         </span>
        
//       </div>  
//       <div className="mb-5">
//         <h1>Blog</h1>
//         <div>
//           <p>Diving Inwards----------------------25 jul</p>
//           <p>Million Monkeys, Million Typewriters--------------25 jun</p>
//         </div>
//       </div>
//       <div>
//         <h1>Bookshelf</h1>
//         <ul className="flex items-center gap-5">
//           {posts.map((post) => (
//             <BlogCard key={post.id} post={post} />
//           ))}
//         </ul>
//       </div>      
//     </main>
//   );
// }

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
      description: "blue-lotus",
      date: "June 28, 2024",
    },
    {
      id: 3,
      title: "Rewriting Forty Paperback",
      description: "blue-lotus",
      date: "June 28, 2024",
    },
    {
      id: 4,
      title: "My First Book Since 2019",
      description: "blue-lotus",
      date: "June 28, 2024",
    },
  ];

  return (
    <main className="flex flex-col items-center w-full max-w-5xl bg-white mx-auto px-6 py-10">
      <nav className="flex gap-6 text-lg mb-10">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>

      <section className="flex flex-col md:flex-row gap-10 mb-16 w-full">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">Hi, I&apos;m M H MATAR</h1>
          <h2 className="text-2xl mb-4">Enter my brain!</h2>
          <p className="text-lg leading-relaxed">
            <strong>About me in 3 seconds:</strong> Storyteller & teacher.<br /><br />
            <strong>About me in 10 seconds:</strong> I write allegorical fables to tackle social and political issues facing our world today.<br /><br />
            <strong>Why I started writing?</strong>
          </p>
        </div>
        <div className="flex-1 bg-black rounded-xl h-60 flex items-center justify-center text-white text-xl">
          Placeholder
        </div>
      </section>

      <section className="mb-16 w-full">
        <h1 className="text-2xl font-semibold mb-4">Blog</h1>
        <div className="text-base text-gray-700 space-y-2">
          <p>Diving Inwards — <span className="text-gray-500">25 Jul</span></p>
          <p>Million Monkeys, Million Typewriters — <span className="text-gray-500">25 Jun</span></p>
        </div>
      </section>

      <section className="w-full">
        <h1 className="text-2xl font-semibold mb-4">Bookshelf</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
