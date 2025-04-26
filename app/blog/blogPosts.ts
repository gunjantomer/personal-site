import {
  getTemplateEntries,
  getTemplateEntry,
} from '@/app/api/contentful/fetch-content';
import {
  IBlogPost,
  IBlogPostFields,
} from '@/src/contentful/generated/contentful';

// A function to fetch all blog posts.
export async function fetchBlogPosts() {
  const blogPostsList = (await getTemplateEntries('blogPost')) as IBlogPost[];

  return blogPostsList.map(
    (blogPostEntry) => blogPostEntry.fields as IBlogPostFields
  );
}

// A function to fetch a single blog post by its slug.
export async function fetchBlogPost(slug: string) {
  const blogPost = (await getTemplateEntry({
    content_type: 'blogPost',
    'fields.slug': slug,
    include: 1,
  })) as IBlogPost;

  return blogPost as IBlogPostFields;
}
