/**
 * Services Page JavaScript for UA Legal Website
 * This file contains functionality specific to the services/practice areas page.
 * 
 * @file services.js
 * @author UA Legal
 * @version 1.0.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize services tabs
    initServicesTabs();
});

/**
 * Initializes the services tabs functionality
 */
function initServicesTabs() {
    // Get all tab buttons
    const tabButtons = document.querySelectorAll('.service-tab');
    
    // Get all tab content panels
    const tabContents = document.querySelectorAll('.service-tab-content');
    
    // Exit if no tabs or content panels
    if (!tabButtons.length || !tabContents.length) return;
    
    // Add click event to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get target content ID
            const targetId = this.getAttribute('data-target');
            
            // Hide all tab content panels
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Show the target panel
            document.getElementById(targetId).classList.add('active');
            
            // Scroll to the tab content with smooth animation
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        });
    });
    
    // Handle URL parameters for direct linking to a specific service
    function handleUrlParams() {
        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const serviceParam = urlParams.get('service');
        
        // If there's a service parameter, try to activate that tab
        if (serviceParam) {
            // Find the tab button for this service
            const targetButton = document.querySelector(`.service-tab[data-target="${serviceParam}"]`);
            
            // If the button exists, click it
            if (targetButton) {
                targetButton.click();
            } else {
                // Default to first tab if service not found
                tabButtons[0].click();
            }
        } else {
            // Default to first tab
            tabButtons[0].click();
        }
    }
    
    // Call the function to handle URL parameters
    handleUrlParams();
    
    // Make the tabs sticky on scroll
    const servicesNav = document.querySelector('.services-nav');
    const servicesNavTop = servicesNav.offsetTop;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > servicesNavTop) {
            servicesNav.classList.add('sticky');
            document.body.style.paddingTop = servicesNav.offsetHeight + 'px';
        } else {
            servicesNav.classList.remove('sticky');
            document.body.style.paddingTop = 0;
        }
    });
}
