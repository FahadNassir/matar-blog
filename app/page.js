// import Link from "next/link";
// import BlogCard from "./components/BlogCard";
// import Footer from "./components/Footer";
// import Image from "next/image";

// export default function Home() {
//   const posts = [
//     {
//       id: 1,
//       title: "The Tunnel No. 12 (Teaser)",
//       description: "A glimpse into the hidden tunnels beneath reality.",
//       date: "July 17, 2024",
//     },
//     {
//       id: 2,
//       title: "The Blue Lotus (Teaser)",
//       description: "Unfolding myths in a modern world.",
//       date: "June 28, 2024",
//     },
//     {
//       id: 3,
//       title: "Rewriting Forty Paperback",
//       description: "A personal reflection reshaped in print.",
//       date: "June 28, 2024",
//     },
//     {
//       id: 4,
//       title: "My First Book Since 2019",
//       description: "Returning to the page with purpose.",
//       date: "June 28, 2024",
//     },
//   ];
  
//   return (
//     <main className="min-h-screen bg-white text-black font-serif px-4 py-12 flex flex-col items-center text-center leading-snug">
//       <div className="max-w-xl w-full mx-auto">
//         <nav className="flex gap-6 mb-10 justify-center">
//           <Link href="/" className="hover:underline">Home</Link>
//           <Link href="/about" className="hover:underline">About</Link>
//           <Link href="/contact" className="hover:underline">Contact</Link>
//         </nav>

//         <h1 className="text-2xl mb-2 font-semibold">Hi, I&apos;m M H MATAR</h1>
//         <h2 className="text-lg mb-6">Enter my brain!</h2>

//         <p className="max-w-xl mb-6 mx-auto">
//           <strong>About me in 3 seconds:</strong> Storyteller &amp; teacher.<br /><br />
//           <strong>About me in 10 seconds:</strong> I write allegorical fables to tackle social and political issues facing our world today.<br /><br />
//           <strong>Why I started writing?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </p>

//         <div className="bg-black text-white rounded-md px-6 py-10 mb-12 w-full max-w-64 h-56 flex items-center justify-center">
//             <Image
//               src="/matar.jpeg" 
//               alt="Avatar"
//               width={300}
//               height={300}
//           />
//         </div>

//         <section className="mb-12">
//           <h2 className="text-2xl mb-3 font-semibold">Blog</h2>
//           <div className="space-y-2">
//             <div className="flex items-center w-full">
//               <span className="text-left">About Us</span>
//               <span className="flex-grow border-t border-gray-300 mx-2"></span>
//               <span className="text-right text-gray-500">Jul 28</span>
//             </div>
//             <div className="flex items-center w-full">
//               <span className="text-left">Read more</span>
//               <span className="flex-grow border-t border-gray-300 mx-2"></span>
//               <span className="text-right text-gray-500">Jun 22</span>
//             </div>
//             <div className="flex items-center w-full">
//               <span className="text-left">Diving Inwards</span>
//               <span className="flex-grow border-t border-gray-300 mx-2"></span>
//               <span className="text-right text-gray-500">Jul 25</span>
//             </div>
//             <div className="flex items-center w-full">
//               <span className="text-left">Million Monkeys, Million Typewriters</span>
//               <span className="flex-grow border-t border-gray-300 mx-2"></span>
//               <span className="text-right text-gray-500">Jun 25</span>
//             </div>
//             <div className="flex items-center w-full">
//               <span className="text-left">Tunnel 12</span>
//               <span className="flex-grow border-t border-gray-300 mx-2"></span>
//               <span className="text-right text-gray-500">Jul 25</span>
//             </div>
//             <div className="flex items-center w-full">
//               <span className="text-left">The Pearl of the Sea</span>
//               <span className="flex-grow border-t border-gray-300 mx-2"></span>
//               <span className="text-right text-gray-500">Jul 25</span>
//             </div>
//             <div className="flex items-center w-full">
//               <span className="text-left">Elixir of laughter</span>
//               <span className="flex-grow border-t border-gray-300 mx-2"></span>
//               <span className="text-right text-gray-500">Jul 25</span>
//             </div>
//           </div>
//         </section>

//         <section className="mt-12 text-center">
//           <h2 className="text-2xl mb-4 font-semibold">Bookshelf</h2>
//           <div className="flex flex-col items-center gap-6">
//             {posts.map((post) => (
//               <BlogCard key={post.id} post={post} />
//             ))}
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </main>
//   );
// }


// import Link from "next/link";
// import BlogCard from "./components/BlogCard";
// import Footer from "./components/Footer";
// import Image from "next/image";

// export default function Home() {
//   const posts = [
//     {
//       id: 1,
//       title: "The Tunnel No. 12 (Teaser)",
//       description: "A glimpse into the hidden tunnels beneath reality.",
//       date: "July 17, 2024",
//     },
//     {
//       id: 2,
//       title: "The Blue Lotus (Teaser)",
//       description: "Unfolding myths in a modern world.",
//       date: "June 28, 2024",
//     },
//     {
//       id: 3,
//       title: "Rewriting Forty Paperback",
//       description: "A personal reflection reshaped in print.",
//       date: "June 28, 2024",
//     },
//     {
//       id: 4,
//       title: "My First Book Since 2019",
//       description: "Returning to the page with purpose.",
//       date: "June 28, 2024",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-white text-black font-serif px-4 py-12 flex flex-col items-center text-center leading-snug">
//       <div className="max-w-xl w-full mx-auto">
//         <nav className="flex gap-6 mb-10 justify-center">
//           <Link href="/" className="hover:underline">Home</Link>
//           <Link href="/about" className="hover:underline">About</Link>
//           <Link href="/blog" className="hover:underline">Blog</Link>
//           <Link href="#footer">Contact</Link>
//         </nav>

