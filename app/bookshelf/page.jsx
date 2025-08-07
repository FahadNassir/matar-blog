/*
Previous implementation of the Bookshelf page:
import Link from "next/link";
import Footer from "../components/Footer";

export default function Bookshelf() {
  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <Link href="/" className="inline-block mb-6 text-2xl hover:underline" aria-label="Back to home">←</Link>
      <h1 className="text-2xl mb-6 font-semibold">Bookshelf</h1>
      <div className="space-y-3 mb-10">
        <div className="flex items-center w-full">
          <span className="text-left">The 28 Mansions of the Moon</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">2017</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-left">The Pigeon Whisperer</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">2019</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-left">Collection of Novellas</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">2019</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-left">Rewriting Forty Paperback</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">2024</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-left">My First Book Since 2019</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">2024</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
*/

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