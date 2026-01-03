
//     // DOM Elements
// const navToggle = document.getElementById('navToggle');
// const navMenu = document.getElementById('navMenu');
// const navLinks = document.querySelectorAll('.nav-link');
// const filterButtons = document.querySelectorAll('.filter-btn');
// const projectCards = document.querySelectorAll('.project-card');
// const contactForm = document.getElementById('contactForm');
// const formMessage = document.getElementById('formMessage');
// const statNumbers = document.querySelectorAll('.stat-number');

// // Mobile Navigation Toggle
// navToggle.addEventListener('click', () => {
//     navMenu.classList.toggle('active');
//     navToggle.querySelector('i').classList.toggle('fa-bars');
//     navToggle.querySelector('i').classList.toggle('fa-times');
// });

// // Close mobile menu when clicking on a nav link
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         navMenu.classList.remove('active');
//         navToggle.querySelector('i').classList.add('fa-bars');
//         navToggle.querySelector('i').classList.remove('fa-times');
        
//         // Update active nav link
//         navLinks.forEach(item => item.classList.remove('active'));
//         link.classList.add('active');
//     });
// });

// // Project Filtering
// filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         // Remove active class from all buttons
//         filterButtons.forEach(btn => btn.classList.remove('active'));
//         // Add active class to clicked button
//         button.classList.add('active');
        
//         const filterValue = button.getAttribute('data-filter');
        
//         projectCards.forEach(card => {
//             if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
//                 card.style.display = 'block';
//                 setTimeout(() => {
//                     card.style.opacity = '1';
//                     card.style.transform = 'scale(1)';
//                 }, 10);
//             } else {
//                 card.style.opacity = '0';
//                 card.style.transform = 'scale(0.8)';
//                 setTimeout(() => {
//                     card.style.display = 'none';
//                 }, 300);
//             }
//         });
//     });
// });

// // Animated Counter for Statistics
// function animateCounter() {
//     statNumbers.forEach(stat => {
//         const target = parseInt(stat.getAttribute('data-count'));
//         const duration = 2000; // 2 seconds
//         const step = target / (duration / 16); // 60fps
        
//         let current = 0;
//         const timer = setInterval(() => {
//             current += step;
//             if (current >= target) {
//                 stat.textContent = target + '+';
//                 clearInterval(timer);
//             } else {
//                 stat.textContent = Math.floor(current) + '+';
//             }
//         }, 16);
//     });
// }

// // Check if element is in viewport for animation triggers
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
//         rect.bottom >= 0
//     );
// }

// // Handle scroll animations
// function handleScrollAnimations() {
//     const animatedElements = document.querySelectorAll('.animate-card, .animate-fade-left, .animate-fade-right');
    
//     animatedElements.forEach(element => {
//         if (isInViewport(element)) {
//             const animation = element.style.animation;
//             if (!animation || animation === 'none') {
//                 // Trigger reflow to restart animation
//                 void element.offsetWidth;
//                 element.style.animation = getComputedStyle(element).animation;
//             }
//         }
//     });
//     // Trigger counter animation when stats section is in view
//     const statsSection = document.querySelector('.hero-stats');
//     if (statsSection && isInViewport(statsSection)) {
//         if (!statsSection.classList.contains('animated')) {
//             statsSection.classList.add('animated');
//             animateCounter();
//         }
//     }
// }

// // // Contact Form Submission
// // if (contactForm) {
// //     contactForm.addEventListener('submit', function(e) {
// //         e.preventDefault();
        
// //         // Get form data
// //         const name = document.getElementById('name').value;
// //         const email = document.getElementById('email').value;
// //         const phone = document.getElementById('phone').value;
// //         const service = document.getElementById('service').value;
// //         const message = document.getElementById('message').value;
        
// //         // Simple validation
// //         if (!name || !email || !service || !message) {
// //             showFormMessage('Please fill in all required fields.', 'error');
// //             return;
// //         }
        
// //         // Simulate form submission (in a real implementation, you would send this to a server)
// //         // For demonstration, we'll show a success message
// //         showFormMessage('Thank you for your message! We will get back to you within 24 hours.', 'success');
        
