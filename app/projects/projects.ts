import {
  getTemplateEntries,
  getTemplateEntry,
} from 'app/api/contentful/fetch-content';
import { IProject, IProjectFields } from 'src/contentful/generated/contentful';

// A function to fetch all project cards.
export async function fetchProjectsList() {
  const projectsList = (await getTemplateEntries('card', {
    'fields.cardType': 'Project',
  })) as IProject[];

  return projectsList.map(
    (projectEntry) => projectEntry.fields as IProjectFields
  );
}

// TODO: Fix individual project page
// A function to fetch a single project card by its slug.
export async function fetchProject(slug: string) {
  const project = (await getTemplateEntry({
    content_type: 'project',
    'fields.slug': slug,
    'fields.cardType': 'Project',
    include: 1,
  })) as IProject;

  return project as IProjectFields;
}
