# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a learning repository for the [Full Stack Open](https://fullstackopen.com/) course, covering modern web development with React, Node.js REST APIs, GraphQL, testing, and MongoDB. The repository contains a series of standalone React applications (exercises), organized by course parts.

## Repository Structure

```
part0/           # Course fundamentals (HTTP/SPA sequence diagrams)
part1/           # React fundamentals exercises
  ├── part1/     # Basic React exercises (1.1-1.5)
  ├── courseinfo/    # Component composition (1.1-1.5)
  ├── unicafe/       # State management (1.6-1.10)
  └── anecdotes/     # Complex state & arrays (1.11-1.14)
```

Each exercise is a **separate, standalone React application** with its own `package.json` and `node_modules`. There is no monorepo configuration.

## Development Commands

All projects use Vite as the build tool with identical npm scripts:

```bash
# Navigate to the specific project directory first
cd part1/anecdotes

# Start development server with hot module replacement
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

**Important:** Always `cd` into the specific project directory before running commands. Each project is self-contained.

## Technology Stack

- **Frontend:** React 19.2.0 (functional components with hooks)
- **Build Tool:** Vite 7.2.4
- **Language:** JavaScript (ES6+ modules, JSX) - no TypeScript
- **Linting:** ESLint 9.39.1 with React plugins

## Code Conventions

- Use **functional components** with hooks (no class components)
- Prefer **multiple independent state variables** with `useState`
- Destructure props directly in function parameters: `const Part = ({name, exercises}) => {...}`
- Use **spread operator** for array immutation: `const newArray = [...oldArray]`
- ES6 module imports: `import { useState } from 'react'`
- File extensions: `.jsx` for components, `.js` for utilities

## Git Workflow

Commit messages are in Chinese (e.g., "练习1.14" for Exercise 1.14). Each exercise typically has its own commit showing incremental progress.
