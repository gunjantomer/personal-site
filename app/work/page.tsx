import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { parseContentfulContentImage } from '@/lib/contentImage';
import RichText from '@/lib/RichText';
import { getTemplateEntry } from 'app/api/contentful/fetch-content';
import { AssetFields } from 'contentful';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import {
  ICard,
  ICardFields,
  ISoftwareEngineerPortfolioFields,
} from 'src/contentful/generated/contentful';

export default async function Portfolio() {
  const portfolioEntry = (await getTemplateEntry({
    content_type: 'softwareEngineerPortfolio',
  })) as ISoftwareEngineerPortfolioFields;

  return (
    <main>
      {portfolioEntry.experienceCards &&
        portfolioEntry.experienceCards.map((card: ICard) => {
          const cardProps = card.fields as ICardFields;
          const parsedImage = parseContentfulContentImage(
            cardProps?.image?.fields as AssetFields
          );
          return (
            <Card key={cardProps.title}>
              <CardHeader className='text-3xl'>{cardProps.title}</CardHeader>
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
                <RichText document={cardProps.description!} />
                {cardProps.skillBadges && (
                  <div className='flex flex-wrap gap-2 mt-6'>
                    {cardProps.skillBadges.map((skillBadge) => (
                      <Badge key={skillBadge}>{skillBadge}</Badge>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className='gap-4'>
                {cardProps.githubLink && (
                  <Link
                    href={`${cardProps.githubLink}`}
                    className={
                      'dark:text-white font-semibold inline-flex items-center'
                    }
                  >
                    <FaGithub className='mr-1 mt-1' size={25} />
                  </Link>
                )}
                {cardProps.webLink && (
                  <Link
                    href={`${cardProps.webLink}`}
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
    </main>
  );
}
