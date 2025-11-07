import Link from "next/link";
import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="border rounded-lg p-4 bg-white hover:shadow-md transition">
      <Link href={`/posts/${post.id}`}>
        <h2 className="text-xl font-semibold text-blue-600 hover:underline">
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-600 mt-2">{post.body.substring(0, 80)}...</p>
    </div>
  );
}
