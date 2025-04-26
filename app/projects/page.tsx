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

export default async function Projects() {
  const projects = await fetchProjectsList();
  return (
    <main className='prose flex w-full min-w-max flex-auto flex-col'>
      <h1 className=' text-black dark:text-white'>My Projects</h1>
      <div className='justify-items-auto inline-grid w-full grid-cols-3 gap-4'>
        {projects.map((project) => {
          let parsedImage = parseContentfulContentImage(
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
                <Link href={`/projects/${project.slug}`}>
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
