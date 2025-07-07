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
document.addEventListener('DOMContentLoaded', () => {
    // Navigation button handlers
    const lifebookBtn = document.querySelector('.lifebook-btn');
    const featuresBtn = document.querySelector('.features-btn');
    const refillBtn = document.querySelector('.refill-btn');
    const storyBtn = document.querySelector('.story-btn');
    const reserveBtn = document.querySelector('.reserve-btn');
    const ctaBtn = document.querySelector('.cta-btn');
    
    if (lifebookBtn) {
        lifebookBtn.addEventListener('click', () => {
            document.getElementById('signature-edition').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    if (featuresBtn) {
        featuresBtn.addEventListener('click', () => {
            document.getElementById('features-grid').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    if (refillBtn) {
        refillBtn.addEventListener('click', () => {
            document.getElementById('insert-collections').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    if (storyBtn) {
        storyBtn.addEventListener('click', () => {
            document.getElementById('brand-film').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    if (reserveBtn || ctaBtn) {
        [reserveBtn, ctaBtn].forEach(btn => {
            if (btn) {
                btn.addEventListener('click', () => {
                    document.getElementById('reserve-form').scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            }
        });
    }
    
    // Hero button handlers
    const discoverBtn = document.querySelector('.discover-btn');
    const watchBtn = document.querySelector('.watch-btn');
    
    if (discoverBtn) {
        discoverBtn.addEventListener('click', () => {
            document.getElementById('signature-edition').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    if (watchBtn) {
        watchBtn.addEventListener('click', () => {
            document.getElementById('brand-film').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Reserve LifeBook button
    const reserveLifebookBtn = document.querySelector('.reserve-lifebook-btn');
    if (reserveLifebookBtn) {
        reserveLifebookBtn.addEventListener('click', () => {
            document.getElementById('reserve-form').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
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
        const rate = scrolled * -0.1;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('.feature-item, .feature-card, .philosophy-item, .collection-item, .testimonial');
    
    interactiveElements.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (!item.style.transform.includes('translateY(-5px)')) {
                item.style.transform = 'translateY(-5px)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });
});

// Button click effects
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn-primary, .btn-secondary, .nav-btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('LifeCraft website loaded successfully');
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize any additional features here
});