//         <h1 className="text-2xl mb-2 font-semibold">Hi, I&apos;m M H MATAR</h1>
//         <h2 className="text-lg mb-6">Enter my brain!</h2>

//         <p className="max-w-xl mb-6 mx-auto">
//           <strong>About me in 3 seconds:</strong> Storyteller &amp; teacher.<br /><br />
//           <strong>About me in 10 seconds:</strong> I write allegorical fables to tackle social and political issues facing our world today.<br /><br />
//           <strong><Link href="/about" >Why I started writing?</Link></strong> 
//         </p>

//         <div className="text-white rounded-md px-6 py-10 mb-12 w-full flex items-center justify-center">
//           <Image
//             src="/matar.jpeg"
//             alt="Avatar"
//             width={300}
//             height={400}
//           />
//         </div>

//         <section className="mb-12">
//           <div className="flex justify-between">
//             <span><h2 className="text-2xl mb-3 font-semibold">Blog</h2></span>
//             <span>view all <Link href="/blog" className="inline-block mb-6 text-2xl hover:underline" aria-label="to about page">←</Link></span>
//           </div>
          
//           <div className="space-y-2">
//             {[
//               { title: "About Us", date: "Jul 28" },
//               { title: "Read more", date: "Jun 22" },
//               { title: "Diving Inwards", date: "Jul 25" },
//               { title: "Million Monkeys, Million Typewriters", date: "Jun 25" },
//               { title: "Tunnel 12", date: "Jul 25" },
//               { title: "The Pearl of the Sea", date: "Jul 25" },
//               { title: "Elixir of laughter", date: "Jul 25" },
//             ].map((item, index) => (
//               <div key={index} className="flex items-center w-full">
//                 <span className="text-left">{item.title}</span>
//                 <span className="flex-grow border-t border-gray-300 mx-2"></span>
//                 <span className="text-right text-gray-500">{item.date}</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="mt-12 text-center">
//           <div className="flex justify-between">
//             <span>
//               <h2 className="text-2xl mb-4 font-semibold">Bookshelf</h2>
//             </span>
//             <span>
//               view all
//             <Link href="/bookshelf" className="inline-block mb-6 text-2xl hover:underline" aria-label="to bookshelf">←</Link>
//             </span>
//           </div>
//           <div className="flex flex-wrap ml-5 items-center gap-6">
//             {posts.map((post) => (
//               <BlogCard key={post.id} post={post} />
//             ))}
//           </div>
//         </section>
//       </div>
//       <div id="footer">
//         <Footer />
//       </div>
//     </main>
//   );
// }


'use client';
import { useState } from "react";
import Link from "next/link";
import BlogCard from "./components/BlogCard";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <main className="min-h-screen bg-white text-black font-serif px-6 py-16 flex flex-col items-center text-center leading-normal text-lg">
      <div className="max-w-3xl w-full mx-auto">
        <nav className="flex gap-6 mb-12 justify-center items-center relative">
          <Link href="/" className="hover:underline text-xl">Home</Link>
          <Link href="/about" className="hover:underline text-xl">About</Link>
          <Link href="/blog" className="hover:underline text-xl">Blog</Link>
          <Link href="#footer" className="hover:underline text-xl">Contact</Link>

          {/* Hamburger */}
          <div className="relative">
            <button
              className="ml-2 focus:outline-none text-xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-black text-white py-2 px-4 rounded shadow-md z-10 text-left">
                <Link href="/filmin" className="block py-1 hover:underline">Filmin’ a book</Link>
                <Link href="/now" className="block py-1 hover:underline">Now</Link>
                <Link href="/snippets" className="block py-1 hover:underline">Snippets</Link>
              </div>
            )}
          </div>
        </nav>

        <h1 className="text-3xl mb-3 font-semibold">Hi, I&apos;m M H MATAR</h1>
        <h2 className="text-xl mb-8">Enter my brain!</h2>

        <p className="max-w-2xl mb-10 mx-auto leading-relaxed">
          <strong>About me in 3 seconds:</strong> Storyteller &amp; teacher.<br /><br />
          <strong>About me in 10 seconds:</strong> I write allegorical fables to tackle social and political issues facing our world today.<br /><br />
          <strong><Link href="/about" className="underline">Why I started writing?</Link></strong>
        </p>

        <div className="rounded-md px-6 py-10 mb-16 w-full flex items-center justify-center">
          <Image
            src="/matar.jpeg"
            alt="Avatar"
            width={320}
            height={420}
          />
        </div>

        {/* Blog Section */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Blog</h2>
            <Link href="/blog" className="text-xl hover:underline">
              view all →
            </Link>
          </div>

          <div className="space-y-3">
            {[
              { title: "About Us", date: "Jul 28" },
              { title: "Read more", date: "Jun 22" },
              { title: "Diving Inwards", date: "Jul 25" },
              { title: "Million Monkeys, Million Typewriters", date: "Jun 25" },
              { title: "Tunnel 12", date: "Jul 25" },
              { title: "The Pearl of the Sea", date: "Jul 25" },
              { title: "Elixir of laughter", date: "Jul 25" },
            ].map((item, index) => (
              <div key={index} className="flex items-center w-full text-lg">
                <span className="text-left">{item.title}</span>
                <span className="flex-grow border-t border-gray-300 mx-2"></span>
                <span className="text-right text-gray-500">{item.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bookshelf Section */}
        <section className="mt-16 text-center">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Bookshelf</h2>
            <Link href="/bookshelf" className="text-xl hover:underline">
              view all →
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>

      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
