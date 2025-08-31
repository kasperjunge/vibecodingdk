# requirements.md – Template

## Title
Vibe Coding Workshop Landing Page

## Overview
Professional landing page for the Vibe Coding Workshop targeting software development teams. The page will communicate the workshop's value proposition, showcase credibility through company logos, and convert visitors through a contact form integration.

## Goals
- Generate qualified leads through contact form submissions
- Establish credibility and trust with potential enterprise clients
- Clearly communicate workshop value proposition to software development teams
- Provide easy access to workshop information and pricing

## Non-Goals
- User account creation or authentication system
- Payment processing or booking system
- Content management system for dynamic content updates
- Multi-language support beyond Danish/English mixed content
- Blog or news section

## Background / Context
Christian and Kasper run Vibe Coding workshops teaching software development teams how to work effectively with AI coding agents. They need a professional landing page to replace their current setup and generate leads from CTOs, architects, and development teams at companies. The workshop is delivered in-person at company offices and focuses on spec-driven development and context engineering for AI agents.

## Success Criteria
- Contact form submissions increase month-over-month
- Page load time under 3 seconds on mobile and desktop
- Mobile-responsive design works across all major devices
- Form successfully integrates with existing backend API
- Google Analytics tracks page visits and form conversion rates
- All company logos display correctly in carousel format
- Page content clearly communicates workshop outcomes and benefits

## Constraints / Assumptions
- Must use existing React/TypeScript frontend stack
- Must integrate with existing FastAPI backend contact form
- Workshop content and agenda are fixed based on current curriculum
- Company logos limited to BiQ, TabularEditor, and iPaper initially
- Pricing structure is set (free consultation, 40k DKK, 70k DKK)
- Workshop language mixing Danish and English is acceptable

## Requirements

### Requirement 1
**User Story:** As a CTO or technical decision maker, I want to quickly understand what the Vibe Coding Workshop offers, so that I can evaluate if it's worth my team's time and budget.

#### Acceptance Criteria
1. WHEN I visit the landing page THEN I see a clear hero section explaining the workshop's primary benefit within 5 seconds
2. WHEN I scroll through the page THEN I can find workshop agenda, outcomes, and pricing without confusion
3. WHEN I review the content THEN I understand this is specifically for software development teams, not individuals

### Requirement 2
**User Story:** As a development team advocate, I want to see which reputable companies have worked with these instructors, so that I can build confidence when recommending the workshop to my manager.

#### Acceptance Criteria
1. WHEN I visit the page THEN I see a carousel or grid displaying company logos (BiQ, TabularEditor, iPaper)
2. WHEN the logos display THEN they are clearly visible and professional looking
3. IF there are multiple logos THEN they cycle through automatically or allow manual navigation

### Requirement 3
**User Story:** As a potential workshop participant, I want to understand the specific agenda and learning outcomes, so that I can determine if the content matches my team's needs.

#### Acceptance Criteria
1. WHEN I look for workshop details THEN I find a clear agenda section showing Day 1 and Day 2 content
2. WHEN I review the agenda THEN I see specific activities like "Spec-Driven Development" and "Context Engineering"
3. WHEN I read the outcomes THEN I understand I'll learn to work with AI agents, not just use basic AI tools

### Requirement 4
**User Story:** As a budget-conscious technical leader, I want to see transparent pricing and options, so that I can plan and justify the investment to stakeholders.

#### Acceptance Criteria
1. WHEN I look for pricing THEN I see three clear options: free consultation, 1-day workshop (40k DKK), 2-day workshop (70k DKK)
2. WHEN I review each option THEN I understand what's included and the progression from one tier to the next
3. WHEN I see the pricing THEN I have a clear call-to-action to get started

### Requirement 5
**User Story:** As a prospective client, I want to easily contact the instructors with questions about the workshop, so that I can get personalized information before committing.

#### Acceptance Criteria
1. WHEN I want to make contact THEN I find a prominent contact form on the page
2. WHEN I fill out the form THEN I can provide name, company, email, and specific message
3. WHEN I submit the form THEN I receive confirmation that my message was sent
4. WHEN I submit the form THEN the inquiry defaults to "workshop" type in the backend

### Requirement 6
**User Story:** As a website visitor, I want to learn about the instructors' backgrounds and expertise, so that I can assess their credibility and teaching ability.

#### Acceptance Criteria
1. WHEN I look for instructor information THEN I find profiles for both Christian Bech Nørhave and Kasper Junge
2. WHEN I read the profiles THEN I understand their relevant experience with AI and software development
3. WHEN I see their credentials THEN I feel confident in their ability to deliver the workshop

### Requirement 7
**User Story:** As a mobile user, I want the landing page to work perfectly on my phone or tablet, so that I can review workshop information regardless of device.

#### Acceptance Criteria
1. WHEN I visit on mobile THEN all content is readable without horizontal scrolling
2. WHEN I interact with the carousel THEN it works smoothly with touch gestures
3. WHEN I fill out the contact form THEN all fields are easily accessible and submittable on mobile