import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export interface TocItem {
  href: string;
  topics?: TocItem[];
}

export function getToc(): TocItem[] {
  const tocPath = path.join(process.cwd(), 'toc.yml');
  const tocContent = fs.readFileSync(tocPath, 'utf-8');
  const toc = yaml.load(tocContent) as TocItem[];
  return toc;
}

export function flattenToc(items: TocItem[]): string[] {
  const result: string[] = [];
  
  function traverse(items: TocItem[]) {
    items.forEach(item => {
      result.push(item.href.replace('.md', ''));
      if (item.topics) {
        traverse(item.topics);
      }
    });
  }
  
  traverse(items);
  return result;
}