// //         // Reset form
// //         contactForm.reset();
        
//         // In a real implementation, you would send the form data to a server
//         // Example using fetch API:
//         /*
//         fetch('your-server-endpoint', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 name: name,
//                 email: email,
//                 phone: phone,
//                 service: service,
//                 message: message
//             })
//         })
//         .then(response => response.json())
//         .then(data => {
//             showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
//             contactForm.reset();
//         })
//         .catch(error => {
//             showFormMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
//         });
//         */
// //     });
// // }

// // function showFormMessage(text, type) {
// //     formMessage.textContent = text;
// //     formMessage.className = `form-message ${type}`;
// //     formMessage.style.display = 'block';
    
// //     // Hide message after 5 seconds
// //     setTimeout(() => {
// //         formMessage.style.display = 'none';
// //     }, 5000);
// // }

// // Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         if (targetId === '#') return;
        
//         const targetElement = document.querySelector(targetId);
//         if (targetElement) {
//             // Update active nav link
//             navLinks.forEach(link => link.classList.remove('active'));
//             const correspondingNavLink = document.querySelector(`a[href="${targetId}"]`);
//             if (correspondingNavLink) correspondingNavLink.classList.add('active');
            
//             // Scroll to element
//             window.scrollTo({
//                 top: targetElement.offsetTop - 80,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });
// // Initialize animations on page load
// window.addEventListener('DOMContentLoaded', () => {
//     handleScrollAnimations();
    
//     // Add scroll event listener for animations
//     window.addEventListener('scroll', handleScrollAnimations);
    
//     // Add hover effect to social icons
//     const socialIcons = document.querySelectorAll('.social-icon');
//     socialIcons.forEach(icon => {
//         icon.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-5px) rotate(10deg)';
//         });
        
//         icon.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0) rotate(0)';
//         });
//     });
    
//     // Newsletter form submission
//     // const newsletterForm = document.querySelector('.newsletter-form');
//     // if (newsletterForm) {
//     //     newsletterForm.addEventListener('submit', function(e) {
//     //         e.preventDefault();
//     //         const emailInput = this.querySelector('input[type="email"]');
//     //         if (emailInput.value) {
//     //             alert('Thank you for subscribing to our newsletter!');
//     //             emailInput.value = '';
//     //         }
//     //     });
//     // }
// }); 

// // Parallax effect for hero section
// window.addEventListener('scroll', () => {
//     const hero = document.querySelector('.hero');
//     if (hero) {
//         const scrolled = window.pageYOffset;
//         const rate = scrolled * 0.5;
//         hero.style.backgroundPosition = `center ${-rate}px`;
//     }
// });



// function sendMail(){
// let params = {
//  name : document.getElementById("name").value,
//  email : document.getElementById("email").value,
//  number : document.getElementById("phone").value, // Changed from "number" to "phone"
//  message : document.getElementById("message").value,
//  service : document.getElementById("service").value 
// }

// let serviceID = "service_z1ati8k"; // Replace with your actual service ID
// let templateID = "template_f4i5ryf"; // Replace with your actual template ID

// emailjs.send(serviceID, templateID, params)
// .then(res=>{
//     document.getElementById("name").value="";
//     document.getElementById("email").value="";
//     document.getElementById("number").value="";
//     document.getElementById("service").value="";
//     document.getElementById("message").value="";
//     console.log(res);
//     alert("Your message sent successfully!!")
// })
// .catch(err=>{
//     console.log(err);
//     alert("Failed to send message. Please try again.");
// });

// }
// let bt = document.querySelector('.btn-submit')

// bt.addEventListener("click", function(e){
//     e.preventDefault();
//     alert('yes ohh')
//     sendMail();
// });
// //   const scriptURL = 'https://script.google.com/macros/s/AKfycbyL8chxlLDRBRP4i9ZTSz2Anq5L6H54fgYw1njqsjCDxb0PoF0xmrrfWFYYEZ5CDR5CjA/exec'
// //   const form = document.forms['submit-to-google-sheet']

