# UI_BLUEPRINT.md

# Jakša Brzović — Portfolio UI Blueprint

## 1. Purpose

This document defines the page structure, section order, component composition, responsive behavior, and interaction behavior of the Jakša Brzović Unity Developer portfolio.

It is the source of truth for:

- page layouts
- section order
- component composition
- page-specific responsive behavior
- navigation behavior
- project page structure
- CTA placement
- media placement
- optional section behavior

The visual tokens and reusable component styling are defined in:

`DESIGN_SYSTEM.md`

Project content and project-specific data are defined in:

`CONTENT_PLAN.md`

Site routing and page relationships are defined in:

`WEBSITE_ARCHITECTURE.md`

---

# 2. Global Page Structure

The site consists of the following primary pages:

```text
/
├── Homepage
├── /projects
├── /projects/[slug]
├── /about
└── /contact

=======================================

The global shell consists of:

Navbar
Main Content
Footer

The Navbar and Footer are shared across all pages.

3. Global Navigation
3.1 Desktop Navigation

Desktop navigation contains:

Brand / Name

Projects
About
Contact

CV

Recommended visual structure:

┌─────────────────────────────────────────────────────────────┐
│  JB / Jakša Brzović       Projects   About   Contact   CV   │
└─────────────────────────────────────────────────────────────┘

The exact brand treatment follows the design system.

The navigation should remain visually lightweight.

3.2 Navigation Links

Primary navigation:

Projects → /projects
About    → /about
Contact  → /contact

CV:

links to the final CV destination defined in CONTENT_PLAN.md
may open externally where appropriate
should be visually secondary to the main navigation
3.3 Active Navigation State

The current primary section may have a subtle active state.

Do not use:

large background pills
excessive accent color
animated indicators that distract from content
3.4 Mobile Navigation

On mobile:

Brand / Name                    Menu

The navigation links move into a mobile menu.

The mobile menu must:

be keyboard accessible
support Escape
have visible focus states
provide clear navigation hierarchy
prevent accidental interaction with hidden menu content
close after navigation where appropriate

The mobile menu should use restrained animation.

4. Homepage

Route:

/

The homepage is a concise overview of the portfolio.

Section order:

Navbar
Hero
Featured Projects
Services
About
Contact
Footer

No additional homepage sections should be added unless explicitly documented.

5. Homepage Hero
5.1 Purpose

The Hero immediately communicates:

who Jakša is
what he does
level of experience
primary portfolio action

The Hero should be confident but restrained.

5.2 Visual Structure

The Hero uses a dark background:

#09090B

This is a page-specific visual treatment and intentionally contrasts with the main light portfolio background.

The Hero should be centered.

Target height:

approximately 85vh

It should feel substantial without forcing the user to scroll excessively before seeing the next section.

5.3 Hero Content

The Hero contains:

primary heading
supporting description
primary CTA
secondary CTA where defined
Toptal credential/badge where defined

The exact final copy comes from CONTENT_PLAN.md.

5.4 Hero Media

The Hero does not use:

portrait photography
3D Unity imagery
Unity logo as a decorative hero element
large background video
decorative 3D objects

The visual emphasis comes from typography and composition.

5.5 Hero CTA

Primary action:

View Projects

Destination:

/projects

Secondary action may lead to:

/contact

or another destination explicitly defined in CONTENT_PLAN.md.

The primary CTA should have greater visual emphasis.

5.6 Hero Responsive Behavior
Desktop
centered content
large H1
generous vertical spacing
approximately 85vh overall height
Tablet
maintain centered composition
reduce typography according to Design System
maintain substantial whitespace
Mobile
use mobile H1 scale
stack CTAs vertically when required
reduce vertical padding
keep the Hero readable without excessive height

Do not create a separate mobile concept. Adapt the same composition.

6. Featured Projects
6.1 Purpose

Showcase the six strongest/featured projects immediately after the Hero.

There are exactly:

6 Featured Projects

All six should have equal visual importance.

6.2 Section Structure
Eyebrow
Heading
Optional introductory description
Project Grid

Example hierarchy:

FEATURED WORK

Selected Projects
A selection of games, applications and interactive experiences...

Exact copy comes from CONTENT_PLAN.md.

6.3 Project Grid

Desktop:

2 columns
32px gap

Conceptually:

Project 01    Project 02
Project 03    Project 04
Project 05    Project 06

Tablet:

retain two columns when available width allows it
collapse only when the layout would become cramped

Mobile:

1 column
24px gap
6.4 Project Card

Each project uses the shared ProjectCard component.

Card contains:

Cover Image
Category
Project Name
Short Description
Metadata

The entire card or its primary link should navigate to:

/projects/[slug]

The card should not contain unnecessary secondary CTAs.

7. Services
7.1 Purpose

Communicate the types of work Jakša can provide without turning the portfolio into an agency-style sales page.

There are six services:

1. Unity Game Development
2. AR Development
3. VR Development
4. Interactive Applications
5. Technical Consulting
6. Legacy Project Modernization
7.2 Section Structure
Eyebrow
Heading
Optional description
Services Grid
7.3 Service Layout

Desktop:

2 columns

Six services therefore form:

Service 01    Service 02
Service 03    Service 04
Service 05    Service 06

Mobile:

1 column

Services should use a restrained visual treatment.

Do not turn each service into a large colorful marketing card.

7.4 Service Content

Each service contains:

Service title
Short description

No unnecessary:

pricing
fake statistics
star ratings
decorative icons
marketing claims
8. About Preview
8.1 Purpose

The homepage About section introduces Jakša and provides a path to the full About page.

The section should feel personal but still professional.

8.2 Layout

Desktop:

┌──────────────────────┬──────────────────────────────────┐
│                      │                                  │
│      Portrait        │  Eyebrow                         │
│                      │  Heading                          │
│                      │  Bio                              │
│                      │  Career progression / facts       │
│                      │  CTA                              │
│                      │                                  │
└──────────────────────┴──────────────────────────────────┘

The exact image path is defined in CONTENT_PLAN.md.

8.3 Content

The About preview may include:

short bio
career progression
selected quick facts
link to full About page
CV link where appropriate

The full biography belongs on /about.

9. Homepage Contact Section
9.1 Purpose

The homepage ends with a clear direct-contact opportunity.

The Contact section should feel like a natural conclusion to the portfolio.

9.2 Layout

Centered composition:

Eyebrow
Large heading
Short supporting text
Primary contact CTA

Avoid:

contact forms
excessive fields
fake urgency
large sales copy

The direct contact destination is defined in CONTENT_PLAN.md.

10. Footer

The Footer is shared across all pages.

Structure:

Brand
Navigation
Social / professional links
Email
Copyright
Back to top

Possible links:

GitHub
LinkedIn
Email

Exact destinations are defined in CONTENT_PLAN.md.

10.1 Footer Layout

Desktop:

┌──────────────────────────────────────────────────────────┐
│ JB / Jakša Brzović                 Projects About Contact│
│                                       GitHub LinkedIn    │
│                                                          │
│ © Jakša Brzović                       Back to top ↑     │
└──────────────────────────────────────────────────────────┘

Mobile:

stack content
maintain clear grouping
avoid overly tall spacing
keep navigation easy to scan
11. Projects Page

Route:

/projects

Purpose:

Show all portfolio projects that are not represented solely through the Featured Projects section.

The Projects page displays the complete project collection.

11.1 Page Structure
Navbar
Page Hero
Projects Grid
Footer
11.2 Projects Page Hero

Content:

Eyebrow: SELECTED WORK
H1: Projects
Description

The title should use the standard H1 style.

The description should explain the breadth of work across:

games
mobile applications
AR
VR
interactive installations

Exact copy comes from CONTENT_PLAN.md.

11.3 Project Collection

The page contains all 14 projects.

Featured projects may also appear here if the content architecture defines the Projects page as the complete portfolio collection.

The page should not duplicate a project as a separate entity.

11.4 No Filtering

The initial implementation does not include:

category filters
search
sorting controls
pagination
infinite scrolling

The complete project collection is intentionally simple.

11.5 Projects Grid

Desktop:

2 columns
32px gap

Mobile:

1 column
24px gap

Use the same reusable ProjectCard as the homepage.

12. Project Detail Pages

Route:

/projects/[slug]

Every project uses the same canonical project detail template.

Project-specific differences come from project data.

Do not create separate page implementations for individual projects.

13. Project Detail Section Order

Canonical order:

1. Project Hero
2. Overview
3. My Role
4. Key Contributions
5. Technologies
6. Challenges & Solutions
7. Technical Highlights (optional)
8. Results / Impact
9. Gallery / Media
10. Previous / Next

This order should remain consistent across projects.

Optional sections are omitted when project data does not contain meaningful content.

14. Project Hero
14.1 Purpose

The Project Hero establishes the context of the project immediately.

14.2 Content

The Hero contains:

Category / Eyebrow
Project Name
Short project description
Project metadata
Hero media

Metadata may include:

Role
Platform
Year
Duration

Only metadata actually defined in project data should be shown.

14.3 Hero Layout

Desktop:

┌──────────────────────────────────────────────────────────┐
│ Category                                                 │
│                                                          │
│ Project Name                                             │
│ Short description                                        │
│                                                          │
│ Metadata                                                 │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │                                                      │ │
│ │                   Hero Media                         │ │
│ │                                                      │ │
│ └──────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘

The exact media composition may vary according to the project asset.

14.4 Mobile

Stack:

Category
Project Name
Description
Metadata
Hero Media

The project name may wrap over several lines.

Do not reduce the title size below the defined mobile H1 scale simply to force one-line text.

15. Overview
15.1 Purpose

The Overview provides the main project narrative.

It should explain:

what the project was
what the experience/application/game did
relevant context
the nature of the work

This is the beginning of the detailed project case study.

15.2 Layout

Use a readable content width.

Target:

max-width: 720–760px

The section should not become a full-width wall of text.

16. My Role
16.1 Purpose

Clearly communicate Jakša's responsibilities and ownership.

This section should distinguish:

official role
actual scope
level of independence
collaboration
relevant ownership
16.2 Layout

Desktop may use:

Heading / intro
+
structured role information

or a two-column composition where appropriate.

Mobile stacks naturally.

16.3 Content

Possible data:

Role
Team
Duration
Platforms
Ownership / responsibilities

Only render fields that exist.

Do not invent missing team information.

17. Key Contributions
17.1 Purpose

Show concrete work rather than generic responsibility statements.

Each contribution should answer:

What did Jakša actually build, improve, solve or own?

17.2 Layout

Desktop:

Contribution 01
Contribution 02
Contribution 03
...

Contributions may use a two-column layout where appropriate.

Each item contains:

Title
Description

Avoid excessive card decoration.

18. Technologies
18.1 Purpose

Quickly communicate the relevant technology stack.

18.2 Layout

Technologies use a lightweight metadata/tag treatment.

Example:

Unity
C#
Adventure Creator
DOTween
Spine
iOS
Android

The actual technologies come from project data.

Do not add technologies simply because they are common to the type of project.

19. Challenges & Solutions
19.1 Purpose

This is a key case-study section.

It should demonstrate technical problem-solving rather than simply list bugs.

19.2 Structure

Each item follows:

Challenge
Solution

Optional supporting result may be included where meaningful.

Example:

CHALLENGE
Legacy save files could no longer be loaded after an Adventure Creator upgrade.

SOLUTION
Implemented a custom migration/repair layer that worked directly with the serialized save data...

The exact wording comes from project content.

19.3 Layout

Desktop may use alternating or two-column arrangements.

Mobile always stacks:

Challenge
↓
Solution
20. Technical Highlights
20.1 Optional Section

Technical Highlights are optional.

Render only if:

technicalHighlights.length > 0

A project may contain:

0–3 Technical Highlights
20.2 Purpose

Technical Highlights provide deeper technical storytelling for projects where there is particularly interesting engineering work.

Examples may include:

low-level save migration
multiplayer debugging
custom editor tools
AR lighting
reusable framework architecture
complex input systems
performance solutions
20.3 Layout

Desktop may alternate:

Text | Media
Media | Text
Text | Media

This creates visual rhythm across multiple highlights.

Mobile:

Text
Media

Text
Media

or the inverse depending on the content.

20.4 Content

A highlight may contain:

Eyebrow
Title
Description
Optional media
Optional technology tags

Do not force a media element when none exists.

21. Results / Impact
21.1 Purpose

Communicate what the work achieved.

This section should be factual.

Possible forms:

Released
Commercial application
Successfully deployed
Used in museum installation
Published on iOS

or meaningful numeric metrics where available.

21.2 Metrics

Metrics may be visually emphasized when they are factual and meaningful.

Examples:

10 m
GPS accuracy

or:

10+
Years experience

Do not invent or estimate metrics.

If no meaningful metric exists, use factual outcome statements instead.

22. Gallery / Media
22.1 Purpose

Show the actual work visually.

This section is intentionally flexible.

22.2 Media Types

Supported:

Images
Videos
Screenshots
Project footage

The content data determines which media exists.

22.3 Gallery Layout

Use a flexible grid.

Possible layout:

┌───────────────────────────────┐
│                               │
│          Large image          │
│                               │
└───────────────────────────────┘

┌───────────────┐ ┌───────────────┐
│     Image     │ │     Image     │
└───────────────┘ └───────────────┘

The layout should respond to the number and aspect ratios of the assets.

Do not force every gallery into an identical arrangement.

22.4 Media Interaction

Images may open into a larger presentation/lightbox only if this is explicitly implemented in the project.

If a lightbox is used:

keyboard accessible
Escape closes it
focus is managed correctly
images retain aspect ratio
reduced-motion behavior is respected
23. Previous / Next Navigation
23.1 Purpose

Allow the user to continue exploring the portfolio without returning to /projects.

23.2 Structure

Conceptually:

← Previous Project                     Next Project →
Project Name                           Project Name

Each side should display:

direction
project name

Optionally a small supporting category/metadata line.

23.3 Project Order

Previous/Next navigation follows the canonical project ordering defined in:

WEBSITE_ARCHITECTURE.md

Do not sort alphabetically.

Do not dynamically reorder based on project category.

23.4 Edge Behavior

If there is no previous or next project:

omit that side
do not create a fake destination

Do not invent a project to fill the slot.

24. About Page

Route:

/about
24.1 Page Structure
Navbar
About Hero
Profile / Biography
Career Progression
Quick Facts
CV / Credentials
Contact CTA
Footer

The exact sections may be combined visually, but the information architecture remains.

25. About Hero

The About page begins with:

Eyebrow
H1
Short introduction

No unnecessary decorative hero artwork.

26. Profile / Biography

Desktop:

┌──────────────────────┬──────────────────────────────────┐
│                      │                                  │
│      Portrait        │  Biography                       │
│                      │  Biography                       │
│                      │                                  │
└──────────────────────┴──────────────────────────────────┘

The portrait is the user-provided portfolio photograph.

Asset path is defined in CONTENT_PLAN.md.

Do not use a placeholder image in the final implementation.

27. Career Progression

Career progression should be presented as a clear chronological narrative.

Possible visual structure:

Career Progression

Early Career
    ↓
Professional Development
    ↓
Senior / Independent Work
    ↓
Freelance / Current Work

The actual dates, companies and career information come from CONTENT_PLAN.md.

Do not invent missing dates.

28. Quick Facts

Quick Facts provide a concise scan-friendly summary.

Potential fields:

Experience
Primary discipline
Platforms
Project types
Current work

Only use factual information defined in content data.

Avoid turning this into a statistics-heavy section.

29. CV / Credentials

The About page includes a clear CV link.

The CV is an external/document link defined in CONTENT_PLAN.md.

The Toptal credential is not duplicated as a major standalone element here if it is already prominently displayed elsewhere.

30. About Contact CTA

The About page should end with a simple path to Contact.

Example structure:

Interested in working together?

Contact Me →

Do not create a separate contact form here.

31. Contact Page

Route:

/contact
31.1 Page Structure
Navbar
Contact Hero
Direct Contact Information
Professional Links
Footer
32. Contact Hero

Centered:

Eyebrow
H1
Short supporting text

The section should be visually confident but simple.

33. Direct Contact

The Contact page should prioritize direct communication.

Possible primary contact:

Email

The exact address is defined in CONTENT_PLAN.md.

Use a clear CTA.

34. Professional Links

May include:

LinkedIn
GitHub
CV

Only render links that have defined destinations.

Do not create social links based on assumptions.

35. No Contact Form

The initial portfolio does not use a traditional contact form.

Do not add:

Name
Email
Message
Submit

unless explicitly requested later.

The direct contact flow is intentionally simple.

36. Global Responsive Rules

All pages must remain usable at:

Mobile
Tablet
Desktop
Wide Desktop

Use the breakpoints and typography values from DESIGN_SYSTEM.md.

37. Mobile Layout Principles

On mobile:

multi-column content generally becomes one column
buttons may stack
metadata wraps naturally
images remain full-width within the container
project cards become single-column
technical highlight media stacks with text
navigation becomes a mobile menu
section spacing decreases according to the design system

Do not simply shrink desktop layouts.

38. Tablet Layout Principles

Tablet should preserve as much of the desktop composition as practical.

Examples:

project cards may remain two columns
About may remain two columns if sufficient width exists
Technical Highlights may retain text/media side-by-side
navigation may switch to mobile before the layout becomes cramped

The exact breakpoint is controlled by the design system.

39. Desktop Layout Principles

Desktop should make full use of:

1280px content container
two-column grids
large media
generous whitespace
editorial layouts

Do not stretch text across the entire viewport.

40. Accessibility Requirements

All UI described in this document must remain accessible.

Required:

semantic HTML
keyboard navigation
visible focus states
meaningful alt text
appropriate button/link semantics
sufficient contrast
reduced-motion support
accessible mobile navigation
accessible media/lightbox if implemented
41. Content Rules

UI components must consume content from the content data source.

Do not hardcode project descriptions directly into page components.

Do not:

invent project facts
invent metrics
invent technologies
invent clients
invent dates
invent awards
invent project outcomes

If content is missing:

omit the optional field
use the documented fallback
do not create fictional content
42. Optional Section Rules

Optional sections must not leave empty visual containers.

For example:

technicalHighlights: []

means:

Do not render Technical Highlights.

Likewise for:

gallery
video
metrics
additional metadata
optional credentials
43. Shared Component Rules

The following should be reusable:

Navbar
MobileNavigation
Footer
Button
Section
ProjectCard
ProjectGrid
ProjectHero
ProjectMetadata
ContributionList
TechnologyList
ChallengeSolution
TechnicalHighlight
ResultsImpact
Gallery
PreviousNextNavigation
ToptalBadge

Do not create a separate page implementation for every project.

44. Project Page Data Model

Conceptually, a project page consumes data such as:

name
slug
category
description
hero
overview
role
team
duration
platforms
keyContributions
technologies
challenges
technicalHighlights
results
gallery
previousProject
nextProject
seo

Not every field is required for every project.

The page template must gracefully handle missing optional fields.

45. Homepage Content Model

The homepage should consume:

hero
featuredProjects
services
aboutPreview
contact

The six featured projects must be defined explicitly.

Do not infer featured status from project popularity or alphabetical ordering.

46. Projects Page Content Model

The Projects page consumes the complete project collection.

The project order is defined by the website architecture/content documents.

Do not alphabetically sort projects unless explicitly instructed.

47. Navigation Consistency

The following destinations must remain consistent across the site:

Projects → /projects
About    → /about
Contact  → /contact

Project cards:

/projects/[slug]

Previous/Next:

/projects/[slug]

Do not create duplicate URL patterns.

48. No Unnecessary UI

Do not add:

search
filters
category tabs
pagination
testimonials
pricing
blog
newsletter
contact form
client logo wall
fake statistics
skill progress bars
star ratings

unless explicitly added in a future specification.

The portfolio is intentionally focused.

49. Page-Level Visual Rhythm

The overall page should follow this hierarchy:

Hero
    ↓
Major content
    ↓
Supporting content
    ↓
Secondary information
    ↓
CTA / transition

Do not make every section equally visually loud.

Large headings and media should establish rhythm.

50. Interaction Philosophy

Interaction should communicate:

"This is clickable."

It should not communicate:

"Look at this animation."

Use:

subtle hover
clear focus
restrained transitions
simple navigation
predictable behavior

Avoid:

excessive parallax
cursor-following effects
large page transitions
animated backgrounds
excessive scroll-triggered animation
51. Cursor Implementation Guidance

When implementing a page:

Build the documented structural hierarchy first.
Use existing reusable components.
Apply Design System tokens.
Insert content from the content data source.
Add responsive behavior.
Add interaction states.
Validate accessibility.
Validate media.
Validate links and routes.
Only then add subtle animation.

Do not start by adding decorative effects.

52. Page Completion Checklist

Before considering a page complete, verify:

Structure
correct route
correct section order
correct components
no missing required sections
Content
correct copy
correct project data
no invented information
optional sections handled correctly
Visual
typography follows Design System
spacing follows Design System
colors follow Design System
media follows documented treatment
layout is consistent
Responsive
mobile
tablet
desktop
wide desktop
Interaction
links work
buttons work
hover states work
focus states work
mobile navigation works
previous/next works
Accessibility
semantic HTML
alt text
keyboard access
visible focus
contrast
reduced motion
53. Final UI Principle

The website should feel like the portfolio of an experienced developer.

The UI should provide enough personality to feel designed, but enough restraint to keep attention on:

the projects
the technical work
the experience
the person behind the work

The interface should never make the user work to understand the portfolio.

When choosing between two valid UI solutions:

Prefer the clearer, simpler and more maintainable solution that preserves the visual hierarchy and lets the work speak for itself.

