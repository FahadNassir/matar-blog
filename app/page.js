// 'use client';

// import { useState } from "react";
// import Link from "next/link";
// import BlogCard from "./components/BlogCard";
// import Footer from "./components/Footer";
// import Image from "next/image";


// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const posts = [
//     {
//       id: 1,
//       image: "/chaplin.jpg",
//       title: "Chadi chaplin, Palestinian Graphic Novel(coming soon)",
//       description: "Chadi is an amateur comedian, living in a Palestinian refugee camp in the city of Bethlehem, who dreams of becoming",
//       date: "July 17, 2024",
//     },
//     {
//       id: 2,
//       image:"/blueLotus.jpg",
//       title: "Blue Lotus (-page Teaser)",
//       description: "Unfolding myths in a modern worldStory originally written by M.H. Matar. Illustrated by Luka Japaridze. All rights reserved. © 2025 M.H. Matar & Luka",
//       date: "June 28, 2024",
//     },
//     {
//       id: 3,
//       image: "/blog3.webp",
//       title: "Rewriting Forty Paperback",
//       description: "DEDICATION This book is dedicated to those who have journeyed with me through the landscapes of the heart and the",
//       date: "June 28, 2024",
//     },
//     {
//       id: 4,
//       image:"/blog4.jpg",
//       title: "My First Book Since 2019. Akiak(Out in 72 hours",
//       description: "It’s been five years since my last book, The Pigeon Whisperer, was published—five years of stories waiting to",
//      date: "June 28, 2024",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-white text-black font-serif px-6 py-16 flex flex-col items-center text-center leading-normal text-lg">
//       <div className="max-w-3xl w-full mx-auto">

//         {/* Nav */}
//         <nav className="relative flex justify-center mb-12">
//           <div className="relative">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-xl hover:underline focus:outline-none"
//             >
//               MENU
//             </button>
//             {menuOpen && (
//               <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-black text-white py-3 px-6 rounded-md shadow-md z-10 flex flex-col space-y-2 text-center">
//                 <Link href="/" className="hover:underline">Home</Link>
//                 <Link href="/about" className="hover:underline">About</Link>
//                 <Link href="/filmin" className="hover:underline">Filmin’ a book</Link>
//                 <Link href="/now" className="hover:underline">Now</Link>
//                 <Link href="/snippets" className="hover:underline">Snippets</Link>
//                 <Link href="/blog" className="hover:underline">Blog</Link>
//                 <Link href="/bookshelf" className="hover:underline">Bookshelf</Link>
//                 <Link href="#footer" className="hover:underline">Contact</Link>
//               </div>
//             )}
//           </div>
//         </nav>

//         <h1 className="text-3xl mb-3 font-semibold">M H Matar <br /> Author & Storyteller</h1>
//         <h2 className="text-xl mb-8">Enter my brain!</h2>

//         {/* <p className="max-w-2xl mb-10 mx-auto leading-relaxed">
//           <strong>About me in 3 seconds:</strong> Storyteller &amp; teacher.<br /><br />
//           <strong>About me in 10 seconds:</strong> I write allegorical fables to tackle social and political issues facing our world today.<br /><br />
//           <strong><Link href="/about" className="underline">Why I started writing?</Link></strong>
//         </p>

//         <div className="rounded-md px-6 py-10 mb-16 w-full flex items-center justify-center">
//           <Image
//             src="/matar.jpeg"
//             alt="Avatar"
//             width={320}
//             height={420}
//           />
//         </div> */}

       
// <section className="mb-20">
//   <div className="flex justify-between items-center mb-4">
//     <h2 className="text-2xl font-semibold">Blog</h2>
//     <Link href="/blog" className="text-xl hover:underline">
//       view all →
//     </Link>
//   </div>

