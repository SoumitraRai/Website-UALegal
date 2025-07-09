/**
 * Team Page JavaScript for UA Legal Website
 * This file contains functionality specific to the team page.
 * 
 * @file team.js
 * @author UA Legal
 * @version 1.0.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize practice area filter
    initPracticeFilter();
    
    // Initialize attorney profile modal
    initProfileModal();
});

/**
 * Initializes the practice area filter functionality
 */
function initPracticeFilter() {
    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Get all team members
    const teamMembers = document.querySelectorAll('.team-member[data-category]');
    
    // Exit if no filter buttons or team members
    if (!filterButtons.length || !teamMembers.length) return;
    
    // Add click event to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show/hide team members based on filter
            teamMembers.forEach(member => {
                if (filterValue === 'all' || member.getAttribute('data-category') === filterValue) {
                    member.style.display = '';
                    
                    // Add fade-in animation
                    member.classList.add('fade-in');
                    setTimeout(() => {
                        member.classList.remove('fade-in');
                    }, 500);
                } else {
                    member.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Initializes the attorney profile modal functionality
 */
function initProfileModal() {
    // Get all profile view buttons
    const viewProfileButtons = document.querySelectorAll('.view-profile');
    
    // Get modal elements
    const modal = document.getElementById('profile-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.getElementById('close-modal');
    
    // Exit if no modal or buttons
    if (!modal || !modalBody || !closeModal || !viewProfileButtons.length) return;
    
    // Attorney profiles data
    const attorneyProfiles = {
        'rajiv-sharma': {
            name: 'Rajiv A. Sharma',
            designation: 'Managing Partner',
            image: 'assets/images/team/managing-partner.jpg',
            credentials: 'LLB, National Law School of India',
            bar: 'Bar Council of India, 1995',
            email: 'rajiv.sharma@ualegal.com',
            phone: '+91 98765 43210',
            bio: `<p>Rajiv A. Sharma is the founding and managing partner of UA Legal. With over three decades of legal experience, Rajiv has established himself as one of India's most respected corporate lawyers.</p>
                <p>After graduating with honors from National Law School of India, Rajiv began his career at a prestigious international law firm before founding UA Legal in 1995. Under his leadership, the firm has grown into one of India's premier legal institutions with offices in Delhi, Mumbai, and Bangalore.</p>
                <p>Rajiv specializes in complex corporate transactions, including mergers and acquisitions, joint ventures, and corporate restructuring. He has advised on some of India's most significant corporate deals, including several landmark cross-border transactions valued at over $1 billion.</p>`,
            education: [
                'LL.B., National Law School of India University, 1990',
                'Post Graduate Diploma in Corporate Law, Indian Law Institute, 1991'
            ],
            achievements: [
                'Listed among "Top 100 Lawyers in Asia" by Legal 500, 2020-2023',
                'Recipient of the "Lifetime Achievement Award" by the Indian Bar Association, 2022',
                'Author of "Corporate Governance in Modern India," a widely referenced legal text'
            ],
            languages: ['English', 'Hindi', 'Bengali'],
            publications: [
                '"Corporate Governance in Modern India" (Oxford University Press, 2018)',
                '"Regulatory Challenges in Cross-Border Mergers" (Indian Law Review, 2020)',
                '"The Evolution of Contract Law in Post-Liberalization India" (Harvard Business Review India, 2021)'
            ]
        },
        'priya-mehta': {
            name: 'Priya Mehta',
            designation: 'Senior Partner, Litigation',
            image: 'assets/images/team/senior-partner-1.jpg',
            credentials: 'LLB, Delhi University',
            bar: 'Bar Council of Delhi, 1998',
            email: 'priya.mehta@ualegal.com',
            phone: '+91 98765 43211',
            bio: `<p>Priya Mehta is a Senior Partner and heads the firm's Litigation Practice. With over 25 years of experience, she is recognized as one of India's leading litigators with an outstanding record of success.</p>
                <p>Priya specializes in complex commercial disputes, arbitration, and white-collar criminal defense. She has represented clients before the Supreme Court of India, various High Courts, and specialized tribunals.</p>
                <p>Her strategic approach to litigation and exceptional advocacy skills have resulted in numerous landmark judgments that have helped shape legal precedents in commercial and constitutional law.</p>`,
            education: [
                'LL.B., Delhi University, 1997',
                'LL.M. in Dispute Resolution, Kings College London, 2000'
            ],
            achievements: [
                'Named "Litigator of the Year" by Legal Era, 2023',
                'Successfully argued over 200 cases before the Supreme Court of India',
                'Secured the largest commercial arbitration award in Indian legal history (₹2,500 crore)'
            ],
            languages: ['English', 'Hindi', 'Punjabi'],
            publications: [
                '"Effective Arbitration Strategies in the Indian Context" (International Arbitration Review, 2019)',
                '"The Evolving Role of the Supreme Court in Commercial Disputes" (Supreme Court Law Journal, 2021)'
            ]
        }
        // Additional attorney profiles would be added here
    };
    
    // Add click event to each view profile button
    viewProfileButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get attorney ID
            const attorneyId = this.getAttribute('data-member');
            
            // Get attorney data
            const attorney = attorneyProfiles[attorneyId];
            
            // If attorney data exists, populate and show modal
            if (attorney) {
                // Create modal content
                const modalContent = `
                    <div class="profile-header">
                        <div class="profile-image">
                            <img src="${attorney.image}" alt="${attorney.name}">
                        </div>
                        <div class="profile-info">
                            <h2>${attorney.name}</h2>
                            <div class="profile-designation">${attorney.designation}</div>
                            <div class="profile-credentials">
                                <div>${attorney.credentials}</div>
                                <div>${attorney.bar}</div>
                            </div>
                            <div class="profile-contact">
                                <div><i class="fas fa-envelope"></i> ${attorney.email}</div>
                                <div><i class="fas fa-phone"></i> ${attorney.phone}</div>
                            </div>
                        </div>
                    </div>
                    <div class="profile-bio">
                        <h3>Biography</h3>
                        ${attorney.bio}
                    </div>
                    <div class="profile-details">
                        <div class="profile-section">
                            <h3>Education</h3>
                            <ul>
                                ${attorney.education.map(edu => `<li>${edu}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="profile-section">
                            <h3>Notable Achievements</h3>
                            <ul>
                                ${attorney.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="profile-section">
                            <h3>Languages</h3>
                            <div class="profile-languages">
                                ${attorney.languages.join(' • ')}
                            </div>
                        </div>
                        <div class="profile-section">
                            <h3>Selected Publications</h3>
                            <ul>
                                ${attorney.publications.map(pub => `<li>${pub}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
                
                // Set modal content
                modalBody.innerHTML = modalContent;
                
                // Show modal
                modal.classList.add('active');
                document.body.classList.add('modal-open');
            }
        });
    });
    
    // Close modal when clicking close button
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });
}
