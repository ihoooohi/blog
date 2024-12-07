# Personal Blog

A modern personal blog built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern and responsive design
- Dark mode support
- MDX blog posts with Contentlayer
- SEO optimized
- Fast page loads
- Typography optimized for reading

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Writing Posts

Add your blog posts as MDX files in the `content/posts` directory. Each post should include frontmatter with the following fields:

```mdx
---
title: Your Post Title
date: YYYY-MM-DD
description: A brief description of your post
tags: ['tag1', 'tag2']
---

Your content here...
```

## Deployment

This blog is designed to be deployed on Vercel. Simply push your changes to GitHub and connect your repository to Vercel for automatic deployments.
