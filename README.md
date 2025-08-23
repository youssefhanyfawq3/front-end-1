# React + Vite + Tailwind CSS Project

A modern React application template built with Vite for fast development and Tailwind CSS for styling. This project provides a solid foundation for building responsive, performant web applications with the latest React features.

## 🚀 Features

- ⚡️ **Vite** - Blazing fast build tool and development server
- ⚛️ **React 19** - Latest React features and hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🔥 **Hot Module Replacement (HMR)** - Instant updates during development
- 📱 **Responsive Design** - Mobile-first approach with Tailwind utilities
- 🧹 **ESLint** - Code linting for consistent code quality
- 📦 **ES Modules** - Modern JavaScript modules
- 🎯 **Strict Mode** - React's strict mode for better development practices

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🛠️ Installation

Follow these steps to set up the project locally:

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd front-end-1
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

   Or using yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start the development server | 
| `npm run build` | Build the application for production | 
| `npm run preview` | Preview the production build locally | 
| `npm run lint` | Run ESLint to check for code issues | 

## 📁 Project Structure

```
front-end-1/
├── public/                    # Static assets
│   └── vite.svg               # Vite logo
├── src/                       # Source code
│   ├── assets/                # Images and other assets
│   │   └── react.svg          # React logo
│   ├── App.jsx                # Main application component
│   ├── index.css              # Global styles with Tailwind directives
│   └── main.jsx               # Application entry point
├── .eslintrc.js               # ESLint configuration
├── index.html                 # HTML template
├── package.json               # Project dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── vite.config.js             # Vite configuration
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling:

- **Tailwind directives** are included in `src/index.css`
- **Configuration** is in `tailwind.config.js`
- **Custom themes** can be extended in the Tailwind config file

To use Tailwind classes in your components:
```jsx
function MyComponent() {
  return (
    <div className="p-4 bg-blue-500 text-white rounded-lg">
      <h1 className="text-2xl font-bold">Hello World</h1>
    </div>
  );
}
```

## 🔧 Development

### Adding New Components

1. Create a new file in the `src/components/` directory (create if not exists)
2. Import and use the component in your application

### Customizing Tailwind

Modify `tailwind.config.js` to:
- Add custom colors
- Extend spacing
- Add custom animations
- Configure plugins

### Code Quality

Run ESLint to check for code issues:
```bash
npm run lint
```

## 📦 Building for Production

1. **Build the application**:
   ```bash
   npm run build
   ```

   This will create a `dist/` directory with optimized production builds.

2. **Preview the production build**:
   ```bash
   npm run preview
   ```

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [PostCSS Documentation](https://postcss.org/)
- [ESLint Documentation](https://eslint.org/)
