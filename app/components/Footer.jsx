export default function Footer() {
  return (
    <div>
      <footer className="mt-16 w-full bg-white text-center font-serif text-sm leading-tight py-8">
        <p className="mb-2">M H MATAR © 2025. Published with Ghost &amp; Braun</p>
        <div className="space-x-4">
          <a href="https://amazon.com" className="hover:underline">Amazon</a>
          ·
          <a href="mailto:youremail@example.com" className="hover:underline">Email</a>
          ·
          <a href="https://goodreads.com" className="hover:underline">Goodreads</a>
          ·
          <a href="https://linkedin.com" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}