export default function BlogCard({ post }) {
  return (
    <div className="w-56 min-h-40 p-4 rounded-lg bg-black text-white flex flex-col justify-between">
      <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
      <p className="text-sm text-gray-300 mb-1">{post.description}</p>
      {post.date && (
        <span className="text-xs text-gray-400 mt-auto">{post.date}</span>
      )}
    </div>
  );
}
