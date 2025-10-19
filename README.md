# Documentation Viewer MVP

A minimal documentation viewer inspired by OutSystems/docs-odc. This MVP demonstrates core documentation features:

## Features

✨ **Markdown Support**: Write documentation in Markdown format
📑 **YAML Table of Contents**: Organize docs with a simple YAML structure
🎨 **Clean UI**: Simple, readable documentation interface
🔍 **Navigation**: Browse through documentation topics

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

- `docs/` - Markdown documentation files
- `toc.yml` - Table of contents configuration
- `app/` - Next.js app directory
- `components/` - React components

## How to Add Documentation

1. Create a new `.md` file in the `docs/` folder
2. Add front matter with metadata:
   ```markdown
   ---
   title: Your Page Title
   ---
   
   Your content here...
   ```
3. Update `toc.yml` to include your new page

## Technology Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **react-markdown** - Markdown rendering
- **js-yaml** - YAML parsing
- **gray-matter** - Front matter parsing

## License

MIT
