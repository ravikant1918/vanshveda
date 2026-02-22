<!--
    VanshVeda — Copilot instructions
    Purpose: short, action-oriented guidance so an AI coding agent can be productive immediately.
    Keep this file to ~20–50 lines; reference concrete files and patterns below.
-->

# VanshVeda — AI contributor instructions

Overview
- This is a small, static-ish website (HTML/CSS/vanilla JS + a few PHP helpers) for a bilingual eco-products landing site. Key interactive logic lives in `src/js/main.js`, styles in `src/css/*.css`, and runtime configuration in `config/config.php`.

Quick structure (most important paths)
- `index.html`, `index.php` — main entry points used for previews and PHP-backed builds.
- `src/js/main.js` — initializes site: `initNavigation()`, `initScrollEffects()`, `initVideoPlayer()`, `initAnimations()`, `initAccessibility()`, `initPerformanceOptimizations()`; use these functions as integration points.
- `src/css/main.css`, `src/css/video.css`, `src/css/navigation.css` — theme variables in :root, mobile-first breakpoints, and component styles.
- `src/videos/` — media assets (e.g., `animate2-video.mp4`) used by the custom video player.
- `config/config.php` — development flags (DEV_MODE), BASE_URL/ASSETS_URL, SMTP placeholders and helper functions like `sanitize_input()` and `send_json_response()`.

What to do first (priorities for an AI agent)
- Edit UI behavior: change or add features in `src/js/main.js` and follow existing init pattern — add a new `init*()` and call it on DOMContentLoaded.
- Styling: add CSS to `src/css/main.css` (core) or `video.css` (media-specific) and follow the existing CSS variable usage in `:root` and BEM-like naming.
- Server-side / contact form: look at `sections/contact.php`, `handlers/contact.php` and `config/config.php` for integration; the project uses simple PHP mail or can be wired to external SMTP (place credentials in `config/config.php`, but never commit secrets).

Patterns & conventions (concrete)
- Init pattern: top-level DOMContentLoaded calls several `initX()` functions (see `src/js/main.js`). When adding behavior, register it as an `init` and keep side-effects localized.
- Animation & perf: scroll-triggered animations use IntersectionObserver; expensive scroll work is debounced and uses requestAnimationFrame. Follow `initPerformanceOptimizations()` when adding scroll logic.
- Video: `initVideoPlayer()` expects an element with id `organicVideo` and a container `.custom-video-player`. It manages play/pause, error UI, and keyboard handlers (Space toggles play). If you change markup, update selectors here.
- Accessibility: prefers reduced-motion and high-contrast detection via `matchMedia`; add ARIA `aria-live` announcer for dynamic states as shown in `initAccessibility()`.

Developer workflows (how to run & debug)
- Quick preview: open `index.html` directly in a browser for static checks.
- PHP preview: run the bundled `serve.sh` or start PHP dev server manually: `php -S localhost:8000` from repo root to exercise PHP pages (contact handlers, config). The `serve.sh` wraps this.
- Editing JS/CSS: changes are immediate in the browser; open DevTools to inspect classes added by JS (e.g., `.animate-in`, `.playing`, `.loading`).

Files to reference when coding
- `src/js/main.js` — canonical behavior examples (navigation, video, accessibility, lazy loading).
- `src/css/main.css` — theme variables and breakpoints.
- `config/config.php` — dev flags, SMTP placeholders, helper functions (sanitize, send_json_response).
- `sections/*.php` and `includes/header.php` / `includes/footer.php` — used HTML fragments and bilingual text placement.

Do NOT do (explicit constraints)
- Commit secrets (SMTP passwords) into `config/config.php`. Use placeholders and instruct human maintainers to set real secrets outside the repo.
- Replace the small vanilla JS approach with a heavy framework unless explicitly requested — follow the current vanilla JS + progressive enhancement philosophy.

If you add files
- Keep structure under `src/` (css, js, images, videos). Update `index.html`/`index.php` or the appropriate `sections/` file to include new assets. Use relative URLs and `ASSETS_URL` when server-side rendering is required.

When in doubt
- Trace behavior in `src/js/main.js` and HTML in `sections/` — those show how elements are selected and which classes the JS expects. Open browser DevTools and reproduce the interaction locally via `php -S`.

Questions or missing details
- Ask the repo owner which deployment host they use (Netlify, Vercel, traditional PHP host) before suggesting CI or build scripts.

— End of instructions —