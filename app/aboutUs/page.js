// import React from "react";
// import Image from "next/image";
// import Footer from "../components/Footer";
// import Link from "next/link";

// const AboutUs= () => {
//   return (
//     <div className="max-w-xl mx-auto py-12 px-4 text-left text-black font-serif">
//         <Link href="/" className="font-bold"> &larr; </Link>
//       <h2 className="text-2xl font-semibold mb-2">About Us</h2>
//       <p className="text-gray-500 text-sm mb-2">Jun 23, 2025</p>
//       <p className="mb-4">by Motaz H Matar</p>
//       <Image src="/motaz.jpg" width={600} height={400} alt="Motaz Matar" className="rounded mb-6" />
//       <p className="mb-6">
//         <strong>About Motaz</strong><br />
//         When I write, I&apos;m not trying to make a graphic novel. I&apos;m trying to show something that needs to be seen.<br /><br />
//         I can&apos;t finish a panel unless it feels right&mdash;like rhythm, silence, and cinema in one frame.<br /><br />
//         Filmin&apos; a Book is where that all comes together. Truth told through images. Satire as survival. Memory as rebellion. A laugh that hits harder than a weapon.
//       </p>
//       <Image src="/luka.jpg" width={600} height={800} alt="Luka" className="rounded mb-6" />
//       <p className="mb-6">
//         <strong>About Luka</strong><br />
//         I didn&apos;t draw just to draw. I was drawn to the quiet power of images. A gesture. A shadow. A frame that feels like a memory. That&apos;s what brought me to Filmin&apos; a Book.<br /><br />
//         I&apos;ve worked on walls, posters, pages. But here, I&apos;m building worlds. Turning words into light and silence. Mood into memory. Sometimes, giving a face to injustice.<br /><br />
//         Art school gave me technique. Storytelling gave it meaning. Style changes&mdash;vintage or bold, poetic or sharp&mdash;but I always ask: what should this moment feel like?<br /><br />
//         Working with Motaz, I found something rare. A place where art resists. Where satire is sharp. Where every frame speaks. Every image we make tries to stay with you&mdash;not just on the page, but in your mind.
//       </p>
//       <Footer />
//     </div>
//   );
// };

// export default AboutUs;

'use client';

import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white text-black font-serif px-6 py-16 flex flex-col items-center text-center leading-normal text-lg">
      <div className="max-w-3xl w-full mx-auto">

        {/* Nav */}
        <nav className="relative flex justify-center mb-12">
          <div className="relative">
            <Link href="/" className="text-xl hover:underline focus:outline-none">HOME</Link>
          </div>
        </nav>

        <h1 className="text-3xl mb-3 font-semibold text-center">About Us</h1>
        <h2 className="text-xl mb-8 text-center">Meet the Team</h2>
        <div className="flex justify-center">
          <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
        </div>

        <section className="mb-20">
          <div className="space-y-10">
            <div className="text-left p-6">
              <p className="text-gray-500 text-sm mb-2 text-center">Jun 23, 2025</p>
              <p className="mb-4 text-center">by Motaz H Matar</p>
              <div className="flex justify-center mb-6">
                <Image src="/motaz.jpg" width={300} height={200} alt="Motaz Matar" className="rounded"/>
              </div>
              <h3 className="font-bold text-lg mb-1 text-center">About Motaz</h3>
              <p className="mb-6 whitespace-pre-line text-left">
                When I write, I&apos;m not trying to make a graphic novel. I&apos;m trying to show something that needs to be seen.
                {"\n\n"}
                I can&apos;t finish a panel unless it feels right&mdash;like rhythm, silence, and cinema in one frame.
                {"\n\n"}
                Filmin&apos; a Book is where that all comes together. Truth told through images. Satire as survival. Memory as rebellion. A laugh that hits harder than a weapon.
              </p>
              <div className="flex justify-center mb-6">
                <Image src="/luka.jpg" width={300} height={400} alt="Luka" className="rounded"/>
              </div>
              <h3 className="font-bold text-lg mb-1 text-center">About Luka</h3>
              <p className="mb-6 whitespace-pre-line text-left">
                I didn&apos;t draw just to draw. I was drawn to the quiet power of images. A gesture. A shadow. A frame that feels like a memory. That&apos;s what brought me to Filmin&apos; a Book.
                {"\n\n"}
                I&apos;ve worked on walls, posters, pages. But here, I&apos;m building worlds. Turning words into light and silence. Mood into memory. Sometimes, giving a face to injustice.
                {"\n\n"}
                Art school gave me technique. Storytelling gave it meaning. Style changes&mdash;vintage or bold, poetic or sharp&mdash;but I always ask: what should this moment feel like?
                {"\n\n"}
                Working with Motaz, I found something rare. A place where art resists. Where satire is sharp. Where every frame speaks. Every image we make tries to stay with you&mdash;not just on the page, but in your mind.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
            </div>
          </div>
        </section>

        <div id="footer">
          <Footer />
        </div>
      </div>
    </main>
  );
}