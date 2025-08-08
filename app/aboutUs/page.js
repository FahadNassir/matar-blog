import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";

const AboutUs= () => {
  return (
    <div className="max-w-xl mx-auto py-12 px-4 text-left text-black font-serif">
        <Link href="/" className="font-bold"> &larr; </Link>
      <h2 className="text-2xl font-semibold mb-2">About Us</h2>
      <p className="text-gray-500 text-sm mb-2">Jun 23, 2025</p>
      <p className="mb-4">by Motaz H Matar</p>
      <Image src="/motaz.jpg" width={600} height={400} alt="Motaz Matar" className="rounded mb-6" />
      <p className="mb-6">
        <strong>About Motaz</strong><br />
        When I write, I&apos;m not trying to make a graphic novel. I&apos;m trying to show something that needs to be seen.<br /><br />
        I can&apos;t finish a panel unless it feels right&mdash;like rhythm, silence, and cinema in one frame.<br /><br />
        Filmin&apos; a Book is where that all comes together. Truth told through images. Satire as survival. Memory as rebellion. A laugh that hits harder than a weapon.
      </p>
      <Image src="/luka.jpg" width={600} height={800} alt="Luka" className="rounded mb-6" />
      <p className="mb-6">
        <strong>About Luka</strong><br />
        I didn&apos;t draw just to draw. I was drawn to the quiet power of images. A gesture. A shadow. A frame that feels like a memory. That&apos;s what brought me to Filmin&apos; a Book.<br /><br />
        I&apos;ve worked on walls, posters, pages. But here, I&apos;m building worlds. Turning words into light and silence. Mood into memory. Sometimes, giving a face to injustice.<br /><br />
        Art school gave me technique. Storytelling gave it meaning. Style changes&mdash;vintage or bold, poetic or sharp&mdash;but I always ask: what should this moment feel like?<br /><br />
        Working with Motaz, I found something rare. A place where art resists. Where satire is sharp. Where every frame speaks. Every image we make tries to stay with you&mdash;not just on the page, but in your mind.
      </p>
      <Footer />
    </div>
  );
};

export default AboutUs;