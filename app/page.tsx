import Link from 'next/link';
import { getToc } from '@/lib/toc';
import styles from './page.module.css';

export default function Home() {
  const toc = getToc();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Documentation Viewer MVP</h1>
        <p>A simple documentation system with markdown and YAML TOC</p>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Welcome</h2>
          <p>
            This is a minimal viable product (MVP) inspired by OutSystems/docs-odc.
            It demonstrates core documentation features:
          </p>
          <ul>
            <li>📝 Markdown documentation files</li>
            <li>📑 YAML-based table of contents</li>
            <li>🎨 Clean, readable interface</li>
            <li>🔍 Easy navigation</li>
          </ul>
        </section>

        <section className={styles.docs}>
          <h2>Documentation</h2>
          <div className={styles.grid}>
            {toc.map((section, idx) => (
              <div key={idx} className={styles.card}>
                <h3>
                  <Link href={`/docs/${section.href.replace('.md', '')}`}>
                    {section.href.split('/').pop()?.replace('.md', '').replace('-', ' ')}
                  </Link>
                </h3>
                {section.topics && section.topics.length > 0 && (
                  <ul>
                    {section.topics.slice(0, 3).map((topic, topicIdx) => (
                      <li key={topicIdx}>
                        <Link href={`/docs/${topic.href.replace('.md', '')}`}>
                          {topic.href.split('/').pop()?.replace('.md', '').replace(/-/g, ' ')}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Get Started</h2>
          <p>Ready to explore the documentation?</p>
          <Link href="/docs/getting-started/intro" className={styles.button}>
            View Documentation →
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Built with Next.js, TypeScript, and Markdown</p>
      </footer>
    </div>
  );
}
