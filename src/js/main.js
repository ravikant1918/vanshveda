/* ===== VanshVeda Main JavaScript ===== */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initScrollEffects();
    initVideoPlayer();
    initAnimations();
    initAccessibility();
    initPerformanceOptimizations();
    
    console.log('🌱 VanshVeda website initialized - Sustainable & Organic!');
});

/* ===== Scroll Effects ===== */
function initScrollEffects() {
    // Smooth scroll for internal links
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const detailsSection = document.querySelector('.maintenance-details');
    
    if (scrollIndicator && detailsSection) {
        scrollIndicator.addEventListener('click', function() {
            detailsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.maintenance-hero');
    const bgOrganic = document.querySelector('.bg-organic');
    
    if (heroSection && bgOrganic) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            bgOrganic.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const scrollObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.feature-card, .info-card-top, .contact-card');
    animateElements.forEach(el => {
        scrollObserver.observe(el);
    });
}

/* ===== Video Player Controls ===== */
function initVideoPlayer() {
    const video = document.getElementById('organicVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = playPauseBtn?.querySelector('.play-icon');
    const pauseIcon = playPauseBtn?.querySelector('.pause-icon');
    const videoContainer = document.querySelector('.custom-video-player');
    
    if (!video || !playPauseBtn) return;
    
    // Video state management
    let isPlaying = true; // Video starts with autoplay
    
    // Update button display
    function updatePlayPauseButton() {
        if (isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'inline';
        } else {
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
        }
    }
    
    // Initial button state
    updatePlayPauseButton();
    
    // Play/Pause button functionality
    playPauseBtn.addEventListener('click', function() {
        if (isPlaying) {
            video.pause();
            isPlaying = false;
        } else {
            video.play().catch(e => console.log('Video play failed:', e));
            isPlaying = true;
        }
        updatePlayPauseButton();
        
        // Add visual feedback
        playPauseBtn.classList.add('clicked');
        setTimeout(() => playPauseBtn.classList.remove('clicked'), 200);
    });
    
    // Video event listeners
    video.addEventListener('play', function() {
        isPlaying = true;
        updatePlayPauseButton();
        videoContainer?.classList.add('playing');
    });
    
    video.addEventListener('pause', function() {
        isPlaying = false;
        updatePlayPauseButton();
        videoContainer?.classList.remove('playing');
    });
    
    video.addEventListener('ended', function() {
        isPlaying = false;
        updatePlayPauseButton();
        videoContainer?.classList.remove('playing');
        
        // Auto-restart after 2 seconds
        setTimeout(() => {
            video.currentTime = 0;
            video.play().catch(e => console.log('Video restart failed:', e));
        }, 2000);
    });
    
    // Video loading states
    video.addEventListener('loadstart', function() {
        videoContainer?.classList.add('loading');
    });
    
    video.addEventListener('canplay', function() {
        videoContainer?.classList.remove('loading');
    });
    
    // Video error handling
    video.addEventListener('error', function(e) {
        console.error('Video error:', e);
        videoContainer?.classList.add('error');
        
        // Show error message
        const errorMsg = document.createElement('div');
        errorMsg.className = 'video-error-message';
        errorMsg.innerHTML = `
            <div class="error-content">
                <span class="error-icon">⚠️</span>
                <p>Video temporarily unavailable</p>
                <p class="error-sub">Please check your connection</p>
            </div>
        `;
        videoContainer?.appendChild(errorMsg);
    });
    
    // Click to play/pause video
    video.addEventListener('click', function() {
        playPauseBtn.click();
    });
    
    // Keyboard controls
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space' && e.target === document.body) {
            e.preventDefault();
            playPauseBtn.click();
        }
    });
}

/* ===== Animation Effects ===== */
function initAnimations() {
    // Enhanced floating animations for organic elements
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        // Randomize animation delay and duration
        const delay = Math.random() * 5;
        const duration = 8 + Math.random() * 4;
        
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
    });
    
    // Pulse dots animation timing
    const pulseDots = document.querySelectorAll('.pulse-dot');
    pulseDots.forEach((dot, index) => {
        dot.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Feature cards entrance animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Dynamic background pattern movement
    const organicPattern = document.querySelector('.organic-pattern');
    if (organicPattern) {
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', function(e) {
            mouseX = (e.clientX / window.innerWidth) * 100;
            mouseY = (e.clientY / window.innerHeight) * 100;
            
            organicPattern.style.backgroundPosition = `${mouseX}% ${mouseY}%`;
        });
    }
    
    // Typewriter effect for hero subtitle (if enabled)
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle && heroSubtitle.dataset.typewriter) {
        typewriterEffect(heroSubtitle, heroSubtitle.textContent, 100);
    }
}

/* ===== Accessibility Features ===== */
function initAccessibility() {
    // Reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
    
    // High contrast mode detection
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Focus management for video controls
    const playPauseBtn = document.getElementById('playPauseBtn');
    if (playPauseBtn) {
        playPauseBtn.addEventListener('keydown', function(e) {
            if (e.code === 'Enter' || e.code === 'Space') {
                e.preventDefault();
                this.click();
            }
        });
    }
    
    // Announce video state changes to screen readers
    const video = document.getElementById('organicVideo');
    if (video) {
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        document.body.appendChild(announcer);
        
        video.addEventListener('play', () => {
            announcer.textContent = 'Video is now playing';
        });
        
        video.addEventListener('pause', () => {
            announcer.textContent = 'Video is paused';
        });
    }
    
    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
}

/* ===== Performance Optimizations ===== */
function initPerformanceOptimizations() {
    // Lazy loading for images (if any are added later)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Preload critical resources
    const video = document.getElementById('organicVideo');
    if (video) {
        video.preload = 'metadata';
    }
    
    // Debounced scroll handler
    let scrollTimeout;
    function handleScroll() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(() => {
            // Scroll-dependent operations here
            updateScrollProgress();
        });
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
}

/* ===== Utility Functions ===== */
function typewriterEffect(element, text, speed = 100) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

function updateScrollProgress() {
    const scrolled = window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (scrolled / maxScroll) * 100;
    
    // Update CSS custom property for scroll-based animations
    document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}%`);
}

function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

/* ===== Contact Form Handler (if form is added later) ===== */
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            // Success message
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            contactForm.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✅' : 'ℹ️'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

/* ===== CSS Classes for JavaScript Effects ===== */
// Add dynamic styles via JavaScript
const dynamicStyles = `
    .clicked {
        transform: scale(0.95) !important;
        transition: transform 0.1s ease !important;
    }
    
    .animate-in {
        animation: slideInUp 0.8s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .video-error-message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(139, 69, 19, 0.9);
        color: #f7f3e9;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        z-index: 10;
    }
    
    .error-icon {
        font-size: 2rem;
        display: block;
        margin-bottom: 1rem;
    }
    
    .error-sub {
        font-size: 0.9rem;
        opacity: 0.8;
        margin-top: 0.5rem;
    }
    
    .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-green);
        color: var(--cream);
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    }
    
    .skip-link:focus {
        top: 6px;
    }
    
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-green);
        color: var(--cream);
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: var(--organic-shadow);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        z-index: 1000;
        max-width: 300px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        background: var(--light-green);
        color: var(--primary-green);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }
    
    .notification-icon {
        font-size: 1.2rem;
    }
    
    .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
    
    @media (max-width: 768px) {
        .notification {
            top: 10px;
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`;

// Inject dynamic styles
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);

/* ===== Export for potential module use ===== */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initScrollEffects,
        initVideoPlayer,
        initAnimations,
        initAccessibility,
        showNotification
    };
}