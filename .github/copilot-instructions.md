# VanshVeda - AI Assistant Instructions

This document guides AI agents on the key architectural patterns and development workflows for the VanshVeda website project.

## Project Overview
VanshVeda is a bilingual (Hindi/English) website for eco-friendly, cow-dung based organic products. The site features a maintenance/coming-soon page with animations, video showcase, and responsive design.

## Key Components & Architecture

### Core Structure
```
src/
├── css/         # Modular CSS with separate concerns
│   ├── main.css # Core styles, layout, components
│   └── video.css# Video-specific styling
├── js/
│   └── main.js  # Component initialization & interactions
└── videos/      # Media assets
```

### Component Architecture
- Components are initialized in `main.js` through dedicated init functions (e.g., `initVideoPlayer`, `initAnimations`)
- CSS follows a modular pattern with separate files for major features
- BEM-like naming convention: `.component__element--modifier`

### Key Patterns

#### 1. CSS Architecture
- Custom properties in `:root` for theming (colors, gradients, typography)
- Mobile-first responsive design with `clamp()` for fluid typography
- Feature detection for reduced motion & high contrast modes
- `backdrop-filter` blur effects for modern glass-morphism

#### 2. Video Player Integration
```javascript
// Custom video player with enhanced controls
initVideoPlayer() {
    // Video state management
    // Accessibility controls
    // Error handling with visual feedback
}
```

#### 3. Animation System
- CSS animations for visual effects
- Intersection Observer for scroll-triggered animations
- Performance optimizations with `requestAnimationFrame`
- Reduced motion preference support

## Development Workflows

### Adding New Features
1. Add styles to appropriate CSS file (main.css for core, video.css for media)
2. Initialize in main.js using dedicated init function
3. Implement responsive & accessible variations
4. Add reduced motion & high contrast alternatives

### CSS Conventions
- Use CSS variables for theme values
- Include fallbacks for modern CSS features
- Follow mobile-first breakpoints: 480px, 768px, 1024px
- Maintain consistent spacing with clamp() or rem units

### Accessibility Requirements
- Support screen readers with ARIA attributes
- Include keyboard navigation
- Honor user preferences (motion, contrast)
- Provide bilingual content structure

### Performance Guidelines
- Lazy load images using Intersection Observer
- Debounce scroll handlers
- Use CSS transform/opacity for animations
- Preload critical resources

## Testing Checklist
- [ ] Test in both Hindi and English contexts
- [ ] Verify reduced motion preference handling
- [ ] Check high contrast mode appearance
- [ ] Validate keyboard navigation
- [ ] Test responsive breakpoints
- [ ] Verify video player error states

## Common Tasks

### Updating Video Content
1. Add video file to `src/videos/`
2. Update source in `index.html`
3. Ensure error handling in `initVideoPlayer()`
4. Test fallback content

### Adding Features
1. Extend CSS variables if needed
2. Add HTML structure with bilingual support
3. Implement styles with responsive design
4. Initialize in `main.js` with dedicated function
5. Add accessibility enhancements