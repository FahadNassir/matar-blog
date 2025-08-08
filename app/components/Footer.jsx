export default function Footer() {
  return (
    <div>
      <footer className="mt-16 w-full bg-white text-center font-serif text-sm leading-tight py-8">
        <p className="mb-2">M H MATAR © 2025. Published with Ghost &amp; Braun</p>
        <div className="space-x-4">
          <a href="https://www.amazon.com/stores/author/B07QQNHYG5" className="hover:underline">Amazon</a>
          ·
          <a href="mailto:mzmatar@gmail.com" className="hover:underline">Email</a>
          ·
          <a href="https://www.goodreads.com/author/show/21029714.M_H_Matar" className="hover:underline">Goodreads</a>
          ·
          <a href="https://www.linkedin.com/in/motazhmatar/" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}