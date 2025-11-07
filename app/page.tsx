import PostCard from "@/components/PostCard";
import { Post } from "@/types/post";
import postsData from "@/data/posts.json";

export default function HomePage() {
  const posts: Post[] = postsData;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        📰 Lista de Publicaciones
      </h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