//   <div className="space-y-10">
//     {/* Diving Inwards */}
//     <div className="text-left bg-gray-50 rounded-lg p-6 shadow-sm">
//       <div className="flex items-center gap-4 mb-2">
//         <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Poem</span>
//       </div>
//       <h3 className="font-bold text-lg mb-1 text-center">Diving Inwards</h3>
//       <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
//       <p className="whitespace-pre-line">
//         Diving inwards like a dream, like an ocean.
//         It’s devotion.
//         The word is a second chance — your second cup of coffee, your rebirth.
//         Diving inwards, where time dilutes:
//         Ten hours become one, and one becomes eternity.
//         Breaking the shallowness of boredom and routine.
//         Diving inwards — to you, to your love, to the child in me.
//         Diving inwards while climbing up those ancient stairs.
//         I freeze — did a moment pass by?
//         I’m still the child in me.
//         I love him, and he loves me.
//         I dream with him, and he carries me.
//         You are still the child in me.
//         The house never changed.
//         People did: they burnt words.
//         I live with the flame.
//         Diving inwards; infinitely.
//       </p>
//       <p className="text-center text-gray-500 text-xs mt-4">Jul 25, 2025</p>
//     </div>

//     {/* Million Monkeys, Million Typewriters */}
//     <div className="text-left bg-gray-50 rounded-lg p-6 shadow-sm">
//       <div className="flex items-center gap-4 mb-2">
//         <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">Diary</span>
//       </div>
//       <h3 className="font-bold text-lg mb-1 text-center">Million Monkeys, Million Typewriters</h3>
//       <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
//       <p className="whitespace-pre-line">
//         It’s about the magic and randomness of the universe. I want to see the beauty, the magic, and the randomness of writing and storytelling. It’s like opening a world—unfolding an infinite stream of rivers and clouds.

//         Loving life, finding peace in words. Just letting those monkeys dance on the typewriters, unveiling what’s in our souls. Unveiling the temporary time we have on earth—goodness and love, the precious things we hold as humans. Why were we created? Why must we approach life with a sense of unurgency—moment to moment?

//         We de-stress. We live. We enjoy life. We savor the luxury of not going anywhere—just our hands moving on the page. Just our beautiful million monkeys, telling us: fuck money, fuck pride, fuck fame.
//         We are here to create the dance for you.
//         You have no idea. You never know. God has a plan for you. God brought us here to give you peace, joy, and love.

//         Help us dance a million times.
//         Help your soul be where it needs to be.
//       </p>
//       <p className="text-center text-gray-500 text-xs mt-4">Jun 25, 2025</p>
//     </div>

//     {/* About Us */}
//     <div className="text-left bg-gray-50 rounded-lg p-6 shadow-sm">
//       <div className="flex items-center gap-4 mb-2">
//         <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">About</span>
//       </div>
//       <h3 className="font-bold text-lg mb-1 text-center">About Us</h3>
//       <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
//       <p className="whitespace-pre-line">
//         About Motaz
//         When I write, I’m not trying to make a graphic novel. I’m trying to show something that needs to be seen.

//         I can’t finish a panel unless it feels right—like rhythm, silence, and cinema in one frame.

//         Filmin’ a Book is where that all comes together. Truth told through images. Satire as survival. Memory as rebellion. A laugh that hits harder than a weapon.

//         About Luka
//         I didn’t draw just to draw. I was drawn to the quiet power of images. A gesture. A shadow. A frame that feels like a memory. That’s what brought me to Filmin’ a Book.

//         I’ve worked on walls, posters, pages. But here, I’m building worlds. Turning words into light and silence. Mood into memory. Sometimes, giving a face to injustice.

//         Art school gave me technique. Storytelling gave it meaning. Style changes—vintage or bold, poetic or sharp—but I always ask: what should this moment feel like?

//         Working with Motaz, I found something rare. A place where art resists. Where satire is sharp. Where every frame speaks. Every image we make tries to stay with you—not just on the page, but in your mind.
//       </p>
//       <p className="text-center text-gray-500 text-xs mt-4">Jun 23, 2025</p>
//     </div>

//     {/* Tunnel 12 */}
//     <div className="text-left bg-gray-50 rounded-lg p-6 shadow-sm">
//       <div className="flex items-center gap-4 mb-2">
//         <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">Fiction</span>
//       </div>
//       <h3 className="font-bold text-lg mb-1 text-center">Tunnel 12</h3>
//       <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
//       <p className="whitespace-pre-line">
//         Tunnel 12 is a dreamlike, intergenerational epic that tunnels through decades of memory, war, and longing, linking 1958 Berlin, 1961 Palestine, and the present-day United States.

