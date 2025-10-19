---
title: Logic
---

# Application Logic

Implement business logic and data processing.

## Overview

Application logic handles:

- Data processing
- Business rules
- Workflows
- Integrations

## Server-Side Logic

### API Routes

Create API endpoints in Next.js:

```typescript
// app/api/docs/[slug]/route.ts
import { NextResponse } from 'next/server';
import { getDocBySlug } from '@/lib/docs';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const doc = await getDocBySlug(params.slug);
  
  if (!doc) {
    return NextResponse.json(
      { error: 'Document not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(doc);
}
```

### Data Processing

Process documentation files:

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getDocBySlug(slug: string) {
  const docsDirectory = path.join(process.cwd(), 'docs');
  const filePath = path.join(docsDirectory, `${slug}.md`);
  
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  
  return {
    slug,
    title: data.title,
    content,
  };
}
```

## Client-Side Logic

### State Management

Manage component state:

```typescript
import { useState, useEffect } from 'react';

export function useDoc(slug: string) {
  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(`/api/docs/${slug}`)
      .then(res => res.json())
      .then(data => {
        setDoc(data);
        setLoading(false);
      });
  }, [slug]);
  
  return { doc, loading };
}
```

### Event Handling

Handle user interactions:

```typescript
function SearchBar() {
  const [query, setQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic
  };
  
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search docs..."
      />
    </form>
  );
}
```

## Best Practices

1. **Separation of concerns** - Keep logic separate from UI
2. **Error handling** - Always handle errors gracefully
3. **Type safety** - Use TypeScript interfaces
4. **Testing** - Write unit tests for logic
