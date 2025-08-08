// 'use client';

// import { useState } from "react";
// import Link from "next/link";
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
//       description: "It has been five years since my last book, The Pigeon Whisperer, was published—five years of stories waiting to",
//       date: "June 28, 2024",
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
//                 <Link href="/about" className="hover:underline">About</Link>
//                 <Link href="/filmin" className="hover:underline">Filmin&apos; a book</Link>
//                 <Link href="/now" className="hover:underline">Now</Link>
//                 <Link href="/snippets" className="hover:underline">Snippets</Link>
//                 <Link href="/blog" className="hover:underline">Blog</Link>
//                 <Link href="/bookshelf" className="hover:underline">Bookshelf</Link>
//                 <Link href="#footer" className="hover:underline">Contact</Link>
//               </div>
//             )}
//           </div>
//         </nav>

//         <h1 className="text-3xl mb-3 font-semibold">M. H. Matar <br /> Author &amp; Storyteller</h1>
//       <h2 className="text-xl mb-8">Enter my brain!</h2>
//       <div className="flex justify-center">
//         <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
//       </div>
      
       
// <section className="mb-20">
//   <div className="space-y-10">
//     {/* Diving Inwards */}
//     <div className="text-left p-6">

//       <h3 className="font-bold text-lg mb-1 text-center">Diving Inwards</h3>
//       <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
//       <p className="whitespace-pre-line">
//         Diving inwards like a dream, like an ocean.
//         It&apos;s devotion.
//         The word is a second chance &mdash; your second cup of coffee, your rebirth.
//         Diving inwards, where time dilutes:
//         Ten hours become one, and one becomes eternity.
//         Breaking the shallowness of boredom and routine.
//         Diving inwards &mdash; to you, to your love, to the child in me.
//         Diving inwards while climbing up those ancient stairs.
//         I freeze &mdash; did a moment pass by?
//         I&apos;m still the child in me.
//         I love him, and he loves me.
//         I dream with him, and he carries me.
//         You are still the child in me.
//         The house never changed.
//         People did: they burnt words.
//         I live with the flame.
//         Diving inwards; infinitely.
//       </p>
//       <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
//         <p className="text-center">Jul 25, 2025</p>  
//         <p className="text-center">Add Comment</p>
//       </div>
//     </div>

//     <div className="flex justify-center">
//         <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
//       </div>

//     {/* Million Monkeys, Million Typewriters */}
//     <div className="text-left p-6">

//       <h3 className="font-bold text-lg mb-1 text-center">Million Monkeys, Million Typewriters</h3>
//       <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
//       <p className="whitespace-pre-line">
//         It&apos;s about the magic and randomness of the universe. I want to see the beauty, the magic, and the randomness of writing and storytelling. It&apos;s like opening a world&mdash;unfolding an infinite stream of rivers and clouds.

//         Loving life, finding peace in words. Just letting those monkeys dance on the typewriters, unveiling what&apos;s in our souls. Unveiling the temporary time we have on earth&mdash;goodness and love, the precious things we hold as humans. Why were we created? Why must we approach life with a sense of unurgency&mdash;moment to moment?

//         We de-stress. We live. We enjoy life. We savor the luxury of not going anywhere&mdash;just our hands moving on the page. Just our beautiful million monkeys, telling us: fuck money, fuck pride, fuck fame.
//         We are here to create the dance for you.
//         You have no idea. You never know. God has a plan for you. God brought us here to give you peace, joy, and love.

//         Help us dance a million times.
//         Help your soul be where it needs to be.
//       </p>
//       <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
//         <p className="text-center">Jun 25, 2025</p>  
//         <p className="text-center">Add Comment</p>
//       </div>
//     </div>

//     <div className="flex justify-center">
//         <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
//       </div>

//     {/* About Us */}
//     <div className="text-left p-6">

//       <h3 className="font-bold text-lg mb-1 text-center">About Us</h3>
//       <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
//       <p className="whitespace-pre-line">
//         <Link href="/aboutUs"> click here to read about us &rarr; </Link>
//       </p>  
//       <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
//         <p className="text-center">Jun 23, 2025</p>  
//         <p className="text-center">Add Comment</p>
//       </div>
//     </div>

