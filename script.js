// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const text = e.target.textContent.toLowerCase();
        let targetId = '';
        
        switch(text) {
            case 'the lifebook':
                targetId = 'signature-edition';
                break;
            case 'features':
                targetId = 'features-grid-section';
                break;
            case 'refill collection':
                targetId = 'insert-collections';
                break;
            case 'our story':
                targetId = 'brand-film';
                break;
            case 'reserve':
            case 'reserve now':
                targetId = 'reserve-form-section';
                break;
        }
        
        if (targetId) {
            const targetElement = document.getElementById(targetId) || 
                                document.querySelector(`.${targetId}`);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Hero Button Actions
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', (e) => {
        const text = e.target.textContent.toLowerCase();
        
        if (text.includes('discover')) {
            const featuresSection = document.querySelector('.signature-edition');
            if (featuresSection) {
                featuresSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else if (text.includes('watch')) {
            // Placeholder for video functionality
            alert('Video coming soon!');
        } else if (text.includes('reserve')) {
            const reserveSection = document.querySelector('.reserve-form-section');
            if (reserveSection) {
                reserveSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Form Submission
const reserveForm = document.querySelector('.reserve-form');
if (reserveForm) {
    reserveForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(reserveForm);
        const data = {};
        
        // Convert FormData to object
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Basic validation
        const requiredFields = ['Full Name', 'Email Address', 'Initials for Monogramming (2 initials)'];
        const inputs = reserveForm.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#e74c3c';
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        
        if (isValid) {
            // Simulate form submission
            alert('Thank you for your interest! We will contact you soon to confirm your reservation.');
            reserveForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.feature-item, .feature-card, .philosophy-item, .collection-item, .testimonial'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(248, 247, 244, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(248, 247, 244, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Parallax Effect for Hero Image
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-img');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects for interactive elements
document.querySelectorAll('.feature-item, .feature-card, .philosophy-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    
    // Add any additional initialization here
    console.log('LifeCraft website loaded successfully');
});

