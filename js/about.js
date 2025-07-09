/**
 * About Page JavaScript for UA Legal Website
 * This file contains functionality specific to the about page.
 * 
 * @file about.js
 * @author UA Legal
 * @version 1.0.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize accolades slider
    initAccoladesSlider();
});

/**
 * Initializes the accolades slider functionality
 */
function initAccoladesSlider() {
    // Get slider elements
    const slider = document.getElementById('accolades-slider');
    const prevButton = document.getElementById('prev-accolade');
    const nextButton = document.getElementById('next-accolade');
    const dotsContainer = document.getElementById('accolade-dots');
    
    // Exit if any required element doesn't exist
    if (!slider || !prevButton || !nextButton || !dotsContainer) return;
    
    // Get all accolade items
    const accoladeItems = slider.querySelectorAll('.accolade-item');
    
    // Exit if no items
    if (!accoladeItems.length) return;
    
    // Set current index
    let currentIndex = 0;
    
    // Create dots for navigation
    accoladeItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'slider-dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Set up event listeners for navigation buttons
    prevButton.addEventListener('click', showPreviousAccolade);
    nextButton.addEventListener('click', showNextAccolade);
    
    // Initial setup
    updateSliderPosition();
    
    // Set up auto rotation
    const autoRotation = setInterval(showNextAccolade, 5000);
    
    // Stop auto rotation on mouse hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoRotation);
    });
    
    // Resume auto rotation when mouse leaves
    slider.addEventListener('mouseleave', () => {
        clearInterval(autoRotation);
        autoRotation = setInterval(showNextAccolade, 5000);
    });
    
    /**
     * Shows the previous accolade in the slider
     */
    function showPreviousAccolade() {
        currentIndex = (currentIndex - 1 + accoladeItems.length) % accoladeItems.length;
        updateSliderPosition();
    }
    
    /**
     * Shows the next accolade in the slider
     */
    function showNextAccolade() {
        currentIndex = (currentIndex + 1) % accoladeItems.length;
        updateSliderPosition();
    }
    
    /**
     * Goes to a specific slide
     * @param {number} index - The index of the slide to go to
     */
    function goToSlide(index) {
        currentIndex = index;
        updateSliderPosition();
    }
    
    /**
     * Updates the slider position and active states
     */
    function updateSliderPosition() {
        // Update slider position with smooth transition
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}
