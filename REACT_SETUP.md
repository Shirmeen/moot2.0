# Crescent Academia Moot 2.0 - React App

A modern React application for the Crescent Academia Moot 2.0 event website built with component-based architecture.

## Project Structure

```
src/
├── components/
│   ├── About.js / About.css
│   ├── Contact.js / Contact.css
│   ├── Details.js / Details.css
│   ├── Footer.js / Footer.css
│   ├── Hero.js / Hero.css
│   ├── Location.js / Location.css
│   └── Navbar.js / Navbar.css
├── App.js
├── App.css
├── index.js
└── index.css
public/
└── index.html
package.json
```

## Features

- **Component-Based Architecture** - Modular and reusable components
- **Responsive Design** - Mobile, tablet, and desktop support
- **Smooth Navigation** - Smooth scrolling between sections
- **Modern Styling** - CSS3 with animations and transitions
- **React Hooks** - useState and useEffect for state management
- **Accessibility** - Semantic HTML and keyboard navigation

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Navigate to the project directory:**
   ```bash
   cd c:\Projects\moot2.0
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner.

## Components

### Navbar
- Sticky navigation bar
- Mobile-responsive hamburger menu
- Active section highlighting
- Smooth scrolling to sections

### Hero
- Large banner with event title
- Event dates and organizer information
- Call-to-action button

### About
- Event description
- Feature highlights in grid cards
- Hover animations

### Details
- Event dates and times
- Location information
- Organizer details
- Timezone information

### Location
- Embedded Google Map
- Venue address
- Direct Google Maps link

### Contact
- Contact information
- Email link
- Organization details

### Footer
- Copyright information
- Event details summary

## Styling

The app uses CSS3 with:
- CSS Variables for colors and theming
- Flexbox and Grid layouts
- Media queries for responsive design
- Keyframe animations
- CSS transitions for hover effects

### Color Scheme
- Primary: #1a472a (Dark Green)
- Secondary: #d4af37 (Gold)
- Accent: #2d5a3d (Forest Green)
- Light Background: #f5f5f5

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

## Customization

### Change Event Details
Edit the component files to update:
- Event dates in `Hero.js` and `Details.js`
- Location info in `Location.js`
- Contact details in `Contact.js`

### Modify Colors
Update CSS variables in `index.css`:
```css
:root {
  --primary-color: #1a472a;
  --secondary-color: #d4af37;
  --accent-color: #2d5a3d;
  --light-bg: #f5f5f5;
  --dark-text: #333;
  --white: #ffffff;
}
```

### Add New Sections
1. Create a new component in `src/components/`
2. Import and use in `App.js`
3. Add navigation link in `Navbar.js`

## Performance

- Code splitting ready
- Optimized component rendering
- Minimal dependencies
- Fast load times

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Build the app: `npm run build`
2. Connect your Git repository to Netlify
3. Deploy the `build` folder

### Traditional Server
```bash
npm run build
# Copy the contents of the build folder to your server
```

## Technologies Used

- **React 18.2.0** - UI library
- **React DOM 18.2.0** - React rendering
- **React Scripts 5.0.1** - Build tools

## Event Information

- **Event Name:** Crescent Academia Moot 2.0
- **Organizer:** Crescent Girls
- **Dates:** February 13-15, 2026
- **Time:** 9:00 AM - 4:30 PM PKT
- **Location:** The Crescent College Lahore, Girls Campus
- **City:** Lahore, Punjab, Pakistan

## Troubleshooting

### Port already in use
```bash
npm start -- --port 3001
```

### Clear cache and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build issues
```bash
npm run build -- --reset-cache
```

## Future Enhancements

- Event registration form
- Participant dashboard
- Event schedule/timeline
- Image gallery
- User authentication
- Blog/news section
- Social media integration
- Analytics tracking

## Contributing

For modifications or feature requests, please contact the Crescent Girls organization.

## License

&copy; 2026 Crescent Academia Moot 2.0. All rights reserved.

---

**Created:** January 28, 2026  
**Version:** 1.0.0  
**Status:** Production Ready
