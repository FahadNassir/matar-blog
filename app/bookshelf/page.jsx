/* eslint-disable quotes */
// Minimalist Bookshelf page structure (content to be fetched and inserted here)
import Link from "next/link";
import Footer from "../components/Footer";

export default function Bookshelf() {
  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      {/* Home navigation arrow */}
      <Link href="/" className="inline-block mb-6 text-2xl hover:underline" aria-label="Back to home">←</Link>
      {/* Bookshelf Title */}
      <h1 className="text-2xl mb-6 font-semibold">Bookshelf</h1>
      {/* Bookshelf content will be fetched and inserted here */}
      <div className="space-y-3 mb-10">
        {/* TODO: Insert fetched bookshelf items here */}
        <div className="text-gray-400 italic">
          <h1></h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}