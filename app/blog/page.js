/*
Previous implementation of the Blog page:
import Link from "next/link";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <Link href="/" className="inline-block mb-6 text-2xl hover:underline" aria-label="Back to home">←</Link>
      <h1 className="text-2xl mb-6 font-semibold">Blog</h1>
      <div className="space-y-3 mb-10">
        <div className="flex items-center w-full">
          <span className="text-left">Million Monkeys, Million Typewriters</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">Jun 25</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-left">No Summer</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">May 28</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-left">Blue Lotus – 8-Page Teaser</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">May 28</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-left">That Silence Saved Your Soul</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">May 27</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-left">To slip into a dream?</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">May 14</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-left">Soul mates, unbound.</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">May 12</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
*/

// Minimalist Blog page structure (content to be fetched and inserted here)
import Link from "next/link";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      {/* Home navigation arrow */}
      <Link href="/" className="inline-block mb-6 text-2xl hover:underline" aria-label="Back to home">←</Link>
      {/* Blog Title */}
      <h1 className="text-2xl mb-6 font-semibold">Blog</h1>
      {/* Blog content will be fetched and inserted here */}
      <div className="space-y-3 mb-10">
        {/* TODO: Insert fetched blog post previews here */}
        <div className="text-gray-400 italic">Blog content coming soon...</div>
      </div>
      <Footer />
    </div>
  );
}