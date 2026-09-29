# ByteSpace

An online learning platform landing page where users can discover courses, explore learning paths, and create or manage their own content.

## Tech Stack

- **Next.js** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS**
- **ESLint + Prettier**

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command          | Description                       |
| ---------------- | --------------------------------- |
| `npm run dev`    | Start the development server      |
| `npm run build`  | Create a production build         |
| `npm run start`  | Run the production build          |
| `npm run lint`   | Run ESLint                        |
| `npm run format` | Format the codebase with Prettier |

## Project Structure

```
src/
├── app/            Routes and layouts
├── assets/         Local fonts
├── components/     Reusable UI and shared components
│   ├── ui/
│   └── shared/
├── config/         Fonts and site configuration
├── constants/      Route and app-wide constants
├── data/           Static content (courses, categories, testimonials, ...)
├── features/       Feature modules (landing, auth)
├── lib/            Utilities
└── types/          Shared TypeScript types
```

Content is served from the `src/data` layer, keeping presentation components free of hardcoded data.