//     <div className="flex justify-center">
//         <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
//       </div>

//     {/* Tunnel 12 */}
//     <div className="text-left p-6">

//       <h3 className="font-bold text-lg mb-1 text-center">Tunnel 12</h3>
//       <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
//       <p className="whitespace-pre-line">
//         Tunnel 12 is a dreamlike, intergenerational epic that tunnels through decades of memory, war, and longing, linking 1958 Berlin, 1961 Palestine, and the present-day United States.

//         The story centers on Andrea, a Berlin tailor entangled in a doomed Cold War love affair; Abla, a Palestinian woman caught between her father&apos;s trauma and her own forbidden romance; and Emma, a modern-day American student who stumbles upon their buried histories through a book, and a bloodline, she didn&apos;t know she belonged to.

//         As trains, tunnels, and border walls echo through time, each woman is trapped in her own form of isolation, emotional, political, physical. Andrea is locked inside her shop as the Berlin Wall rises outside; Abla is led by her father through a suffocating tunnel under siege; and Emma boards a plane to trace back the silent sorrows etched into her family&apos;s past.

//         Through symbolic crossings and surreal encounters, these women&apos;s stories fold into each other like shadows across time zones, stitching together a haunting mosaic of displacement, inherited memory, and the fragility of love under occupation.

//         Blending poetic realism, political metaphor, and lyrical dialogue, Tunnel 12 is less about resolution than revelation. It asks: what if the tunnels we escape into are the same ones that connect us? And when the walls fall, or flood, who do we become on the other side?

//         Coming Soon
//       </p>
//       <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
//         <p className="text-center">Jun 22, 2025</p>  
//         <p className="text-center">Add Comment</p>
//       </div>
//     </div>
//   </div>
// </section>
// </div>

//    <Link href="/older-posts" className="cursor-pointer hover:underline mb-8">
//       <p className="text-center mb-4">Older Posts &rarr;</p>
//    </Link>
    

//       <div className="flex justify-center">
//         <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
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
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [commentFormVisible, setCommentFormVisible] = useState({});

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

  const handleCommentClick = (postId) => {
    setCommentFormVisible(prevState => ({
      ...prevState,
      [postId]: !prevState[postId]
    }));
  };

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
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white text-black py-3 px-6 shadow-md z-10 flex flex-col space-y-2 text-center border border-gray-200">
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

        <h1 className="text-3xl mb-3 font-semibold">M. H. Matar <br /> Author &amp; Storyteller</h1>
      <h2 className="text-xl mb-8">Enter my brain!</h2>
      <div className="flex justify-center">
        <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
      </div>
      
       
