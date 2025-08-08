import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";


export default function Filmin() {
  return (
    <main className="min-h-screen bg-white text-black font-serif px-6 py-16 flex flex-col items-center leading-normal text-lg">
      <div className="max-w-2xl w-full mx-auto">
        <Link href="/" className="inline-block mb-6 text-2xl hover:underline" aria-label="Back to home">&larr;</Link>
        <h1 className="text-3xl font-semibold mb-4 text-center">Filmin&apos; a Book</h1>
        <h2 className="text-xl mb-8 text-center">A graphic novel project by Motaz H Matar &amp; Luka Japaridze</h2>
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <Image src="/FILMINABOOK-4.png" width={700} height={500} alt="Filmin&apos; a book" className="mx-auto mb-6" />
          <p className="mb-6">
            Each Filmin&apos; a Book is a cinematic journey told through still images.<br /><br />
            It&apos;s a new language of storytelling&mdash;one that moves without motion, speaks without sound, and stays with you like a film you can&apos;t forget.<br /><br />
            Filmin&apos; a Book is my offering to the world: a way to preserve, reimagine, and share stories that deserve to be seen, not just read.<br /><br />
            I hope these stories imprint something lasting in your heart.<br /><br />
            This is where the film begins on paper.
          </p>
          <h3 className="text-lg font-semibold mb-2">About Filmin&apos; a Book</h3>
          <p className="mb-6">
            I started Filmin&apos; a Book because I scratched my own itch: I wanted to create graphic novels I couldn&apos;t find anywhere&mdash;stories I wanted to read, worlds I wanted to dive into, films I didn&apos;t want to wait to fund or make, and realms I was eager to explore. I figured if I wanted to read them, someone else might find value in them too.<br /><br />
            <span className="font-bold">Motaz</span>
          </p>
          <h3 className="text-lg font-semibold mb-2">6 Things You&apos;ll Learn</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>How to See a Story in Stillness: Discover the art of storytelling through frozen frames, where every image carries the weight of a scene, and silence speaks volumes.</li>
            <li>Why Stories Deserve to Be Felt, Not Just Read: Learn to engage with narrative on a deeper level, where each page is a moment meant to echo emotionally, like a powerful scene in cinema.</li>
            <li>The Power of Collaboration Between Word &amp; Image: Explore the synergy between a writer&apos;s vision and an illustrator&apos;s soul, and how true magic happens in that intersection.</li>
            <li>A New Language of Visual Memory: Understand how stories can imprint themselves in your mind like film stills&mdash;not linear, but visual and emotional snapshots.</li>
            <li>Resistance Through Creativity: Through tales like Chadi Chaplin, experience how humor, art, and storytelling become tools of cultural resistance and resilience.</li>
            <li>How to Hold a Film in Your Hands: Break the boundaries of traditional media, and witness what happens when cinema takes the form of a book you can touch and keep.</li>
          </ul>
          <h2 className="text-xl font-semibold mb-4 text-center">Upcoming Graphic Novels</h2>
          <div className="flex flex-col gap-8 items-center mb-8">
            <Image src="/cont2.jpg" width={700} height={500} alt="Tunnel 12" className="rounded" />
            <Image src="/cont1.jpg" width={700} height={500} alt="Pearl of the Sea" className="rounded" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-center">Latest Book</h3>
          <p className="mb-6 text-center">
            Written by M.H. Matar and Illustrated by Luka Japaridze<br />
            2 Books &amp; Counting &mdash; M.H. Matar is a filmmaker-turned-graphic novelist from Palestine. His work explores identity and memory through cinematic storytelling, collaborating with Georgian artist Luka Japaridze to freeze frames of history in ink.
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
        </div>
  <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-8">
  <div className="flex flex-col items-center">
    <Image src="/blueLotus.jpg" width={300} height={450} alt="Blue Lotus" className="rounded mb-2" />
    <h4 className="font-bold mb-2">Blue Lotus</h4>
    <div className="flex flex-col items-center gap-2 w-full">
      <Link href="/blogs/bluelotus">
        <button className="bg-gray-600 text-white px-3 py-1.5 rounded hover:bg-black text-base">Read Synopsis</button>
      </Link>
      <Link href="https://www.amazon.com/stores/author/B07QQNHYG5" target="_blank" rel="noopener noreferrer">
        <button className="bg-gray-600 text-white px-3 py-1.5 rounded hover:bg-black text-base">Buy Now</button>
      </Link>
    </div>
  </div>
  <div className="flex flex-col items-center">
    <Image src="/chaplin.jpg" width={300} height={450} alt="Chadi Chaplin" className="rounded mb-2" />
    <h4 className="font-bold mb-2">Chadi Chaplin</h4>
    <div className="flex flex-col items-center gap-2 w-full">
      <Link href="/blogs/chaplin">
        <button className="bg-gray-600 text-white px-3 py-1.5 rounded hover:bg-black text-base">Read Synopsis</button>
      </Link>
      <Link href="https://www.amazon.com/stores/author/B07QQNHYG5" target="_blank" rel="noopener noreferrer">
        <button className="bg-gray-600 text-white px-3 py-1.5 rounded hover:bg-black text-base">Buy Now</button>
      </Link>
    </div>
  </div>
</div>
</div>
      </div>
      <Footer />
    </main>
  );
}