//         The story centers on Andrea, a Berlin tailor entangled in a doomed Cold War love affair; Abla, a Palestinian woman caught between her father's trauma and her own forbidden romance; and Emma, a modern-day American student who stumbles upon their buried histories through a book, and a bloodline, she didn’t know she belonged to.

//         As trains, tunnels, and border walls echo through time, each woman is trapped in her own form of isolation, emotional, political, physical. Andrea is locked inside her shop as the Berlin Wall rises outside; Abla is led by her father through a suffocating tunnel under siege; and Emma boards a plane to trace back the silent sorrows etched into her family’s past.

//         Through symbolic crossings and surreal encounters, these women’s stories fold into each other like shadows across time zones, stitching together a haunting mosaic of displacement, inherited memory, and the fragility of love under occupation.

//         Blending poetic realism, political metaphor, and lyrical dialogue, Tunnel 12 is less about resolution than revelation. It asks: what if the tunnels we escape into are the same ones that connect us? And when the walls fall, or flood, who do we become on the other side?

//         Coming Soon
//       </p>
//       <p className="text-center text-gray-500 text-xs mt-4">Jun 22, 2025</p>
//     </div>
//   </div>
// </section>


//         {/* Bookshelf Section */}
//         <section className="mt-16 text-center">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-semibold">Bookshelf</h2>
//             <Link href="/bookshelf" className="text-xl hover:underline">
//               view all →
//             </Link>
//           </div>
//           <div className="flex flex-wrap justify-center gap-6">
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
      image: "/chaplin.jpg",
      title: "Chadi chaplin, Palestinian Graphic Novel(coming soon)",
      description: "Chadi is an amateur comedian, living in a Palestinian refugee camp in the city of Bethlehem, who dreams of becoming",
      date: "July 17, 2024",
    },
    {
      id: 2,
      image:"/blueLotus.jpg",
      title: "Blue Lotus (-page Teaser)",
      description: "Unfolding myths in a modern worldStory originally written by M.H. Matar. Illustrated by Luka Japaridze. All rights reserved. © 2025 M.H. Matar & Luka",
      date: "June 28, 2024",
    },
    {
      id: 3,
      image: "/blog3.webp",
      title: "Rewriting Forty Paperback",
      description: "DEDICATION This book is dedicated to those who have journeyed with me through the landscapes of the heart and the",
      date: "June 28, 2024",
    },
    {
      id: 4,
      image:"/blog4.jpg",
      title: "My First Book Since 2019. Akiak(Out in 72 hours",
      description: "It has been five years since my last book, The Pigeon Whisperer, was published—five years of stories waiting to",
      date: "June 28, 2024",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-serif px-6 py-16 flex flex-col items-center text-center leading-normal text-lg">
      <div className="max-w-3xl w-full mx-auto">

        {/* Nav */}
        <nav className="relative flex justify-center mb-12">
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl hover:underline focus:outline-none"
            >
              MENU
            </button>
            {menuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-black text-white py-3 px-6 rounded-md shadow-md z-10 flex flex-col space-y-2 text-center">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/filmin" className="hover:underline">Filmin&apos; a book</Link>
                <Link href="/now" className="hover:underline">Now</Link>
                <Link href="/snippets" className="hover:underline">Snippets</Link>
                <Link href="/blog" className="hover:underline">Blog</Link>
                <Link href="/bookshelf" className="hover:underline">Bookshelf</Link>
                <Link href="#footer" className="hover:underline">Contact</Link>
              </div>
            )}
          </div>
        </nav>

        <h1 className="text-3xl mb-3 font-semibold">M H Matar <br /> Author &amp; Storyteller</h1>
      <h2 className="text-xl mb-8">Enter my brain!</h2>
       
