import * as contentful from 'contentful';
import { type Entry } from 'contentful';

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID as string,
  accessToken: CONTENTFUL_ACCESS_TOKEN as string,
  environment: 'master',
  retryLimit: 100,
});

export function parseEntry(entry?: Entry): object | null {
  return { ...entry?.fields };
}

export async function getTemplateEntry(params: object): Promise<object | null> {
  const resp = await client.getEntries(params);

  return parseEntry(resp.items[0]);
}

export async function getTemplateEntries(
  entryId: string
): Promise<Entry[] | null> {
  const resp = await client.getEntries({
    content_type: entryId,
    include: 10,
  });

  return resp.items;
}
