# Jokes App 🃏

A modern, interactive jokes application built with Angular 20 that delivers daily laughs through a clean and responsive interface.

![Angular](https://img.shields.io/badge/Angular-20-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![License](https://img.shields.io/badge/License-Private-red)

## ✨ Features

- **🎲 Random Joke Generator**: Get fresh jokes on demand
- **📂 Category Filtering**: Browse jokes by category
- **🎯 Interactive Reveal**: Click to reveal punchlines
- **📱 Responsive Design**: Works perfectly on all devices
- **⚡ Fast Loading**: Optimized for performance
- **🎨 Modern UI**: Clean, attractive interface with smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amitkhatkar/jokes-app.git
   cd jokes-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Angular 20 with standalone components
- **Styling**: CSS3 with Flexbox/Grid
- **State Management**: Angular Signals API
- **Build Tool**: Angular CLI
- **Language**: TypeScript 5.8

### Project Structure
```
src/
├── app/
│   ├── components/
│   │   └── joke-display/
│   │       ├── joke-display.component.ts
│   │       ├── joke-display.component.html
│   │       └── joke-display.component.css
│   ├── services/
│   │   └── joke.service.ts
│   └── app.ts
├── styles.css
└── index.html
```

## 🎯 Usage

1. **Get a Random Joke**: Click "Next Joke" to load a new joke
2. **Filter by Category**: Use the dropdown to select joke categories
3. **Reveal Punchline**: Click "Reveal Punchline" to see the answer
4. **Enjoy**: Share laughs with friends and family!

## 📊 Joke Categories

- **Science** - Nerdy science jokes
- **Puns** - Clever wordplay
- **Food** - Delicious food humor
- **Math** - Mathematical wit
- **Animals** - Creature comedy
- **Fitness** - Gym and exercise jokes

## 🛠️ Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run lint` - Run linting

### Adding New Jokes

Edit `src/app/services/joke.service.ts` to add more jokes:

```typescript
{
  id: 9,
  setup: "Your setup here",
  punchline: "Your punchline here",
  category: "Your category"
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This is a private repository. All rights reserved. See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- Built with [Angular](https://angular.io/)
- Icons from various open-source libraries
- Jokes curated from public domain sources

## 📞 Contact

Amit Khatkar Ji - [@amitkhatkar](https://github.com/amitkhatkar)

Project Link: [https://github.com/amitkhatkar/jokes-app](https://github.com/amitkhatkar/jokes-app)
