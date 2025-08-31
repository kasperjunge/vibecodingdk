# tasks.md – Template

## Tasks

- [ ] 1. **Landing Page Route and Base Layout Setup**
  
  - Summary: Set up routing structure and base layout components for the landing page
  - Sub-tasks:
    - [ ] Create `/` route in React Router configuration
    - [ ] Build responsive Navigation component with scroll-to-section functionality
    - [ ] Implement Footer component with contact information
    - [ ] Add smooth scrolling behavior for anchor navigation
    - [ ] Set up TailwindCSS custom color utilities for vibrant accent colors
  - _Requirements:_ 1.1, 7.1, 7.2, 7.3

- [ ] 2. **Hero Section Implementation**
  
  - Summary: Create compelling hero section that immediately communicates workshop value
  - Sub-tasks:
    - [ ] Build HeroSection component with headline and value proposition
    - [ ] Add primary CTA button linking to contact form
    - [ ] Implement responsive typography and spacing
    - [ ] Include secondary CTA for free consultation
    - [ ] Add hero background with subtle animations or graphics
  - _Requirements:_ 1.1, 1.2, 1.3

- [ ] 3. **Company Logos Carousel Component**
  
  - Summary: Display client company logos to establish credibility
  - Sub-tasks:
    - [ ] Create CompanyLogos component with carousel functionality using Radix UI
    - [ ] Add placeholder logo images for BiQ, TabularEditor, iPaper
    - [ ] Implement auto-play with manual navigation controls
    - [ ] Ensure touch-friendly mobile interaction
    - [ ] Add proper alt text and accessibility features
  - _Requirements:_ 2.1, 2.2, 2.3, 7.2

- [ ] 4. **Instructor Profiles Section**
  
  - Summary: Showcase Christian and Kasper's expertise and backgrounds
  - Sub-tasks:
    - [ ] Build InstructorProfiles component with side-by-side layout
    - [ ] Add professional photos (placeholders initially)
    - [ ] Include relevant experience and credentials for each instructor
    - [ ] Link to LinkedIn profiles or professional contact information
    - [ ] Ensure mobile-responsive stacked layout
  - _Requirements:_ 6.1, 6.2, 6.3, 7.1

- [ ] 5. **Workshop Agenda and Outcomes Section**
  
  - Summary: Detail workshop curriculum and learning outcomes from welcome email
  - Sub-tasks:
    - [ ] Create WorkshopAgenda component with Day 1 and Day 2 breakdown
    - [ ] List specific activities: Spec-Driven Development, Context Engineering
    - [ ] Include preparation checklist and exercise details
    - [ ] Add expandable sections for detailed agenda items
    - [ ] Highlight key outcomes and takeaways for participants
  - _Requirements:_ 3.1, 3.2, 3.3

- [ ] 6. **Testimonials Section with Placeholders**
  
  - Summary: Build testimonials section ready for future social proof content
  - Sub-tasks:
    - [ ] Create TestimonialsSection component with testimonial cards
    - [ ] Implement responsive grid layout for multiple testimonials
    - [ ] Add placeholder testimonials with realistic content structure
    - [ ] Include star ratings and company attribution
    - [ ] Design for easy content updates when real testimonials are available
  - _Requirements:_ N/A (foundational for future credibility building)

- [ ] 7. **Pricing Section with Three Tiers**
  
  - Summary: Display pricing options clearly with strong call-to-action elements
  - Sub-tasks:
    - [ ] Build PricingSection component with three pricing cards
    - [ ] Implement Free Consultation (15 min), 1-day (40k DKK), 2-day (70k DKK) tiers
    - [ ] Add "Most Popular" badge for 2-day workshop option
    - [ ] Include detailed feature lists for each tier
    - [ ] Create prominent CTA buttons linking to contact form
  - _Requirements:_ 4.1, 4.2, 4.3

- [ ] 8. **FAQ Section Implementation**
  
  - Summary: Address common workshop questions and concerns
  - Sub-tasks:
    - [ ] Create FAQSection component with expandable accordion items
    - [ ] Write FAQ content covering workshop format, preparation, outcomes
    - [ ] Include questions about team size, prerequisites, follow-up support
    - [ ] Implement smooth expand/collapse animations
    - [ ] Ensure keyboard accessibility for accordion navigation
  - _Requirements:_ Common questions identified from clarification process

- [ ] 9. **Contact Form Integration**
  
  - Summary: Build contact form connected to existing backend API
  - Sub-tasks:
    - [ ] Create ContactForm component using React Hook Form
    - [ ] Implement form fields: name, company, email, message (inquiry_type defaults to "workshop")
    - [ ] Add form validation with proper error messaging
    - [ ] Connect to existing `/api/contact` endpoint with ContactFormRequest schema
    - [ ] Handle success/error responses with Danish messaging
    - [ ] Add loading states and prevent double submissions
  - _Requirements:_ 5.1, 5.2, 5.3, 5.4, 7.3

- [ ] 10. **Google Analytics Integration**
  
  - Summary: Set up analytics tracking for visitor behavior and conversions
  - Sub-tasks:
    - [ ] Install and configure Google Analytics 4
    - [ ] Track page views and session duration
    - [ ] Implement custom events: form_start, form_submit, section_view, cta_click
    - [ ] Set up conversion goals for form submissions
    - [ ] Add scroll depth tracking for content engagement analysis
    - [ ] Configure event parameters for detailed reporting
  - _Requirements:_ Success criteria for visit metrics and form conversion tracking

- [ ] 11. **Responsive Design and Mobile Optimization**
  
  - Summary: Ensure excellent mobile experience across all components
  - Sub-tasks:
    - [ ] Test and refine mobile layouts for all sections
    - [ ] Optimize touch targets for mobile interaction
    - [ ] Ensure readable typography on small screens
    - [ ] Test carousel and form functionality on mobile devices
    - [ ] Optimize images and assets for fast mobile loading
    - [ ] Validate against Core Web Vitals performance metrics
  - _Requirements:_ 7.1, 7.2, 7.3, Success criteria for 3-second load time

- [ ] 12. **Content Integration and Polish**
  
  - Summary: Add final content, styling refinements, and quality assurance
  - Sub-tasks:
    - [ ] Integrate actual workshop copy and messaging
    - [ ] Add vibrant color accents while maintaining minimalistic design
    - [ ] Implement micro-interactions and hover states
    - [ ] Add proper SEO meta tags and Open Graph data
    - [ ] Conduct cross-browser testing (Chrome, Firefox, Safari)
    - [ ] Perform accessibility audit and implement fixes
  - _Requirements:_ All requirements, minimalistic design with vibrant colors constraint