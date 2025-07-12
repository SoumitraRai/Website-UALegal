/**
 * Common JavaScript functionality for UA Legal Website
 * This file contains functionality used across multiple pages.
 * 
 * @file common.js
 * @author Your Name
 * @version 1.0.0
 */

/**
 * Executes when the DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize sticky header
    initStickyHeader();
    
    // Initialize smooth scrolling
    initSmoothScroll();
});

/**
 * Initializes the mobile navigation functionality
 */
function initMobileNav() {
    // Get navigation elements
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Exit if elements don't exist
    if (!navToggle || !navMenu) return;
    
    // Toggle navigation menu when button is clicked
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Create animated hamburger effect
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && 
            !navMenu.contains(event.target) && 
            navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            
            // Reset hamburger icon
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

/**
 * Initializes sticky header behavior on scroll
 */
function initStickyHeader() {
    const header = document.querySelector('header');
    const scrollThreshold = 100; // Pixels to scroll before header becomes sticky
    
    // Exit if header doesn't exist
    if (!header) return;
    
    // Function to handle scroll event
    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case page is loaded already scrolled
    handleScroll();
}

/**
 * Initializes smooth scrolling for anchor links
 */
function initSmoothScroll() {
    // Get all anchor links that point to ID on the page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get header height for offset
                const header = document.querySelector('header');
                const headerOffset = header ? header.offsetHeight : 0;
                
                // Calculate position accounting for header
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerOffset;
                
                // Smooth scroll to element
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    
                    // Reset hamburger icon
                    const navToggle = document.querySelector('.nav-toggle');
                    if (navToggle) {
                        const spans = navToggle.querySelectorAll('span');
                        spans[0].style.transform = 'none';
                        spans[1].style.opacity = '1';
                        spans[2].style.transform = 'none';
                    }
                }
            }
        });
    });
}