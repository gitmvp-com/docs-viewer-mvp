import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getDocBySlug, getAllDocSlugs } from '@/lib/docs';
import { getToc } from '@/lib/toc';
import Sidebar from '@/components/Sidebar';
import styles from './page.module.css';

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const slugs = getAllDocSlugs();
  return slugs.map((slug) => ({
    slug: slug.split('/'),
  }));
}

export default function DocPage({ params }: PageProps) {
  const slug = params.slug.join('/');
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const toc = getToc();

  return (
    <div className={styles.container}>
      <Sidebar toc={toc} currentSlug={slug} />
      <main className={styles.main}>
        <article className={styles.article}>
          <h1>{doc.title}</h1>
          <div className={styles.content}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {doc.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
}
