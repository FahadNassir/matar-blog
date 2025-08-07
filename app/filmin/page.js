// Minimalist Filmin a Book page structure (content to be fetched and inserted here)

import Link from "next/link";
import Footer from "../components/Footer";

export default function Filmin() {
  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      {/* Home navigation arrow */}
      <Link href="/" className="inline-block mb-6 text-2xl hover:underline" aria-label="Back to home">←</Link>
      {/* Filmin a Book Title */}
      <h1 className="text-2xl mb-6 font-semibold">Filmin&apos; a Book</h1>
      {/* Filmin content will be fetched and inserted here */}
      <div className="text-gray-400 italic">Each Filmin’ a Book is a cinematic journey told through still images.

It’s a new language of storytelling
one that moves without motion, speaks without sound,
and stays with you like a film you can’t forget.

Filmin’a Book is my offering the world:

a way to preserve, reimagine, and share stories that deserve to be seen,
not just read.

I hope these stories imprint something lasting in your heart.

This is where the film begins on paper.

About Filmin' a book
I started Filmin’ in a Book because I scratched my own itch: I wanted to create graphic novels I couldn't find anywhere—stories I wanted to read, worlds I wanted to dive into, films I didn't want to wait to fund or make, and realms I was eager to explore. I figured if I wanted to read them, someone else might find value in them too.

Motaz

Read more

6 Things You’ll Learn
How to See a Story in Stillness: Discover the art of storytelling through frozen frames, where every image carries the weight of a scene, and silence speaks volumes.
Why Stories Deserve to Be Felt, Not Just Read: Learn to engage with narrative on a deeper level, where each page is a moment meant to echo emotionally, like a powerful scene in cinema.
The Power of Collaboration Between Word & Image: Explore the synergy between a writer’s vision and an illustrator’s soul, and how true magic happens in that intersection.
A New Language of Visual Memory: Understand how stories can imprint themselves in your mind like film stills, not linear, but visual and emotional snapshots.
Resistance Through Creativity: Through tales like Chadi Chaplin, experience how humor, art, and storytelling become tools of cultural resistance and resilience.
How to Hold a Film in Your Hands: Break the boundaries of traditional media, and witness what happens when cinema takes the form of a book you can touch and keep.
Upcoming Novels Graphic Novels</div>
      <Footer />
    </div>
  );
}