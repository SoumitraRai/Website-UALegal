# UA Legal Website Documentation

## Overview

This documentation provides a comprehensive guide to the UA Legal website project. The website is designed to present a premium, regal, and royal image for an Indian law firm across all devices.

## Project Structure

```
Website-UALegal/
├── assets/
│   ├── images/
│   ├── fonts/
│   └── icons/
├── css/
│   ├── common.css - Shared styles across all pages
│   ├── home.css - Home page specific styles
│   ├── about.css - About page specific styles
│   ├── services.css - Services page specific styles
│   ├── team.css - Team page specific styles
│   └── contact.css - Contact page specific styles
├── js/
│   ├── common.js - Shared functionality across all pages
│   ├── home.js - Home page specific functionality
│   ├── about.js - About page specific functionality
│   ├── services.js - Services page specific functionality
│   ├── team.js - Team page specific functionality
│   └── contact.js - Contact page specific functionality
├── docs/
│   ├── README.md - This documentation overview
│   └── documentation.md - Detailed documentation
├── index.html - Home page
├── about.html - About page
├── services.html - Services/Practice Areas page
├── team.html - Team page
└── contact.html - Contact page
```

## Design Philosophy

The website is designed with the following key principles:

1. **Premium & Regal Aesthetic**: Deep navy blue, gold accents, and sophisticated typography create a luxurious feel.
2. **Responsive Design**: Fully responsive across all devices with a mobile-first approach.
3. **Accessibility**: WCAG compliance ensures the site is accessible to all users.
4. **Performance**: Optimized code and assets for fast loading times.
5. **Maintainability**: Well-commented, organized code structure for easy maintenance.

## Pages

1. **Home**: Introduction to the firm with key services and testimonials
2. **About**: Firm history, values, and vision
3. **Services**: Detailed information about practice areas
4. **Team**: Profiles of attorneys and key staff
5. **Contact**: Contact information and form

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript**: ES6 for interactive elements
- **JSDoc**: For code documentation
- **Font Awesome**: For icons
- **Google Fonts**: For typography

## Browser Compatibility

The website is designed to work on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari
- Android Chrome

## Accessibility Features

- Semantic HTML structure
- ARIA attributes where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility

## Performance Optimization

- Minified CSS and JS (production version)
- Optimized images
- Efficient CSS selectors
- Minimal third-party dependencies

## Maintenance Guidelines

1. Follow the established code structure and commenting patterns
2. Keep JavaScript functionality separated by page
3. Use the common CSS for shared styles
4. Document any new features in the documentation
5. Ensure cross-browser testing for any updates

## Generating Updated Documentation

To regenerate documentation after code changes:

```bash
npm run docs
```

This will process all JSDoc comments and update the documentation in the `/docs/generated` directory.