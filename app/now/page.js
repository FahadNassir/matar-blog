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
      <div className="text-gray-400 italic">Current content coming soon...</div>
      <Footer />
    </div>
  );
}