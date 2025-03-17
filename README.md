# MomRecipesApp

A modern web application for storing, organizing, and sharing family recipes with advanced features planned for the future.

## 🍽️ Project Overview

MomRecipesApp is built with Next.js, TypeScript, and PostgreSQL to create a robust recipe management system. The application allows users to store recipes, categorize them, and search through their collection with ease.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Language**: TypeScript
- **Development Tools**: ESLint, Turbopack

## 🗂️ Project Structure

```
MomRecipesApp/
├── .env.local                    # Environment variables (DB config, NextAuth)
├── .gitignore                    # Git ignore patterns
├── eslint.config.mjs             # ESLint configuration
├── next-env.d.ts                 # Next.js TypeScript declarations
├── next.config.ts                # Next.js configuration
├── package-lock.json             # NPM package lock
├── package.json                  # Project dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # Project documentation
├── tsconfig.json                 # TypeScript configuration
├── node_modules/                 # Dependencies
├── lib/                          # Utility functions
├── middleware/                   # Next.js middleware
├── prisma/                       # Prisma DB schema and migrations
├── public/                       # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
│   └── images/                   # Image assets
├── scripts/                      # Build scripts
├── src/                          # Source code
│   └── app/                      # Next.js App Router
│       ├── favicon.ico
│       ├── globals.css           # Global styles with Tailwind
│       ├── layout.tsx            # Root layout with Geist font
│       ├── page.tsx              # Homepage component
│       └── api/                  # API routes folder
└── translations/                 # Internationalization resources
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/MomRecipesApp.git
   cd MomRecipesApp
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up your environment variables (copy .env.example to .env.local and adjust values)

4. Set up the database
   ```bash
   npx prisma migrate dev --name init
   ```

5. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:4000](http://localhost:4000) in your browser

## 📋 Features

### Current Features
- Recipe storage and management
- User authentication
- Responsive design

### Planned Features
- Recipe categorization and tagging
- Advanced search functionality
- Meal planning
- Grocery list generation
- Nutritional information calculation
- Recipe scaling
- Social sharing capabilities
- Mobile app integration

## 🧪 Testing

```bash
# Run tests
npm run test
# or
yarn test
```

## 📊 Database Schema

The application uses PostgreSQL with Prisma ORM. Key models include:
- Users
- Recipes
- Categories
- Ingredients
- Instructions
- Reviews

## Stuff Used 
https://fonts.google.com/ 
Prisma Highlight syntax and UML generation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.