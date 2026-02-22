# VanshVeda - AI Agent Instructions

## Project Overview

VanshVeda is a bilingual (Hindi/English) eco-friendly website showcasing cow-dung based organic products. It's a single-page application built with vanilla HTML5/CSS3/JavaScript focusing on sustainable living and traditional Indian wisdom.

## Architecture & File Structure

### Core Structure

- `index.html` - Single-page application with all content
- `src/css/main.css` - Primary stylesheet with CSS custom properties system
- `src/css/video.css` - Dedicated video player styling
- `src/js/main.js` - Modular JavaScript with initialization pattern
- `src/images/` - Brand assets and favicon collection
- `src/videos/` - Product demonstration videos

### Design System

The project uses a comprehensive CSS custom properties system in `:root`:

```css
--primary-green: #2d5016    /* Brand primary */
--soft-yellow: #f4e5a0      /* Accent color */
--cream: #f7f3e9            /* Light backgrounds */
--warm-beige: #e6d7c3       /* Text color */
--font-devanagari: 'Noto Sans Devanagari', sans-serif
--font-english: 'Inter', sans-serif
--font-display: 'Playfair Display', serif
```

Always use these custom properties instead of hardcoded colors/fonts.

## Code Patterns & Conventions

### JavaScript Architecture

- **Initialization Pattern**: All functionality initializes via `DOMContentLoaded` event
- **Modular Functions**: Each major feature has its own `init*()` function (e.g., `initNavigation()`, `initVideoPlayer()`)
- **Defensive Coding**: Always check element existence before attaching listeners
- **Event Delegation**: Use `querySelector`/`querySelectorAll` for element selection

Example pattern:

```javascript
function initFeature() {
  const element = document.querySelector(".feature-element");
  if (!element) return;

  element.addEventListener("click", function () {
    // Feature logic
  });
}
```

### CSS Patterns

- **Mobile-First**: Use `clamp()` for responsive typography
- **Component Classes**: Follow BEM-like naming (`.navbar`, `.nav-container`, `.nav-link`)
- **Animation Classes**: `.animate-in` for scroll-triggered animations
- **State Classes**: `.active`, `.scrolled`, `.playing` for interactive states

### Bilingual Content Strategy

- Hindi text uses `--font-devanagari` with fallback
- English text uses `--font-english`
- Content structure: Hindi first, English as subtitle/support
- Both languages integrated in same components, not separate sections

## Key Components

### Navigation System

- Fixed navbar with backdrop blur effect
- Smooth scrolling with 80px offset for fixed header
- Active section highlighting based on scroll position
- Mobile hamburger menu with body scroll lock

### Video Player

- Custom controls overlay on HTML5 video
- Auto-restart functionality after video ends
- Loading states and error handling
- Click-to-play/pause on video element

### Scroll Effects

- Parallax background movement on hero section
- Intersection Observer for element animations
- Navbar styling changes on scroll

## Development Workflow

### Local Development

```bash
# Serve locally (recommended for video playback)
python -m http.server 8000
# or
npx serve .
```

### Asset Management

- Images: Compress before adding to `src/images/`
- Videos: Place in `src/videos/` with `.mp4` format
- Fonts: Google Fonts CDN, no local font files

### Browser Support

- Modern browsers (Chrome 80+, Firefox 75+, Safari 13+)
- Uses modern CSS (clamp, backdrop-filter, CSS Grid)
- No polyfills or transpilation needed

## Performance Considerations

- Single CSS/JS files to minimize HTTP requests
- Optimized image formats and sizes expected
- Video preload="metadata" for faster initial load
- Google Fonts with `display=swap` for text visibility

## Content Management

- All content is in `index.html` - no CMS or external data
- Product information in hardcoded HTML structures
- Contact form is demo-only (no backend integration)
- SEO meta tags extensively configured in `<head>`

## Common Tasks

- **Add new product**: Copy existing `.feature-card` structure in HTML
- **Update colors**: Modify CSS custom properties in `:root`
- **Add animations**: Use existing `.animate-in` class and Intersection Observer
- **Mobile menu**: All logic in `initNavigation()` function
- **Video changes**: Update `src/videos/` path and ensure `.mp4` format

## Critical Don'ts

- Don't break the single-file architecture (keep all content in `index.html`)
- Don't add frameworks - maintain vanilla JavaScript approach
- Don't modify the CSS custom properties without updating all references
- Don't change the bilingual content structure (Hindi primary, English secondary)
- Don't add external dependencies without careful consideration of performance impact
