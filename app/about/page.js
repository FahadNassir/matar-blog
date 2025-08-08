// import Link from "next/link";
// import Footer from "../components/Footer";

// export default function About() {
//   return (
//     <div className="max-w-xl mx-auto py-12 px-4">
//       {/* Home navigation arrow */}
//       <Link href="/" className="inline-block mb-6 text-2xl hover:underline" aria-label="Back to home">&larr;</Link>
//       {/* Filmin a Book Title */}
//       <h1 className="text-2xl mb-6 font-semibold text-center">About Me</h1>
//       {/* Filmin content will be fetched and inserted here */}
//       <div className="text-gray-900">
//         I&apos;m a filmmaker by training and a storyteller at heart. I hold an MFA in Cinematic Arts and an MA in Serial Storytelling. I&apos;m a Palestinian based in Dubai, where I teach media at the university level. And I believe&mdash;truly&mdash;that my soul cannot think without a picture.

// The story machine started when I was a little boy. I dreamt of different worlds&mdash;maybe because I wasn&apos;t happy with this one. I felt an urge to change something. Everything. Maybe even my own name, my fate, my story.

// I never felt in control. I didn&apos;t get to make choices. I wasn&apos;t allowed to make decisions.
// Born stateless, bullied at school, and raised without a passport, I wanted control over something&mdash;anything.
// So, I started creating my own world. On paper.

// I tried drawing it. But I couldn&apos;t picture it clearly. It always came out messy. Ugly.

// I tried music&mdash;failed. I couldn&apos;t commit.
// I tried soccer. I wasn&apos;t fast or fearless enough. I loved the game, but the ball scared me.
// In school, I broke the rules during comprehension sessions and invented new worlds with words. That thrill of writing, of escaping into fiction, took me higher than anything else. I usually scored 8 out of 10, but it was never about the score. It was about freedom.

// And then the story turned.

// In eighth grade, my best friend died.
// The call came suddenly, and I received it like a prank&mdash;how do you tell a child that his childhood friend is gone?
// In that moment, I aged a million years. I aged with sadness. With speechless grief.

// That&apos;s when I knew: writing wasn&apos;t a hobby&mdash;it was a mission.
// Something larger than life.

// But I kept failing.

// I carried failure like a second skin. In love, in life, in identity.
// I didn&apos;t understand why my name meant &quot;Proud Rain.&quot; I didn&apos;t feel proud. I didn&apos;t feel like rain. I felt like a drought.

// At 17, I failed three subjects in high school. My world dried up. My family stopped speaking to me. I was a disgrace.

// And yet&hellip; I dreamed simple dreams: to drive a car, enroll in a college course, fall in love.

// At 18, I stumbled upon a small booklet. It was poetry. And it saved me.

// The way Nizar Qabbani wrote about love and loss cracked something open inside me. His words&mdash;and mine&mdash;became medicine.

// That same year, I talked a friend out of ending his life.
// He had lost his soulmate.
// I had just found mine: words.

// I didn&apos;t know it yet, but I wasn&apos;t chasing a passion.
// I was healing.

// With every word I wrote, I stitched together years of brokenness. I breathed again. I wrote for ten years without stopping. I no longer cared about failure or success. I just kept going.

// And then, at 30, something strange happened:
// The wounds healed. But the writing never stopped.

// I thought I had grown up. But the child in me never did.

// I still saw the jasmine tree hanging outside the old house. I still climbed the stairs in memory.

// And one day, on a train in Germany, I had a moment of clarity:
// I want to write a book.

// Everything changed.

// What had I been doing for ten years?
// Running. Writing. Crying into pages. Trying to make films. Telling stories. Selling dreams to myself.

// But those stories saved my past&mdash;and helped me imagine a future.

// In 2017, while studying in Germany, I finally wrote that first book:
// The 28 Mansions of the Moon.
// I fell in love with the literary form.
// In 2019, I wrote The Pigeon Whisperer and a collection of novellas.
// Readers connected deeply with my work&mdash;and I finally understood why I wrote:

// Because stories let us reshape the world.
// They help us survive.
// They help us make meaning.

// Since then, writing novels has been a yes among so many no&apos;s.
// What began as an escape became the most real part of my life.

// Today, I write to explore life&apos;s hardest questions&mdash;not to answer them, but to open the doors they hide behind.

// I write to show that:

// We can design our own narratives.
// Passion finds us when we&apos;re ready.
// People may never fully understand us&mdash;and that&apos;s okay.
// Being broken is part of being alive.
// You don&apos;t need to apologize for tears.
// Art is the rain in the desert.
// Dreams are the only real things in life.
// So keep dreaming.

// Here I am&mdash;still that child, still dreaming.
// Still writing.
// Still healing.
// Still mesmerized by how beautiful life can be, even with its pain.
//       </div>
//       <Footer />
//     </div>
//   );
// }

'use client';

import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-black font-serif px-6 py-16 flex flex-col items-center text-center leading-normal text-lg">
      <div className="max-w-3xl w-full mx-auto">

        {/* Nav */}
        <nav className="relative flex justify-center mb-12">
          <div className="relative">
            <Link href="/" className="text-xl hover:underline focus:outline-none">HOME</Link>
          </div>
        </nav>

        <h1 className="text-3xl mb-3 font-semibold">About M. H. Matar</h1>
        <h2 className="text-xl mb-8">Who am I?</h2>
        <div className="flex justify-center">
          <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
        </div>

        <section className="mb-20">
          <div className="space-y-10">
            <div className="text-left p-6">
              <h3 className="font-bold text-lg mb-1 text-center">About</h3>
              <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
              <p className="whitespace-pre-line">
                Motaz H Matar is a Palestinian author, storyteller, and creative. His work explores memory, displacement, and the poetic intersections of personal and political histories. Through novels, graphic stories, and essays, he invites readers to dive inwards, unraveling the threads of identity and belonging.
                {"\n\n"}
                Motaz’s writing blends realism with metaphor, drawing on his experiences across Palestine, Berlin, and the United States. He believes in the power of stories to heal, connect, and reveal the hidden tunnels between us.
                {"\n\n"}
                For more, visit the <Link href="/blog" className="underline">blog</Link> or <Link href="/bookshelf" className="underline">bookshelf</Link>.
              </p>
              <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
                <p className="text-center">Updated Jul 25, 2025</p>
                <p className="text-center">Add Comment</p>
              </div>
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