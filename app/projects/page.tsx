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
import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { Badge } from '@/components/ui/badge';
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
              <CardHeader className='text-3xl'>{project.title}</CardHeader>
              <CardContent className='flex flex-col'>
                {parsedImage && (
                  <img
                    src={parsedImage.src}
                    // Use the Contentful Images API to render
                    // responsive images. No next/image required:
                    srcSet={`${parsedImage.src}?w=300 1x, ${parsedImage.src} 2x`}
                    width={500}
                    height={400}
                    alt={parsedImage.alt}
                    className='self-center'
                  />
                )}
                <RichText document={project.description!} />
                {project.skillBadges && (
                  <div className='flex flex-wrap gap-2'>
                    {project.skillBadges.map((skillBadge) => (
                      <Badge key={skillBadge}>{skillBadge}</Badge>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className='gap-4'>
                {project.webLink && (
                  <Link
                    href={`/projects/${project.webLink}`}
                    className={
                      'dark:text-white font-semibold inline-flex items-center'
                    }
                  >
                    <FaGithub className='mr-1 mt-1' size={25} />
                  </Link>
                )}
                {project.githubLink && (
                  <Link
                    href={`/projects/${project.githubLink}`}
                    className={
                      'dark:text-white font-semibold inline-flex items-center'
                    }
                  >
                    <TbWorldWww className='mr-1 mt-1' size={25} />
                  </Link>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