<section className="mb-20">
  <div className="space-y-10">
    {/* Diving Inwards */}
    <div className="text-left p-6">

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
      <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
        <p className="text-center">Jul 25, 2025</p>  
        <button onClick={() => handleCommentClick(1)} className="text-center hover:underline focus:outline-none">Add Comment</button>
      </div>
      {commentFormVisible[1] && (
        <div className="mt-6 p-4 border border-gray-300">
          <h4 className="text-base font-semibold mb-2 text-center">Leave a Reply</h4>
          <form className="space-y-4 text-sm">
            <div>
              <label htmlFor="comment1" className="sr-only">Comment</label>
              <textarea
                id="comment1"
                rows="4"
                placeholder="Comment"
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
              ></textarea>
            </div>
            <div>
              <label htmlFor="name1" className="sr-only">Name</label>
              <input
                id="name1"
                type="text"
                placeholder="Name *"
                required
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
              />
            </div>
            <div>
              <label htmlFor="email1" className="sr-only">Email</label>
              <input
                id="email1"
                type="email"
                placeholder="Email *"
                required
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
              />
            </div>
            <button type="submit" className="w-full py-2 bg-black text-white hover:bg-gray-800 transition-colors">
              Post Comment
            </button>
          </form>
        </div>
      )}
    </div>

    <div className="flex justify-center">
        <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
      </div>

    {/* Million Monkeys, Million Typewriters */}
    <div className="text-left p-6">

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
      <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
        <p className="text-center">Jun 25, 2025</p>  
        <button onClick={() => handleCommentClick(2)} className="text-center hover:underline focus:outline-none">Add Comment</button>
      </div>
      {commentFormVisible[2] && (
        <div className="mt-6 p-4 border border-gray-300">
          <h4 className="text-base font-semibold mb-2 text-center">Leave a Reply</h4>
          <form className="space-y-4 text-sm">
            <div>
              <label htmlFor="comment2" className="sr-only">Comment</label>
              <textarea
                id="comment2"
                rows="4"
                placeholder="Comment"
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
              ></textarea>
            </div>
            <div>
              <label htmlFor="name2" className="sr-only">Name</label>
              <input
                id="name2"
                type="text"
                placeholder="Name *"
                required
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
              />
            </div>
            <div>
              <label htmlFor="email2" className="sr-only">Email</label>
              <input
                id="email2"
                type="email"
                placeholder="Email *"
                required
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
              />
            </div>
            <button type="submit" className="w-full py-2 bg-black text-white hover:bg-gray-800 transition-colors">
              Post Comment
            </button>
          </form>
        </div>
      )}
    </div>

    <div className="flex justify-center">
        <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
      </div>

    {/* About Us */}
    <div className="text-left p-6">

      <h3 className="font-bold text-lg mb-1 text-center">About Us</h3>
      <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
      <p className="whitespace-pre-line">
        <Link href="/aboutUs"> click here to read about us &rarr; </Link>
      </p>  
      <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
        <p className="text-center">Jun 23, 2025</p>  
        <button onClick={() => handleCommentClick(3)} className="text-center hover:underline focus:outline-none">Add Comment</button>
      </div>
      {commentFormVisible[3] && (
        <div className="mt-6 p-4 border border-gray-300">
          <h4 className="text-base font-semibold mb-2 text-center">Leave a Reply</h4>
          <form className="space-y-4 text-sm">
            <div>
              <label htmlFor="comment3" className="sr-only">Comment</label>
              <textarea
                id="comment3"
                rows="4"
                placeholder="Comment"
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
              ></textarea>
            </div>
            <div>
              <label htmlFor="name3" className="sr-only">Name</label>
              <input
                id="name3"
                type="text"
                placeholder="Name *"
                required
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
              />
            </div>
            <div>
              <label htmlFor="email3" className="sr-only">Email</label>
              <input
                id="email3"
                type="email"
                placeholder="Email *"
                required
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
              />
            </div>
            <button type="submit" className="w-full py-2 bg-black text-white hover:bg-gray-800 transition-colors">
              Post Comment
            </button>
          </form>
        </div>
      )}
    </div>

    <div className="flex justify-center">
        <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
      </div>

    {/* Tunnel 12 */}
    <div className="text-left p-6">

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
      <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
        <p className="text-center">Jun 22, 2025</p>  
        <button onClick={() => handleCommentClick(4)} className="text-center hover:underline focus:outline-none">Add Comment</button>
      </div>
      {commentFormVisible[4] && (
        <div className="mt-6 p-4 border border-gray-300">
          <h4 className="text-base font-semibold mb-2 text-center">Leave a Reply</h4>
          <form className="space-y-4 text-sm">
            <div>
              <label htmlFor="comment4" className="sr-only">Comment</label>
              <textarea
                id="comment4"
                rows="4"
                placeholder="Comment"
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
              ></textarea>
            </div>
            <div>
              <label htmlFor="name4" className="sr-only">Name</label>
              <input
                id="name4"
                type="text"
                placeholder="Name *"
                required
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
              />
            </div>
            <div>
              <label htmlFor="email4" className="sr-only">Email</label>
              <input
                id="email4"
                type="email"
                placeholder="Email *"
                required
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
              />
            </div>
            <button type="submit" className="w-full py-2 bg-black text-white hover:bg-gray-800 transition-colors">
              Post Comment
            </button>
          </form>
        </div>
      )}
    </div>
  </div>
</section>
</div>

   <Link href="/older-posts" className="cursor-pointer hover:underline mb-8">
      <p className="text-center mb-4">Older Posts &rarr;</p>
   </Link>
    

      <div className="flex justify-center">
        <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
      </div>

      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}