import {
  getTemplateEntries,
  getTemplateEntry,
} from 'app/api/contentful/fetch-content';
import { IProject, IProjectFields } from 'src/contentful/generated/contentful';

// A function to fetch all blog posts.
export async function fetchProjectsList() {
  const projectsList = (await getTemplateEntries('project')) as IProject[];

  return projectsList.map(
    (projectEntry) => projectEntry.fields as IProjectFields
  );
}

// A function to fetch a single blog post by its slug.
export async function fetchProject(slug: string) {
  const project = (await getTemplateEntry({
    content_type: 'project',
    'fields.slug': slug,
    include: 1,
  })) as IProject;

  return project as IProjectFields;
}
