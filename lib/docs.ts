import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getToc, flattenToc } from './toc';

export interface Doc {
  slug: string;
  title: string;
  content: string;
}

const docsDirectory = path.join(process.cwd(), 'docs');

export function getDocBySlug(slug: string): Doc | null {
  try {
    const filePath = path.join(docsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || slug.split('/').pop() || 'Untitled',
      content,
    };
  } catch (error) {
    console.error(`Error reading doc: ${slug}`, error);
    return null;
  }
}

export function getAllDocSlugs(): string[] {
  const toc = getToc();
  return flattenToc(toc);
}
