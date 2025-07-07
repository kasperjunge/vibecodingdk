# Kasper Junge Personal Website - Frontend-Only Implementation Plan

## Overview
Create a modern, professional single-page React website for Kasper Junge to establish authority in AI development and promote his workshop to Danish tech leaders. This is a **frontend-only** implementation with no backend requirements.

## Technical Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (already configured)
- **Styling**: Tailwind CSS (modern, responsive design)
- **Icons**: Lucide React or Heroicons
- **Deployment**: Static hosting (Netlify, Vercel, or GitHub Pages)
- **Contact Form**: Static form service (Netlify Forms, Formspree, or EmailJS)

## Implementation Phases

### Phase 1: Project Setup & Base Components
1. **Clean up existing frontend structure**
   - Remove default Vite/React boilerplate
   - Install required dependencies (Tailwind CSS, icons)
   - Set up basic routing if needed (likely single-page)

2. **Create base layout components**
   - Header/Navigation (minimal, may just be logo)
   - Footer with contact info and social links
   - Main layout wrapper

### Phase 2: Core Sections Implementation

#### 2.1 Hero Section
- **Professional portrait** (use existing `/frontend/src/assets/kasperjunge.jpg`)
- **Headline**: "Kasper Junge - Lead AI Engineer & Workshop Facilitator"
- **Value proposition**: "Hjælper udviklerteams med at komme i gang med agent-baseret softwareudvikling"
- **Primary CTA button** scrolling to workshop section
- **Modern gradient background** or professional imagery

#### 2.2 Credibility Section
- **Current roles display**:
  - Lead AI Engineer at Dinero (2024-present)
  - Chairman of Danish Data Science Community (2021-present)
  - Co-host of Verbos Podcast (2022-present, 80+ episodes, 5000+ subscribers)
- **Key achievement**: Nordic DAIR "Data & AI Influencer of the Year" 2023
- **Upcoming highlight**: Keynote speaker at AI Day 2025 Aarhus
- **Notable projects** with brief descriptions:
  - Copcon CLI tool (~60 GitHub stars)
  - Danish Foundation Models contributor
  - MacScribe (local Whisper transcriber)

#### 2.3 Workshop Section - "Modern AI Development Workshop"
- **Workshop overview** with compelling description
- **Two-day structure breakdown**:
  - Day 1: Fundamentals & Greenfield Practice
  - Day 2: Real-World Application (Optional)
- **Key benefits & ROI highlights**
- **Workshop details**:
  - Format: On-site only
  - Group size: 15 ideal, 20 maximum
  - Duration: 1-2 days
  - **Early bird pricing**: 35.000 DKK (highlighted discount from 75,000 DKK)
- **Strong CTA** to contact form

#### 2.4 Contact Section
- **Contact form** (using static form service)
  - Name, Company, Email, Message
  - Specific inquiry type (Workshop, Speaking, General)
- **Professional contact information**
- **Social links**: LinkedIn, Verbos Podcast
- **Location**: Denmark (for on-site workshops)

### Phase 3: Design & UX Implementation
1. **Professional design system**
   - Modern typography (Inter or similar professional font)
   - Professional color palette (blues/grays for trust and expertise)
   - Consistent spacing and layout grid
   - Subtle animations and transitions

2. **Mobile-first responsive design**
   - Mobile-optimized layouts for all sections
   - Touch-friendly buttons and navigation
   - Optimized images and loading

3. **Performance optimization**
   - Image optimization and lazy loading
   - Code splitting if needed
   - Fast loading times (< 3 seconds on mobile)

### Phase 4: Content & SEO
1. **Content implementation**
   - Danish language where appropriate for local market
   - Professional yet approachable tone
   - Technical credibility without overwhelming non-technical users
   - Clear value propositions and calls-to-action

2. **SEO optimization**
   - Meta tags and descriptions
   - Structured data markup
   - Open Graph tags for social sharing
   - Fast loading and mobile-friendly for search rankings

### Phase 5: Contact Form Integration
- **Static form service setup** (no backend required):
  - Option 1: Netlify Forms (if deploying to Netlify)
  - Option 2: Formspree integration
  - Option 3: EmailJS for client-side email sending
- **Form validation** and user feedback
- **Success/error states** for form submissions

## Key Features & Requirements

### Must-Have Features
- **Single-page application** with smooth scrolling between sections
- **Professional portrait** prominently displayed
- **Clear workshop pricing** and call-to-action
- **Mobile-responsive design**
- **Fast loading times** (< 3 seconds)
- **Working contact form** without backend

### Nice-to-Have Features  
- **Smooth scroll animations** between sections
- **Testimonials section** (if available)
- **Blog/Articles section** (future expansion)
- **Dark mode toggle** (professional preference)

## File Structure
```
frontend/src/
├── components/
│   ├── Hero.tsx
│   ├── Credibility.tsx
│   ├── Workshop.tsx
│   ├── Contact.tsx
│   ├── Layout.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Form.tsx
├── assets/
│   ├── kasperjunge.jpg (existing)
│   └── icons/
├── styles/
│   └── globals.css
├── App.tsx
└── main.tsx
```

## Success Criteria
1. **Fast loading** (< 3 seconds on mobile)
2. **Professional appearance** that builds trust and authority
3. **Clear conversion path** from visitor to workshop inquiry
4. **Mobile-friendly** experience for modern users
5. **Working contact form** that delivers inquiries
6. **SEO optimized** for Danish market visibility

## Deployment Strategy
- **Static site deployment** (Netlify, Vercel, or GitHub Pages)
- **Custom domain** setup (kasperjunge.com or similar)
- **HTTPS enabled** for professional credibility
- **Analytics setup** (Google Analytics or similar)

## Timeline Estimate
- **Phase 1**: 1 day (setup and base components)
- **Phase 2**: 3-4 days (core sections implementation)
- **Phase 3**: 2-3 days (design and responsive)
- **Phase 4**: 1-2 days (content and SEO)
- **Phase 5**: 1 day (contact form integration)

**Total**: 8-11 days for a polished, professional frontend-only website

## Notes
- **No backend required** - purely static frontend with external form service
- **Focus on conversion** - every element serves the goal of generating workshop leads
- **Danish market focus** - content and design tailored for local tech leaders
- **Professional credibility** - design and content must reflect expertise and authority 