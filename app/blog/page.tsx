import Link from 'next/link';
import { fetchBlogPosts } from './blogPosts';

export default async function BlogPosts() {
  const blogPosts = await fetchBlogPosts();
  return (
    <main className="p-[6vw]">
      <div className="prose">
        <h1 className="text-black dark:text-white">My Contentful Blog</h1>
        <ul>
          {blogPosts.map((blogPost) => {
            return (
              <li key={blogPost.slug}>
                <Link
                  className="text-black dark:text-white"
                  href={`/blog/${blogPost.slug}`}
                >
                  {blogPost.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
