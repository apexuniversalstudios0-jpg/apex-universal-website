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

// Intersection Observer for scroll animations (optional)
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}
