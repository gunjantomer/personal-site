import { AssetFields } from 'contentful';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import RichText from '@/lib/RichText';
import { parseContentfulContentImage } from '@/lib/contentImage';
import { fetchProject, fetchProjectsList } from '../projects';

interface ProjectPageParams {
  slug: string;
}

interface ProjectPageProps {
  params: Promise<ProjectPageParams>;
}

// Tell Next.js about all our blog posts so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<Object[]> {
  const projects = await fetchProjectsList();
  return projects.map((post) => ({ slug: post.slug }));
}

// For each blog post, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata(props: ProjectPageProps): Promise<Metadata> {
  const params = await props.params;
  const project = await fetchProject(params.slug);

  if (!project) {
    return notFound();
  }

  return {
    title: project.title,
  };
}

// The actual ProjectPage component.
async function ProjectPage(props: ProjectPageProps) {
  const params = await props.params;
  // Fetch a single blog post by slug,
  // using the content preview if draft mode is enabled:
  const project = await fetchProject(params?.slug);
  const parsedImage = parseContentfulContentImage(
    project?.image?.fields as AssetFields
  );

  return (
    <main className='p-[6vw]'>
      <Link href='/projects'>← All projects</Link>
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
        <h1 className='text-xxl text-black dark:text-white'>{project.title}</h1>

        {/* Render the blog post body */}
        <RichText document={project.description!} />
      </div>
    </main>
  );
}

export default ProjectPage;
