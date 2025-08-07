import Link from "next/link";
import Footer from "../components/Footer";

export default function Now() {
  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      {/* Home navigation arrow */}
      <Link href="/" className="inline-block mb-6 text-2xl hover:underline" aria-label="Back to home">←</Link>
      {/* Filmin a Book Title */}
      <h1 className="text-2xl mb-6 font-semibold">What I&apos;m working on Now</h1>
      {/* Filmin content will be fetched and inserted here */}
      <div className="text-gray-400 italic">
        What I&apos;m working on now?

-Finishing part 2 of Palestinian Graphic Novel: Chadi the Palestinian Chadi Chaplin. (Here's a teaser page). Illustrator LUKA JAPARDIZE. Story by me (was orginally a screenplay short listed in the Sharjah Pitch Platform.
 <Image 
        src="/now1.png"
        alt="What I am currently working on"
        width={900}
        height={700}
        className="w-full h-auto mb-6"
      />
      </div>
      <div className="text-gray-400 italic">
        I am also working on a new book about the history of
 />
      </div>
      <Footer />
    </div>
  );
}