<section className="mb-20">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-semibold">Blog</h2>
    <Link href="/blog" className="text-xl hover:underline">
      view all &rarr;
    </Link>
  </div>

  <div className="space-y-10">
    {/* Diving Inwards */}
    <div className="text-left bg-gray-50 rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-2">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Poem</span>
      </div>
      <h3 className="font-bold text-lg mb-1 text-center">Diving Inwards</h3>
      <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
      <p className="whitespace-pre-line">
        Diving inwards like a dream, like an ocean.
        It&apos;s devotion.
        The word is a second chance &mdash; your second cup of coffee, your rebirth.
        Diving inwards, where time dilutes:
        Ten hours become one, and one becomes eternity.
        Breaking the shallowness of boredom and routine.
        Diving inwards &mdash; to you, to your love, to the child in me.
        Diving inwards while climbing up those ancient stairs.
        I freeze &mdash; did a moment pass by?
        I&apos;m still the child in me.
        I love him, and he loves me.
        I dream with him, and he carries me.
        You are still the child in me.
        The house never changed.
        People did: they burnt words.
        I live with the flame.
        Diving inwards; infinitely.
      </p>
      <p className="text-center text-gray-500 text-xs mt-4">Jul 25, 2025</p>
    </div>

    {/* Million Monkeys, Million Typewriters */}
    <div className="text-left bg-gray-50 rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-2">
        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">Diary</span>
      </div>
      <h3 className="font-bold text-lg mb-1 text-center">Million Monkeys, Million Typewriters</h3>
      <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
      <p className="whitespace-pre-line">
        It&apos;s about the magic and randomness of the universe. I want to see the beauty, the magic, and the randomness of writing and storytelling. It&apos;s like opening a world&mdash;unfolding an infinite stream of rivers and clouds.

        Loving life, finding peace in words. Just letting those monkeys dance on the typewriters, unveiling what&apos;s in our souls. Unveiling the temporary time we have on earth&mdash;goodness and love, the precious things we hold as humans. Why were we created? Why must we approach life with a sense of unurgency&mdash;moment to moment?

        We de-stress. We live. We enjoy life. We savor the luxury of not going anywhere&mdash;just our hands moving on the page. Just our beautiful million monkeys, telling us: fuck money, fuck pride, fuck fame.
        We are here to create the dance for you.
        You have no idea. You never know. God has a plan for you. God brought us here to give you peace, joy, and love.

        Help us dance a million times.
        Help your soul be where it needs to be.
      </p>
      <p className="text-center text-gray-500 text-xs mt-4">Jun 25, 2025</p>
    </div>

    {/* About Us */}
    <div className="text-left bg-gray-50 rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-2">
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">About</span>
      </div>
      <h3 className="font-bold text-lg mb-1 text-center">About Us</h3>
      <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
      <p className="whitespace-pre-line">
        <Link href="/aboutUs"> click here to read about us &rarr; </Link>
      </p>  
      <p className="text-center text-gray-500 text-xs mt-4">Jun 23, 2025</p>
    </div>

    {/* Tunnel 12 */}
    <div className="text-left bg-gray-50 rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-2">
        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">Fiction</span>
      </div>
      <h3 className="font-bold text-lg mb-1 text-center">Tunnel 12</h3>
      <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
      <p className="whitespace-pre-line">
        Tunnel 12 is a dreamlike, intergenerational epic that tunnels through decades of memory, war, and longing, linking 1958 Berlin, 1961 Palestine, and the present-day United States.

        The story centers on Andrea, a Berlin tailor entangled in a doomed Cold War love affair; Abla, a Palestinian woman caught between her father&apos;s trauma and her own forbidden romance; and Emma, a modern-day American student who stumbles upon their buried histories through a book, and a bloodline, she didn&apos;t know she belonged to.

        As trains, tunnels, and border walls echo through time, each woman is trapped in her own form of isolation, emotional, political, physical. Andrea is locked inside her shop as the Berlin Wall rises outside; Abla is led by her father through a suffocating tunnel under siege; and Emma boards a plane to trace back the silent sorrows etched into her family&apos;s past.

        Through symbolic crossings and surreal encounters, these women&apos;s stories fold into each other like shadows across time zones, stitching together a haunting mosaic of displacement, inherited memory, and the fragility of love under occupation.

        Blending poetic realism, political metaphor, and lyrical dialogue, Tunnel 12 is less about resolution than revelation. It asks: what if the tunnels we escape into are the same ones that connect us? And when the walls fall, or flood, who do we become on the other side?

        Coming Soon
      </p>
      <p className="text-center text-gray-500 text-xs mt-4">Jun 22, 2025</p>
    </div>
  </div>
</section>

        {/* Bookshelf Section */}
        <section className="mt-16 text-center">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Bookshelf</h2>
            <Link href="/bookshelf" className="text-xl hover:underline">
              view all &rarr;
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