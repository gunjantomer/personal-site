import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { AssetFields } from 'contentful';
import Link from 'next/link';
import RichText from '@/lib/RichText';
import { parseContentfulContentImage } from '@/lib/contentImage';
import { fetchProjectsList } from './projects';
import { FaGithubAlt } from 'react-icons/fa';
export default async function Projects() {
  const projects = await fetchProjectsList();
  return (
    <main className='prose flex w-[80vw] sm:max-w-fit flex-auto flex-col items-center sm:items-start mx-[10vw] sm:mx-0 mb-10'>
      <h1 className=' text-black dark:text-white'>My Projects</h1>
      <div className='justify-items-auto inline-grid w-full grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4'>
        {projects.map((project) => {
          const parsedImage = parseContentfulContentImage(
            project?.image?.fields as AssetFields
          );
          return (
            <Card key={project.title}>
              <CardHeader>{project.title}</CardHeader>
              <CardContent>
                {parsedImage && (
                  <img
                    src={parsedImage.src}
                    // Use the Contentful Images API to render
                    // responsive images. No next/image required:
                    srcSet={`${parsedImage.src}?w=300 1x, ${parsedImage.src} 2x`}
                    width={367}
                    height={300}
                    alt={parsedImage.alt}
                  />
                )}
                <RichText document={project.description!} />
              </CardContent>
              <CardFooter>
                <Link
                  href={`/projects/${project.slug}`}
                  className={
                    'dark:text-white font-semibold inline-flex items-center'
                  }
                >
                  <FaGithubAlt className='mr-1 mt-1' />
                  View project on Github
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
