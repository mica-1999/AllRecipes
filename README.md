# MomRecipesApp

A modern web application for storing, organizing, and sharing family recipes with advanced features planned for the future.

## 🍽️ Project Overview

MomRecipesApp is built with Next.js, TypeScript, and PostgreSQL to create a robust recipe management system. The application allows users to store recipes, categorize them, and search through their collection with ease. Perfect for preserving family culinary traditions while using modern technology.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Language**: TypeScript
- **Development Tools**: ESLint, Turbopack
- **Deployment**: Vercel

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

3. Set up your environment variables
   ```bash
   cp .env.example .env.local
   # Then edit .env.local with your database credentials and other config
   ```

4. Set up the database
   ```bash
   npx prisma migrate dev --name init
   npx prisma db seed # if you have seed data
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
- User authentication and profiles
- Responsive design for all devices
- Recipe search functionality
- Image uploads for recipes

### Planned Features
- Recipe categorization and tagging
- Advanced search with filtering options
- Meal planning calendar
- Grocery list generation
- Nutritional information calculation
- Recipe scaling for different serving sizes
- Social sharing capabilities
- Mobile app version
- Print-friendly recipe views
- Recipe versioning (track modifications)
- Favorites and collections

## 📊 Database Schema

The application uses PostgreSQL with Prisma ORM. The core data models include:

**User**
- Personal information
- Authentication details
- Preferences

**Recipe**
- Title, description, prep/cook times
- Creator reference
- Image URLs
- Serving size

**Category**
- Name and description
- Parent category (for hierarchical organization)

**Ingredient**
- Name, amount, unit
- Recipe reference
- Optional alternatives

**Instruction**
- Step number and description
- Recipe reference
- Optional images per step

**Review**
- Rating and comments
- User reference
- Recipe reference

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run end-to-end tests
npm run test:e2e
```

## 🛡️ Security

This application implements:
- CSRF protection
- Input sanitization
- Rate limiting on API routes
- Secure authentication flow
- Data encryption for sensitive information

## 📱 Responsive Design

The app is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Large displays

## 🔧 Tools & Resources

- [Google Fonts](https://fonts.google.com/) for typography
- Prisma Highlight syntax and UML generation for database modeling
- Vercel for deployment and hosting
- Cloudinary for image storage (planned)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please adhere to the coding standards and add appropriate tests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📬 Contact

Project Link: [https://github.com/yourusername/MomRecipesApp](https://github.com/yourusername/MomRecipesApp)