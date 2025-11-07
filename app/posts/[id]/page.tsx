import { Post } from "@/types/post";
import postsData from "@/data/posts.json";

interface PostPageProps {
  params: { id: string };
}

export default function PostPage({ params }: PostPageProps) {
  const post = postsData.find((p) => p.id === Number(params.id));

  if (!post) {
    return (
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-red-600">Publicación no encontrada</h1>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>

      <a
        href="/"
        className="inline-block mt-6 text-sm text-blue-500 hover:underline"
      >
        ← Volver a publicaciones
      </a>
    </main>
  );
}
