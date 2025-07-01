# Kasper Junge Personal Website

A modern, professional single-page React website showcasing Kasper Junge's expertise in AI development and promoting his Modern AI Development Workshop to Danish tech leaders.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful desktop layouts
- **Professional UI**: Clean, modern design with smooth animations
- **Dark Mode Support**: Automatic theme switching based on user preference
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 📦 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **State Management**: React hooks (useState)
- **Animations**: Tailwind animations with custom keyframes

## 🏗️ Project Structure

```
frontend/src/
├── components/
│   ├── ui/
│   │   └── Button.tsx          # Reusable button component
│   ├── Hero.tsx                # Hero section with portrait and CTA
│   ├── Credibility.tsx         # Achievements and credentials
│   ├── Workshop.tsx            # Workshop details and pricing
│   ├── Contact.tsx             # Contact form and information
│   └── Layout.tsx              # Main layout wrapper
├── lib/
│   └── utils.ts                # Utility functions (cn helper)
├── assets/
│   └── kasperjunge.jpg         # Professional portrait
├── App.tsx                     # Main app component
├── main.tsx                    # App entry point
├── index.css                   # Global styles and Tailwind config
└── App.css                     # Component-specific styles
```

## 🎨 Design System

### Colors
- **Primary**: Professional blue tones for trust and expertise
- **Accent**: Gradient combinations for modern appeal
- **Neutral**: Gray scale for readability and professionalism

### Typography
- **Font**: Inter (system font fallback)
- **Hierarchy**: Clear heading structure (h1-h6)
- **Responsive**: Scales appropriately across devices

### Components
- **Buttons**: Multiple variants (default, outline, ghost, etc.)
- **Cards**: Consistent spacing and shadows
- **Forms**: Accessible with proper labels and validation

## 📱 Sections

### 1. Hero Section
- Professional portrait prominently displayed
- Clear value proposition in Danish
- Dual call-to-action buttons (Workshop focus + Contact)
- Smooth scroll indicators

### 2. Credibility Section
- **Key Achievements**: Nordic DAIR Award, AI Day 2025 keynote
- **Current Roles**: Lead AI Engineer at Dinero, DDSC Chairman, Verbos co-host
- **Notable Projects**: Copcon CLI, Danish Foundation Models, MacScribe

### 3. Workshop Section
- **Comprehensive Details**: 2-day structure breakdown
- **Clear Pricing**: Early bird special (30,000 DKK vs 75,000 DKK)
- **ROI Metrics**: Productivity improvements and success stats
- **Flexible Format**: 1-2 days, on-site only in Denmark

### 4. Contact Section
- **Professional Form**: Name, company, email, inquiry type, message
- **Contact Information**: Email, location, social links
- **Response Promise**: 24-hour response commitment

## 🔧 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

This is a static React application that can be deployed to any static hosting service:

### Recommended Platforms
1. **Netlify** (recommended for forms)
2. **Vercel** 
3. **GitHub Pages**
4. **AWS S3 + CloudFront**

### Build Output
- Build files are generated in the `dist/` directory
- All assets are optimized and fingerprinted
- Ready for CDN deployment

### Contact Form Integration
The contact form is currently set up for easy integration with:
- **Netlify Forms** (if deploying to Netlify)
- **Formspree** (external form service)
- **EmailJS** (client-side email sending)

## 🎯 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Bundle Size**: ~241KB main bundle (gzipped: ~74KB)
- **Image Optimization**: Responsive images with proper loading
- **Code Splitting**: Automatic with Vite

## 🌐 SEO Optimization

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Meta descriptions ready
- Open Graph tags (add as needed)
- Fast loading times

## 🎨 Customization

### Colors
Modify the color scheme in `src/index.css` using CSS custom properties:
```css
:root {
  --primary: oklch(0.205 0 0);
  --background: oklch(1 0 0);
  /* ... other colors */
}
```

### Content
- Update personal information in each component
- Replace the professional photo in `src/assets/`
- Modify workshop details in `Workshop.tsx`
- Update contact information in `Contact.tsx`

### Styling
- Tailwind classes for rapid styling changes
- Custom CSS in `App.css` for specific needs
- Component-level styling with CSS modules if needed

## 📊 Analytics

Ready for analytics integration:
- Google Analytics
- Plausible Analytics  
- Fathom Analytics

## 🔒 Security

- No sensitive data exposed
- Form validation on both client and server side
- External links with proper `rel` attributes
- HTTPS ready

## 🚀 Next Steps

1. **Content Integration**: Add real contact form service
2. **Analytics**: Set up visitor tracking
3. **SEO**: Add meta tags and structured data
4. **Blog**: Consider adding a blog section
5. **Testimonials**: Add client testimonials if available
6. **Multi-language**: Consider English version for international clients

## 📞 Contact

For questions about this website implementation:
- **Email**: kasper@kasperjunge.com
- **LinkedIn**: [kasperjunge](https://linkedin.com/in/kasperjunge)
- **Podcast**: [Verbos](https://verbos.dk)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS.
