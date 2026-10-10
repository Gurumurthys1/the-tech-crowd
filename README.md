# The Tech Crowd

A student-driven technology community for building, learning, and creating meaningful solutions together.

## Stack

- [TanStack Start](https://tanstack.com/start) — full-stack React framework
- [TanStack Router](https://tanstack.com/router) — type-safe file-based routing
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) — accessible component primitives
- [Vite](https://vite.dev/) — fast dev server & bundler

## Development

You need Node.js (v18+) and npm.

```sh
git clone <this-repository-url>
cd the-tech-crowd
npm install --legacy-peer-deps
npm run dev
```

The app runs at **http://localhost:5173**.

## Project Structure

```
src/
  routes/        # File-based pages (__root.tsx is the shared layout)
  components/    # Shared UI components (site.tsx = header/footer/cards)
  data/          # Static data (events, etc.)
  lib/           # Utilities
  styles.css     # Global styles & design tokens
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Run Prettier |
| `npm test` | Run tests |
