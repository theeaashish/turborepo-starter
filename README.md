# 🚀 Ultimate Turborepo Starter Kit

Welcome to the **Ultimate Turborepo Starter Kit**! This monorepo is designed to provide a scalable, high-performance foundation for your next big project. It comes pre-configured with the latest technologies and best practices.

## 📦 What's Inside?

This starter kit includes a powerful combination of tools and configurations:

### 🏗️ Apps & Packages

- **`apps/web`**: A [Next.js 16](https://nextjs.org/) application (App Router) with Tailwind CSS v4 and Biome.
- **`packages/ui`**: A shared React component library using **Shadcn UI** primitives and Tailwind CSS.
- **`packages/database`**: A type-safe database client using **Prisma 7** and PostgreSQL.
- **`packages/typescript-config`**: Shared `tsconfig.json` configurations for consistency.
- **`packages/eslint-config`**: Shared ESLint configurations.

### 🛠️ Tech Stack

- **Monorepo Manager**: [Turborepo](https://turbo.build/) (v2)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Framework**: [Next.js](https://nextjs.org/)
- **Database ORM**: [Prisma](https://www.prisma.io/) (v7)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Linting & Formatting**: [Biome](https://biomejs.dev/) & [ESLint](https://eslint.org/)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: >= 20.x
- **pnpm**: >= 9.x
- **PostgreSQL**: Running locally or via a provider (e.g., Neon, Supabase).

### 1️⃣ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/theeaashish/turborepo-starter.git
cd turborepo-starter
pnpm install
```

### 2️⃣ Environment Setup

Create a `.env` file in `packages/database`:

```bash
# packages/database/.env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

### 3️⃣ Database Setup

Generate the Prisma client:

```bash
pnpm db:generate
```

### 4️⃣ Run Development Server

Start the development server for all apps:

```bash
pnpm dev
```

The web app will be available at `http://localhost:3000`.

---

## 📜 Scripts & Commands

| Command            | Description                                                              |
| :----------------- | :----------------------------------------------------------------------- |
| `pnpm dev`         | Start the development server for all apps.                               |
| `pnpm build`       | Build all apps and packages.                                             |
| `pnpm lint`        | Run linting across the monorepo.                                         |
| `pnpm format`      | Format code using Prettier/Biome.                                        |
| `pnpm check-types` | Run TypeScript type checking.                                            |
| `pnpm db:generate` | Generate Prisma client (run in `packages/database` or root with filter). |
| `pnpm clean`       | Clean `node_modules` and `.turbo` caches.                                |

---

## 🏗️ Project Structure

```
.
├── apps
│   └── web                 # Next.js application
├── packages
│   ├── database            # Prisma schema and client
│   ├── eslint-config       # Shared ESLint configs
│   ├── typescript-config   # Shared TS configs
│   └── ui                  # Shared UI components
├── turbo.json              # Turborepo pipeline config
└── package.json            # Root scripts and dependencies
```

## 💡 Best Practices

### Caching

Turborepo caches the output of your tasks (`build`, `lint`, etc.). If you run a task again without changing inputs, it will replay the output instantly.

### Pipelines

The `turbo.json` file defines the task pipeline. Tasks like `build` depend on their dependencies being built first (`^build`).

### Database

The `database` package exports a singleton `prisma` instance. Import it in your apps like this:

```ts
import { prisma } from "@repo/database";
```

### UI Components

The `ui` package exports shared components. Import them like this:

```tsx
import { Button } from "@repo/ui/components/ui/button";
```

---

## 🤝 Contributing

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'Add some amazing feature'`).
4.  Push to the branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.

---

Made with ❤️ by Aashish Joshi
