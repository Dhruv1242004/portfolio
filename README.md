# Dhruv Patel Portfolio

Personal portfolio site built with Next.js, React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Overview

This project is a single-page developer portfolio with:

- a polished hero section with animated glassmorphism visuals
- featured project highlights
- experience timeline
- skills overview
- education and about section
- contact section with resume and social links
- metadata and Open Graph image support

All portfolio content is managed from a single source of truth in `src/data/portfolio.ts`.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    opengraph-image.tsx
  components/
    Header.tsx
    Footer.tsx
    BackgroundEffects.tsx
    AnimateOnScroll.tsx
    SectionWrapper.tsx
    sections/
      Hero.tsx
      FeaturedWork.tsx
      Experience.tsx
      Skills.tsx
      About.tsx
      Contact.tsx
  data/
    portfolio.ts
public/
  resume.pdf
  icon.svg
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run dev:turbo
npm run build
npm run start
npm run lint
```

## Content Updates

To update portfolio content, edit:

```text
src/data/portfolio.ts
```

This file controls:

- personal information
- hero copy
- projects
- experience
- education
- skills
- social links

## Deployment

This project is ready to deploy on Vercel.

Typical flow:

1. Push the repo to GitHub.
2. Import the repository into Vercel.
3. Let Vercel detect the Next.js configuration automatically.
4. Deploy.

## Notes

- Resume asset lives at `public/resume.pdf`
- Open Graph image is generated from `src/app/opengraph-image.tsx`
- Site metadata is defined in `src/app/layout.tsx`
