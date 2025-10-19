---
title: First Steps
---

# First Steps

Now that you have the documentation viewer installed, let's explore what you can do.

## Understanding the Structure

### Documentation Files

All documentation files are located in the `docs/` folder. Each file is written in Markdown format.

### Table of Contents

The `toc.yml` file defines the navigation structure:

```yaml
# Section Title
- href: path/to/file.md
- topics:
    - href: path/to/another.md
```

## Creating Your First Page

1. **Create a Markdown file** in `docs/`:

```markdown
---
title: My New Page
---

# My New Page

This is my content.
```

2. **Add it to `toc.yml`**:

```yaml
- href: my-new-page.md
```

3. **Restart the dev server** to see changes

## Front Matter

Each Markdown file should have front matter at the top:

```markdown
---
title: Page Title
---
```

This metadata is used for:
- Page titles
- Navigation labels
- SEO information

## What's Next?

Explore the **Building Apps** section to learn about:
- Data management
- UI design
- Application logic
