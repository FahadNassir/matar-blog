// 

export default function BlogCard({ post }) {
    return (
      <div className="w-full h-64 p-5 rounded-xl bg-black flex flex-col justify-between">
        <h1 className="text-white text-xl font-semibold mb-2">{post.title}</h1>
        <p className="text-gray-300 text-sm mb-1">{post.description}</p>
        {post.date && <span className="text-gray-400 text-xs mt-auto">{post.date}</span>}
      </div>
    );
  }
  