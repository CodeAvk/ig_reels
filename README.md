# React Reels Component

A feature-rich, responsive React component for displaying video reels in a social media style interface, similar to Instagram Reels or TikTok. This component provides a full-screen video experience with interactive elements like likes, comments, sharing, and user engagement features.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or yarn
- Git

## Getting Started

1. Clone the repository:
```bash
https://github.com/CodeAvk/ig_reels.git
```

2. Navigate to the project directory:
```bash
cd ig_reels
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and visit:
```
http://localhost:3000
```



## Features

- Full-screen vertical video playback
- Auto-play when in viewport
- Double-tap to like animation
- Mute/unmute toggle
- Like, comment, and share functionality
- User profile section with follow/unfollow button
- Expandable video description
- Product tagging support
- Bottom navigation bar
- Mobile-responsive design
- Share menu with native share API support
- More options menu
- Video playback controls
- Intersection Observer for optimized video loading

## Development

### Running Tests
```bash
npm run test
# or
yarn test
```

### Building for Production
```bash
npm run build
# or
yarn build
```

### Linting
```bash
npm run lint
# or
yarn lint
```

## Troubleshooting

Common issues and their solutions:

1. **Video playback issues**
   - Check if the video format is supported by the browser
   - Ensure proper CORS headers are set for video resources

2. **Performance issues**
   - Optimize video files
   - Use appropriate video compression
   - Implement lazy loading

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Performance Optimization Tips

- Use compressed video formats
- Implement lazy loading for videos
- Optimize image assets
- Use proper caching strategies
- Implement virtual scrolling for multiple reels

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Dependencies

All required dependencies are listed in `package.json`. Key dependencies include:
- React
- Material-UI
- Emotion
- React Icons

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
