import { getTemplateEntry } from 'app/api/contentful/fetch-content';
import { ISoftwareEngineerPortfolioFields } from 'src/contentful/generated/contentful';
import RichText from '@/lib/RichText';

export default async function Portfolio() {
  const portfolioEntry = (await getTemplateEntry({
    content_type: 'softwareEngineerPortfolio',
  })) as ISoftwareEngineerPortfolioFields;

  return (
    <main>
      <h1>{portfolioEntry.name}</h1>
      <RichText document={portfolioEntry.bio!} />
    </main>
  );
}
