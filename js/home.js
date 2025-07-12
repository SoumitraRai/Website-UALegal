/**
 * Home Page JavaScript for UA Legal Website
 * This file contains functionality specific to the home page.
 * 
 * @file home.js
 * @author UA Legal
 * @version 1.0.0
 */

/**
 * Executes when the DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize page components
    initPageComponents();
    
    // Initialize carousels
    initCarousel('expertise', 3);
    initCarousel('blog', 3);
});

/**
 * Initialize all dynamic page components
 */
function initPageComponents() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize a carousel component
 * @param {string} id - Base ID for the carousel elements
 * @param {number} itemsPerView - Number of items to show per view
 */
function initCarousel(id, itemsPerView) {
    const track = document.getElementById(`${id}-track`);
    const prevBtn = document.getElementById(`${id}-prev`);
    const nextBtn = document.getElementById(`${id}-next`);
    const indicatorsContainer = document.getElementById(`${id}-indicators`);
    
    if (!track || !prevBtn || !nextBtn || !indicatorsContainer) return;
    
    const items = track.children;
    const itemCount = items.length;
    let currentPage = 0;
    const totalPages = Math.ceil(itemCount / itemsPerView);
    
    // Create indicators
    for (let i = 0; i < totalPages; i++) {
        const indicator = document.createElement('div');
        indicator.className = `indicator ${i === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => goToPage(i));
        indicatorsContainer.appendChild(indicator);
    }
    
    // Set initial item widths based on itemsPerView
    updateItemWidths();
    
    // Add resize listener to handle responsive changes
    window.addEventListener('resize', updateItemWidths);
    
    // Add navigation event listeners
    prevBtn.addEventListener('click', goToPrevPage);
    nextBtn.addEventListener('click', goToNextPage);
    
    /**
     * Updates the width of carousel items based on viewport size
     */
    function updateItemWidths() {
        let visibleItems = itemsPerView;
        
        // Responsive adjustments
        if (window.innerWidth <= 1200 && window.innerWidth > 768) {
            visibleItems = 2;
        } else if (window.innerWidth <= 768) {
            visibleItems = 1;
        }
        
        const itemWidth = 100 / visibleItems;
        
        for (let item of items) {
            item.style.flex = `0 0 calc(${itemWidth}% - 20px)`;
            item.style.minWidth = `calc(${itemWidth}% - 20px)`;
        }
        
        // Update total pages
        const newTotalPages = Math.ceil(itemCount / visibleItems);
        
        // Reset indicators if needed
        if (newTotalPages !== totalPages) {
            // Clear indicators
            indicatorsContainer.innerHTML = '';
            
            // Recreate indicators
            for (let i = 0; i < newTotalPages; i++) {
                const indicator = document.createElement('div');
                indicator.className = `indicator ${i === currentPage ? 'active' : ''}`;
                indicator.addEventListener('click', () => goToPage(i));
                indicatorsContainer.appendChild(indicator);
            }
            
            // Adjust current page if needed
            if (currentPage >= newTotalPages) {
                currentPage = newTotalPages - 1;
                updateSlidePosition();
            }
        }
    }
    
    /**
     * Go to the previous page in the carousel
     */
    function goToPrevPage() {
        if (currentPage > 0) {
            currentPage--;
            updateSlidePosition();
            updateIndicators();
        }
    }
    
    /**
     * Go to the next page in the carousel
     */
    function goToNextPage() {
        const visibleItems = getVisibleItemsCount();
        const totalPages = Math.ceil(itemCount / visibleItems);
        
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateSlidePosition();
            updateIndicators();
        }
    }
    
    /**
     * Go to a specific page in the carousel
     * @param {number} pageIndex - The index of the page to go to
     */
    function goToPage(pageIndex) {
        currentPage = pageIndex;
        updateSlidePosition();
        updateIndicators();
    }
    
    /**
     * Update the slide position based on the current page
     */
    function updateSlidePosition() {
        const visibleItems = getVisibleItemsCount();
        const itemWidth = 100 / visibleItems;
        const gapWidth = 30; // This should match the gap in CSS
        
        // Calculate the translation distance (percentage + gap)
        const moveX = currentPage * (visibleItems * (itemWidth + (gapWidth / (track.clientWidth / 100))));
        
        track.style.transform = `translateX(-${moveX}%)`;
    }
    
    /**
     * Update the active indicator based on the current page
     */
    function updateIndicators() {
        const indicators = indicatorsContainer.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === currentPage) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    /**
     * Get the number of items visible based on the current viewport width
     * @returns {number} Number of visible items
     */
    function getVisibleItemsCount() {
        if (window.innerWidth <= 768) {
            return 1;
        } else if (window.innerWidth <= 1200) {
            return 2;
        }
        return itemsPerView;
    }
}