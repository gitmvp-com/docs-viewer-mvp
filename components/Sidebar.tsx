import Link from 'next/link';
import styles from './Sidebar.module.css';

interface TocItem {
  href: string;
  topics?: TocItem[];
}

interface SidebarProps {
  toc: TocItem[];
  currentSlug: string;
}

function TocTree({ items, currentSlug, level = 0 }: { items: TocItem[]; currentSlug: string; level?: number }) {
  return (
    <ul className={level === 0 ? styles.rootList : styles.nestedList}>
      {items.map((item, idx) => {
        const slug = item.href.replace('.md', '');
        const isActive = currentSlug === slug;
        const title = item.href.split('/').pop()?.replace('.md', '').replace(/-/g, ' ') || '';

        return (
          <li key={idx} className={styles.item}>
            <Link
              href={`/docs/${slug}`}
              className={`${styles.link} ${isActive ? styles.active : ''}`}
            >
              {title}
            </Link>
            {item.topics && item.topics.length > 0 && (
              <TocTree items={item.topics} currentSlug={currentSlug} level={level + 1} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar({ toc, currentSlug }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <Link href="/" className={styles.homeLink}>
          ← Home
        </Link>
        <h2>Documentation</h2>
      </div>
      <nav className={styles.nav}>
        <TocTree items={toc} currentSlug={currentSlug} />
      </nav>
    </aside>
  );
}
