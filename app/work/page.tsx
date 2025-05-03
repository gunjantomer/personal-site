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
            cardProps?.image?.fields as AssetFields,
          );
          return (
            <div
              key={cardProps.title}
              className="flex flex-col max-w-[90vw] mx-auto md:grid md:grid-cols-6 lg:grid-cols-12"
            >
              <div className="col-span-1 col-start-1 md:my-8">2018-2020</div>
              <Card
                className="md:col-span-5 md:col-start-2 lg:col-span-11 mt-5 sm:mt-0 md:ml-8 scale-100
                  transform-gpu overflow-hidden ring-2 ring-slate-500 md:ring-transparent
                  md:shadow-none border-transparent bg-transparent outline-none duration-300
                  lg:transition hover:scale-[103%] hover:bg-slate-300 dark:hover:bg-[#161e30]
                  hover:shadow-lg hover:shadow-slate-500/50"
              >
                <CardHeader className="text-3xl">{cardProps.title}</CardHeader>
                <CardContent className="flex flex-col">
                  {parsedImage && (
                    <img
                      src={parsedImage.src}
                      // Use the Contentful Images API to render
                      // responsive images. No next/image required:
                      srcSet={`${parsedImage.src}?w=300 1x, ${parsedImage.src} 2x`}
                      width={500}
                      height={400}
                      alt={parsedImage.alt}
                      className="self-center"
                    />
                  )}
                  <RichText document={cardProps.description!} />
                  {cardProps.skillBadges && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {cardProps.skillBadges.map((skillBadge) => (
                        <Badge key={skillBadge}>{skillBadge}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="gap-4">
                  {cardProps.githubLink && (
                    <Link
                      href={`${cardProps.githubLink}`}
                      className={
                        'inline-flex items-center font-semibold dark:text-white'
                      }
                    >
                      <FaGithub className="mr-1 mt-1" size={25} />
                    </Link>
                  )}
                  {cardProps.webLink && (
                    <Link
                      href={`${cardProps.webLink}`}
                      className={
                        'inline-flex items-center font-semibold dark:text-white'
                      }
                    >
                      <TbWorldWww className="mr-1 mt-1" size={25} />
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </div>
          );
        })}
    </main>
  );
}