// //   form.addEventListener('submit', e => {
// //     e.preventDefault()
// //     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
// //       .then(response => console.log('Success!', response))
// //       .catch(error => console.error('Error!', error.message))
// //   })




// DOM Elements (safe selectors)
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const statNumbers = document.querySelectorAll('.stat-number');

// sendMail with defensive checks and corrected clearing of fields
function sendMail() {
    const nameEl = document.getElementById("name");
    const emailEl = document.getElementById("email");
    const phoneEl = document.getElementById("number"); 
    const messageEl = document.getElementById("message");
    const serviceEl = document.getElementById("service");

    const params = {
        name: nameEl ? nameEl.value : '',
        email: emailEl ? emailEl.value : '',
        number: phoneEl ? phoneEl.value : '',
        message: messageEl ? messageEl.value : '',
        service: serviceEl ? serviceEl.value : ''
    };

    const serviceID = "service_z1ati8k"; 
    const templateID = "template_f4i5ryf"; 

    if (typeof emailjs === 'undefined' || !emailjs.send) {
        alert('Email sending is not available: EmailJS library is not loaded. Please include and init EmailJS.');
        return;
    }

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            if (nameEl) nameEl.value = "";
            if (emailEl) emailEl.value = "";
            if (phoneEl) phoneEl.value = "";
            if (serviceEl) serviceEl.value = "";
            if (messageEl) messageEl.value = "";
            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch(err => {
            console.log(err);
            alert("Failed to send message. Please try again.");
        });
}

// Attach submit handler to button (guarded)
const bt = document.querySelector('#btn-submit');
if (bt) {
    bt.addEventListener("click", function(e) {
        e.preventDefault();
        sendMail();
    });
}

// Mobile Navigation Toggle (guarded)
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

// Close mobile menu when clicking on a nav link (guarded)
if (navLinks && navLinks.length) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            const icon = navToggle ? navToggle.querySelector('i') : null;
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }

            // Update active nav link
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// Project Filtering (guarded)
if (filterButtons && filterButtons.length && projectCards) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Animated Counter for Statistics (requestAnimationFrame-based)
function animateCounter() {
    statNumbers.forEach(stat => {
        const raw = stat.getAttribute('data-count');
        const target = Number.parseInt(raw, 10) || 0;
        const duration = 2000; // milliseconds
        if (target <= 0) {
            stat.textContent = '0+';
            return;
        }

        const startTime = performance.now();
        function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * target);
            stat.textContent = value + '+';
            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                stat.textContent = target + '+';
            }
        }
        requestAnimationFrame(tick);
    });
}

// Check if element is in viewport for animation triggers
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Handle scroll animations
function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-card, .animate-fade-left, .animate-fade-right');

    animatedElements.forEach(element => {
        if (isInViewport(element)) {
            const animation = element.style.animation;
            if (!animation || animation === 'none') {
                // Trigger reflow to restart animation
                void element.offsetWidth;
                element.style.animation = getComputedStyle(element).animation;
            }
        }
    });

    // Trigger counter animation when stats section is in view
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection && isInViewport(statsSection)) {
        if (!statsSection.classList.contains('animated')) {
            statsSection.classList.add('animated');
            animateCounter();
        }
    }
}

// Smooth scrolling for anchor links (guarded)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Update active nav link (guarded)
            if (navLinks && navLinks.length) {
                navLinks.forEach(link => link.classList.remove('active'));
                const correspondingNavLink = document.querySelector(`a[href="${targetId}"]`);
                if (correspondingNavLink) correspondingNavLink.classList.add('active');
            }

            // Scroll to element
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize animations on page load
window.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();

    // Add scroll event listener for animations
    window.addEventListener('scroll', handleScrollAnimations);

    // Add hover effect to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(10deg)';
        });

        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0)';
        });
    });
});

// Parallax effect for hero section (guarded)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        const rate = scrolled * 0.5;
        hero.style.backgroundPosition = `center ${-rate}px`;
    }
});  

