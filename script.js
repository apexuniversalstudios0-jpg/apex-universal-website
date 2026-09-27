// ===========================
// APEX UNIVERSAL STUDIOS™
// MAIN JAVASCRIPT
// ===========================

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for buttons with onclick
document.querySelectorAll('button').forEach(button => {
    if (button.onclick) {
        button.addEventListener('click', function(e) {
            if (this.onclick) {
                this.onclick.call(this);
            }
        });
    }
});

// Analytics placeholder
window.addEventListener('scroll', () => {
    // Add scroll analytics here when implemented
});

// Form submission handler (for future contact form)
const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add form handling logic here
    console.log('Form submitted');
};

// Page load analytics
document.addEventListener('DOMContentLoaded', () => {
    // Track page load
    console.log('Apex Universal Studios™ website loaded');
    
    // Add any additional initialization here
});

// Handle visibility changes
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Page is visible
        console.log('Page is now visible');
    } else {
        // Page is hidden
        console.log('Page is now hidden');
    }
});

// ===== SMOOTH SCROLL ANIMATIONS =====
// Fade-in and slide-up animation for sections
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .about-card, .division-card-scroll, .dev-card, .status-card, .principle-card').forEach(element => {
        observer.observe(element);
    });
}

// ===== LIQUID SCROLL BEHAVIOR =====
// Cards compress/expand based on scroll velocity - liquid behavior
let lastScrollTop = 0;
let scrollVelocity = 0;
let scrollDirection = 0;

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    scrollVelocity = Math.abs(scrolled - lastScrollTop);
    scrollDirection = scrolled > lastScrollTop ? 1 : -1;
    lastScrollTop = scrolled;
    
    // Apply liquid effect to all cards
    const cards = document.querySelectorAll('.about-card, .division-card-scroll, .dev-card, .status-card, .principle-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenterY = rect.top + rect.height / 2;
        const screenCenter = window.innerHeight / 2;
        const distanceFromCenter = Math.abs(cardCenterY - screenCenter);
        
        // Calculate compression based on scroll velocity and distance from center
        const compressionFactor = Math.max(0, 1 - scrollVelocity / 50);
        const scaleFactor = 0.95 + (compressionFactor * 0.05);
        const yCompress = scrollVelocity * 0.02 * scrollDirection;
        
        // Apply dynamic liquid transform
        card.style.transform = `scaleY(${scaleFactor}) translateY(${yCompress}px)`;
        card.style.transition = 'none';
    });
    
    // Parallax on hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    // Parallax on navbar
    const navbar = document.querySelector('.navbar');
    if (navbar && scrolled > 0) {
        navbar.style.boxShadow = `0 2px 20px rgba(0, 0, 0, ${Math.min(scrolled / 500, 0.3)})`;
    } else if (navbar) {
        navbar.style.boxShadow = 'none';
    }
    
    // Subtle parallax on section titles
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const offset = rect.top - window.innerHeight / 2;
        
        const titles = section.querySelectorAll('.section-title');
        titles.forEach(title => {
            title.style.transform = `translateY(${offset * 0.1}px)`;
        });
    });
}, { passive: true });

// ===== BUTTON HOVER ANIMATIONS =====
// Add subtle scale effect on button hover
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===== CARD HOVER LIFT EFFECT =====
// Cards lift up slightly on hover with liquid smoothness
document.querySelectorAll('.about-card, .division-card-scroll, .dev-card, .status-card, .principle-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.transition = 'transform 0.4s ease';
    });
});
