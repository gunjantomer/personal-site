import { AssetFields } from 'contentful';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { parseContentfulContentImage } from '@/lib/contentImage';
import RichText from '@/lib/RichText';
import { fetchBlogPost, fetchBlogPosts } from '../blogPosts';

interface BlogPostPageParams {
  slug: string;
}

interface BlogPostPageProps {
  params: Promise<BlogPostPageParams>;
}

// Tell Next.js about all our blog posts so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<Object[]> {
  const blogPosts = await fetchBlogPosts();

  return blogPosts.map((post) => ({ slug: post.slug }));
}

// For each blog post, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata(
  props: BlogPostPageProps
): Promise<Metadata> {
  const params = await props.params;
  const blogPost = await fetchBlogPost(params.slug);

  if (!blogPost) {
    return notFound();
  }

  return {
    title: blogPost.title,
  };
}

// The actual BlogPostPage component.
async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  // Fetch a single blog post by slug,
  // using the content preview if draft mode is enabled:
  const blogPost = await fetchBlogPost(params.slug);
  const parsedImage = parseContentfulContentImage(
    blogPost?.image?.fields as AssetFields
  );

  return (
    <main className='p-[6vw]'>
      <Link href='/blog'>← Posts</Link>
      <div className='prose mt-8 border-t pt-8 dark:prose-invert'>
        {/* Render the blog post image */}
        {parsedImage && (
          <img
            src={parsedImage.src}
            // Use the Contentful Images API to render
            // responsive images. No next/image required:
            srcSet={`${parsedImage.src}?w=300 1x, ${parsedImage.src} 2x`}
            width={300}
            height={300}
            alt={parsedImage.alt}
          />
        )}

        {/* Render the blog post title */}
        <h1 className='text-black text-xxl dark:text-white'>
          {blogPost.title}
        </h1>

        {/* Render the blog post body */}
        <RichText document={blogPost.body!} />
      </div>
    </main>
  );
}

export default BlogPostPage;
