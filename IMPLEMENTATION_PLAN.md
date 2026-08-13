# IMPLEMENTATION_PLAN.md

# Jakša Brzović — Portfolio Implementation Plan

## 1. Purpose

This document defines the implementation process for building the portfolio website from the existing minimal Next.js project.

The current project is intentionally minimal and contains primarily the initial Next.js setup:

- Next.js application
- TypeScript
- App Router
- global CSS
- basic layout
- basic homepage
- starter public assets
- project configuration

There is no existing portfolio architecture that needs to be migrated.

The implementation should therefore be treated as:

> Build the portfolio from the existing Next.js foundation according to the five preceding specification documents.

The five specification documents are the source of truth:

1. `DESIGN_SYSTEM.md`
2. `UI_BLUEPRINT.md`
3. `WEBSITE_ARCHITECTURE.md`
4. `CONTENT_PLAN.md`
5. `PROJECT_STRUCTURE.md`

This document defines the order and implementation rules for turning those specifications into the working website.

---

# 2. Primary Implementation Principle

Do not improvise the website architecture during implementation.

The implementation should follow this hierarchy:

```text
DESIGN_SYSTEM.md
        ↓
UI_BLUEPRINT.md
        ↓
WEBSITE_ARCHITECTURE.md
        ↓
CONTENT_PLAN.md
        ↓
PROJECT_STRUCTURE.md
        ↓
IMPLEMENTATION_PLAN.md
        ↓
Implementation

======================

If implementation details are unclear:

Check the five specification documents.
Prefer the simplest solution consistent with them.
Do not invent new design patterns.
Do not introduce unnecessary libraries.
Do not create unnecessary abstractions.
3. Current Project State

The existing project is a minimal Next.js starter.

Current relevant structure:

portfolio/
├── .next/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── node_modules/
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json

The exact dependency versions must be determined from the existing project files.

Do not assume or replace versions without a reason.

4. Phase 0 — Inspect Existing Setup

Before making structural changes, inspect:

package.json
next.config.ts
tsconfig.json
eslint.config.mjs
postcss.config.mjs
app/layout.tsx
app/page.tsx
app/globals.css
existing instructions in AGENTS.md
existing instructions in CLAUDE.md

Determine:

current Next.js version
current React version
current TypeScript setup
current CSS setup
existing dependencies
existing build scripts
existing lint configuration

Do not make unnecessary dependency changes.

5. Phase 1 — Establish Source Structure

The existing root-level app/ structure should be reorganized into the architecture defined by PROJECT_STRUCTURE.md.

Target structure:

src/
├── app/
├── components/
├── data/
├── types/
├── lib/
└── styles/

Public assets:

public/
├── media/
│   ├── projects/
│   ├── og/
│   └── site/
├── fonts/
└── favicon/

The existing Next.js configuration should remain functional after the move.

6. Phase 2 — Clean Starter Assets

Remove default Next.js/Vercel starter assets that are no longer used.

Examples:

public/file.svg
public/globe.svg
public/next.svg
public/vercel.svg
public/window.svg

Only remove assets after confirming they are not referenced anywhere.

Replace the default favicon with the final portfolio favicon when the final asset is available.

Do not invent branding assets if they have not been provided.

7. Phase 3 — Establish Global Styling

Implement the design system from:

DESIGN_SYSTEM.md

This includes:

typography
spacing
layout constraints
colors
borders
radii
shadows
buttons
links
cards
interaction states
responsive behavior
animation principles

Global CSS belongs in the project's global style layer.

Avoid scattering design tokens across individual components.

8. Design Token Implementation

Where appropriate, convert the design system into reusable CSS variables/tokens.

Conceptually:

--color-*
--font-*
--space-*
--radius-*
--border-*
--transition-*

The exact naming is implementation-dependent.

The important requirement is that repeated visual values are centralized.

Do not create a large token system for values that are only used once.

9. Phase 4 — Application Shell

Implement the global application shell.

Required shared elements:

Navbar
page container
Footer
global transition/interaction behavior where specified

The shell must be shared across all routes.

Do not duplicate Navbar/Footer markup in individual pages.

13. Reduced Motion

Respect:

prefers-reduced-motion

When reduced motion is requested:

disable or significantly reduce decorative animations
avoid large transition effects
preserve usability

Do not disable functional feedback.

14. Phase 6 — Reusable UI Components

Build the shared primitives defined in PROJECT_STRUCTURE.md.

Initial components should include:

Container
SectionHeading
Button
Link
Media

Then build larger reusable components:

Navbar
Footer
ProjectCard
ProjectGrid
ProjectHero
ProjectMeta
ProjectSection
TechnicalHighlights
ProjectGallery
ProjectVideo
PreviousNext

Do not over-engineer components before there is a real reuse case.

15. Component Development Rule

Build components from the outside in:

Design tokens
    ↓
Primitive UI
    ↓
Shared sections
    ↓
Project components
    ↓
Page compositions

Do not build every page as a monolithic component.

16. Phase 7 — Project Data Layer

Implement the canonical project data system defined in:

CONTENT_PLAN.md
PROJECT_STRUCTURE.md

Create:

src/types/project.*

and:

src/data/projects/

The data layer must contain exactly 14 projects.

17. Canonical Project Collection

The project collection must contain:

PlayStation Mini-Games Framework
Educational Games Framework
Bear With Me
Phageborn
Tab Time World
ribAR
Kells Convergent
Tondo Jigsaw
Bajkovita Šuma
VR Training / Virtual Academy
360° VR Virtual Tour
Promotional QR/OCR Mobile App
SPELEON / Scape X & Capore
Bećarac

The eight games within the PlayStation Mini-Games Framework are not separate portfolio projects.

18. Project Data Requirements

Each project should contain the fields defined by the project type.

Required conceptual fields:

id
slug
title
category
featured
overview
role
platforms

Additional available fields:

year
duration
team
client
myRole
keyContributions
technologies
challenges
technicalHighlights
results
media
seo

Optional information must remain optional.

Do not insert fake values for missing information.

19. Project Data Validation

Add development-time validation where practical.

The implementation should detect:

duplicate slugs
duplicate IDs
missing required titles
invalid featured configuration
invalid project references
broken project relationships

The website must not silently produce incorrect project routes.

20. Featured Projects

The Featured Projects collection must contain exactly:

PlayStation Mini-Games Framework
Educational Games Framework
Bear With Me
Phageborn
Tab Time World
SPELEON / Scape X & Capore

Featured status should come from project data rather than manually maintained homepage markup.

21. Previous / Next Navigation

Previous/Next navigation must be generated automatically from the canonical project order.

Do not manually hardcode:

Bear With Me → Phageborn

inside individual pages.

The order is defined by the project collection.

For each project:

previous = previous item in collection
next = next item in collection

Handle the first and last project gracefully.

22. Phase 8 — Homepage

Implement the homepage according to:

UI_BLUEPRINT.md
CONTENT_PLAN.md

The homepage should include the defined sections in the defined order.

Primary sections:

Hero
Featured Projects
Services
About Preview
Contact CTA
Footer

Do not duplicate full project content on the homepage.

Featured project cards should link to the corresponding project detail routes.

23. Hero Implementation

Use the exact approved hero copy from:

CONTENT_PLAN.md

Do not rewrite the headline during implementation.

Implement:

heading
supporting copy
primary CTA
secondary CTA
defined visual/interaction behavior

Follow the responsive rules from UI_BLUEPRINT.md.

24. Featured Projects Implementation

Render the six Featured Projects from project data.

Do not manually duplicate project card markup.

Each card should use:

ProjectCard

and obtain:

title
category
metadata
cover image
featured state
route

from project data.

25. Phase 9 — Projects Page

Implement:

/projects

using the complete 14-project collection.

The page should:

display all projects
use reusable ProjectCard components
preserve canonical ordering
link to dynamic project pages
respect responsive behavior

No project should require custom route code.

26. Phase 10 — Dynamic Project Pages

Implement:

/projects/[slug]

as the single project detail template.

The page must load the project based on the slug.

Conceptually:

slug
 ↓
getProjectBySlug()
 ↓
Project
 ↓
ProjectDetail UI

If the slug does not exist:

404

Do not create a custom page implementation for individual projects.

27. Project Detail Structure

The project detail page should follow the structure defined in UI_BLUEPRINT.md.

Conceptually:

Project Hero
    ↓
Project Metadata
    ↓
Overview
    ↓
My Role
    ↓
Key Contributions
    ↓
Technical Challenges / Solutions
    ↓
Technical Highlights
    ↓
Technologies
    ↓
Results / Impact
    ↓
Project Media
    ↓
Previous / Next

The actual visibility/order must follow UI_BLUEPRINT.md.

Sections with no content should not render empty headings.

28. Project Hero

Project Hero should obtain:

title
category
year
role
platform
hero/cover media

from project data.

If hero does not exist:

hero → cover

Use the fallback automatically.

29. Project Metadata

Metadata should be displayed consistently across all project pages.

Possible fields:

year
duration
role
platform
category
team

Only render fields that exist.

Do not display:

TBD
Unknown
N/A

on the public site.

30. Project Content

Render the approved content from CONTENT_PLAN.md.

Do not shorten, rewrite or embellish project content merely to make it sound more impressive.

The portfolio should preserve factual accuracy.

31. Project Technical Highlights

Technical Highlights should be visually distinguishable from general project description.

They should communicate specific technical problems and solutions.

Examples include:

byte-level save migration
multiplayer timestamp debugging
flexible input architecture
editor tooling
flood-fill debugging
high-density QR recognition
AR lighting synchronization
physical hardware integration

The exact content comes from project data.

32. Technologies

Technologies should be displayed as project-specific tags/list items.

Do not automatically show the complete global technology list on every project.

Only display technologies relevant to that project.

Do not add technologies merely because they appear somewhere else in the portfolio.

33. Phase 11 — Media System

Implement a reusable project media system.

It must support:

cover
hero
gallery
video

The components should accept media from project data.

34. Media Loading

Use the framework's image optimization capabilities where appropriate.

Images should:

have meaningful alt text
maintain correct aspect ratio
avoid layout shifts
use responsive sizing
be lazy-loaded when appropriate

Hero/above-the-fold media may use priority loading where justified.

Do not mark every image as high priority.

35. Image Alt Text

Alt text should describe meaningful visual content.

Do not use:

image
screenshot
photo
gallery image

as generic alt text.

For decorative images:

alt=""

may be appropriate.

36. Video Implementation

Videos should be implemented according to the interaction requirements in UI_BLUEPRINT.md.

Default behavior should prioritize:

performance
user control
accessibility
mobile compatibility

Do not autoplay videos with audio.

If autoplay is used for decorative/preview video, it must be muted.

37. Media Error Handling

Broken media should not break the page.

If an optional image/video fails:

hide or replace the failed media
preserve surrounding content
do not render broken image UI

Development mode should make media problems easy to identify.

38. Phase 12 — About Page

Implement:

/about

using the approved content from CONTENT_PLAN.md.

Sections should include the defined:

introduction
experience
career information
quick facts
relevant links
CV

Do not invent employment details.

The final CV remains the authoritative source for exact employment chronology.

39. Phase 13 — Contact Page

Implement:

/contact

with:

contact heading
introduction
email
professional links
CTA

Use centralized site configuration for contact details.

Do not duplicate the email address across components.

40. Phase 14 — Navigation

Implement the primary navigation defined by:

WEBSITE_ARCHITECTURE.md

Navigation should work consistently across:

homepage
projects page
project detail pages
about
contact

The current route should have the appropriate visual state where defined.

41. Mobile Navigation

The mobile navigation must follow UI_BLUEPRINT.md.

Ensure:

keyboard accessibility
correct focus behavior
no body scroll bugs
correct close behavior
Escape handling where applicable
appropriate touch target sizes
42. Phase 15 — Responsive Implementation

Implement responsive behavior from:

DESIGN_SYSTEM.md
UI_BLUEPRINT.md

Do not treat mobile as a separate design.

The same components should adapt to:

desktop
tablet
mobile
43. Responsive Testing

Test at minimum:

large desktop
standard desktop
tablet width
mobile portrait
mobile landscape where relevant

Verify:

typography
navigation
project cards
project hero
galleries
videos
buttons
spacing
overflow

No horizontal page scrolling should occur unless explicitly intended.

45. Phase 16 — Animation

Implement animations according to DESIGN_SYSTEM.md.

Animation should communicate:

hierarchy
state
navigation
interaction

Avoid unnecessary animation.

Do not add animations simply because a section appears empty.

46. Animation Performance

Prefer:

transform
opacity

for animated properties.

Avoid expensive animations of:

width
height
top
left
margin

when a transform-based solution is possible.

Animations must not cause noticeable layout instability.

47. Hover States

Interactive elements should have clear hover behavior on devices that support hover.

Hover states must not be required for understanding or completing an interaction.

Keyboard focus must provide equivalent or sufficient feedback.

48. Page Transitions

If page transitions are defined in the design system:

keep them short
avoid blocking navigation
respect reduced-motion preferences
do not create navigation deadlocks
do not delay page content unnecessarily
49. Phase 17 — SEO

Implement SEO based on:

CONTENT_PLAN.md

Every important route should provide:

title
meta description
canonical URL
Open Graph metadata
Twitter/X metadata

Project pages should derive metadata from project data.

50. Canonical URLs

Canonical URLs must use the final production domain.

Do not invent the production domain if it has not yet been provided.

Use a centralized site URL configuration.

51. Project SEO

For a project:

/projects/{slug}

generate metadata from the project.

Conceptually:

title:
{Project Name} — Jakša Brzović

description:
project-specific approved description

image:
project cover or dedicated OG image

Do not hardcode metadata independently inside each project page.

52. Open Graph

Default asset:

/public/media/og/og-default.webp

Project pages should preferably use the project's cover image unless a dedicated OG image exists.

53. Favicon

Replace the default starter favicon with the final portfolio favicon.

Do not create a new visual identity during implementation.

Follow the approved design system.

54. Phase 18 — Accessibility

The site must be keyboard navigable.

Verify:

semantic headings
semantic links
semantic buttons
visible focus states
sufficient contrast
alt text
accessible navigation
accessible mobile menu
reduced motion support
55. Heading Hierarchy

Maintain logical heading hierarchy.

Each page should have one primary page heading where appropriate.

Do not use heading tags merely for visual sizing.

Typography should control appearance.

56. Focus States

Every interactive element must have a visible keyboard focus state.

Do not remove browser focus outlines without replacing them with an equally visible custom focus treatment.

57. Phase 19 — Performance

The portfolio should remain lightweight.

Prioritize:

optimized images
optimized video
lazy loading
minimal JavaScript
reusable components
limited animation
avoiding unnecessary third-party dependencies
58. Client Components

Use client-side components only when necessary.

Examples that may require client-side behavior:

interactive navigation
animation state
media interaction
browser APIs

Static content should remain server-rendered where possible.

Do not convert the entire application into a client component merely for convenience.

59. Third-Party Dependencies

Before adding a dependency, ask:

Is it genuinely necessary?
Can the requirement be implemented cleanly with existing platform APIs?
Does it introduce significant bundle size?
Does it conflict with the architecture already defined?

Do not add libraries for trivial functionality.

60. Phase 20 — Project Media Population

Initially create the project media directories.

The actual images/videos can be added later.

The website must work correctly when:

all media exists
only cover exists
cover + hero exists
gallery is partially populated
no optional gallery exists

The media system must therefore be resilient to incomplete assets.

61. Placeholder Rules

Do not generate fake project screenshots.

Do not use random stock imagery.

Do not use generic placeholder images in the final portfolio.

If media is not yet available:

use the defined fallback behavior
keep the layout functional
allow real media to be inserted later
62. Phase 21 — Content Verification

Before finalizing each project, verify:

project name
slug
category
role
platform
year
duration
project description
contributions
technical highlights
technologies
result
media paths

against:

CONTENT_PLAN.md

Do not silently alter facts.

63. Accuracy Rules

Never invent:

client names
dates
technologies
plugins
player counts
awards
reviews
revenue
download numbers
responsibilities
leadership positions

If the Content Plan marks something as unknown, omit it from the public site.

64. Ownership Accuracy

Use the exact ownership level established by the content plan.

For example:

If the work was collaborative:

worked with
contributed to
helped design

If independently owned:

implemented
developed
built
designed
owned

Do not turn collaboration into individual ownership.

65. Phase 22 — Testing

Run the project's existing test/build/lint commands from package.json.

At minimum verify:

development server starts
production build succeeds
lint succeeds
TypeScript succeeds
all routes render
dynamic project routes work
invalid project routes return 404

Do not invent commands that do not exist in the project.

66. Route Testing

Verify:

/
 /projects
 /projects/playstation-mini-games-framework
 /projects/educational-games-framework
 /projects/bear-with-me
 /projects/phageborn
 /projects/tab-time-world
 /projects/ribar
 /projects/kells-convergent
 /projects/tondo-jigsaw
 /projects/bajkovita-suma
 /projects/vr-training-virtual-academy
 /projects/360-vr-virtual-tour
 /projects/promotional-qr-ocr-app
 /projects/speleon-scape-x-capore
 /projects/becarac
 /about
 /contact

All routes must resolve correctly.

67. Project Navigation Testing

For every project verify:

previous project is correct
next project is correct
first project handles previous correctly
last project handles next correctly
navigation links use the correct slug
no duplicate project is skipped

The order must exactly match CONTENT_PLAN.md.

68. SEO Testing

Verify:

page titles
descriptions
canonical URLs
Open Graph title
Open Graph description
Open Graph image
Twitter/X metadata
favicon

Project metadata must change correctly based on slug.

69. Accessibility Testing

Verify:

keyboard navigation
focus visibility
screen-reader-friendly labels
heading hierarchy
image alt text
navigation accessibility
mobile menu accessibility
reduced motion
70. Responsive QA

Verify all major components at multiple viewport sizes.

Particular attention should be paid to:

navbar
hero typography
project grids
project hero media
technical highlights
previous/next navigation
galleries
videos
contact CTA
71. Browser QA

At minimum test in current versions of:

Chrome
Firefox
Safari
Edge

Where possible, test a real iOS device for:

responsive layout
touch interaction
video
viewport behavior
navigation
scrolling
72. Performance QA

Check for:

unnecessarily large images
unnecessarily large videos
excessive JavaScript
animation jank
layout shifts
slow initial rendering
unnecessary client-side rendering
73. Phase 23 — Final Visual QA

Compare the implementation against:

DESIGN_SYSTEM.md
UI_BLUEPRINT.md
WEBSITE_ARCHITECTURE.md

Check:

spacing
typography
hierarchy
colors
interaction states
animation
responsive layout
component consistency

Do not make visual decisions that contradict the design system simply because they look appealing in isolation.

74. Final Content QA

Compare every project against:

CONTENT_PLAN.md

Confirm:

no missing project
no extra project
no duplicate project
no incorrect project order
no invented information
no accidental wording changes that alter meaning
no missing technical highlights
no broken media paths
75. Final Architecture QA

Verify that:

projects are data-driven
project detail uses [slug]
previous/next is data-driven
Featured Projects are data-driven
shared components are reused
project-specific pages do not exist
project-specific components do not exist without a genuine requirement
content is not duplicated throughout components
site configuration is centralized
media follows the defined naming convention
76. Final Cleanup

Before declaring the site complete:

Remove:

unused starter assets
unused components
unused imports
unused dependencies
temporary debug output
placeholder project content
broken links
unnecessary console logging
temporary styling
development-only visual artifacts

Do not remove configuration files that are required by the project.

77. Cursor Implementation Rules

Cursor must follow these rules during implementation.

Rule 1

Read all five specification documents before implementing the relevant feature.

Rule 2

Do not invent design decisions that are already defined in the specification documents.

Rule 3

Do not create project-specific pages when the shared dynamic project route can handle the project.

Rule 4

Do not duplicate project data inside components.

Rule 5

Do not invent missing project facts.

Rule 6

Do not add dependencies without a clear reason.

Rule 7

Do not rewrite working configuration unnecessarily.

Rule 8

Do not remove files simply because they are not currently needed without checking whether they are referenced.

Rule 9

Prefer simple implementations over elaborate abstractions.

Rule 10

Keep the implementation consistent with the existing Next.js project.

78. Cursor Decision Rule

When there are multiple valid technical implementations:

Prefer the simplest.
Prefer native Next.js / React / CSS capabilities.
Prefer existing dependencies.
Prefer reusable code.
Preserve performance.
Preserve accessibility.
Follow the five specification documents.

Do not introduce an architectural system merely because it is theoretically more scalable.

This is a portfolio website, not a large enterprise application.

79. When Cursor Should Ask

Cursor should stop and ask for clarification rather than inventing an answer when:

a visual requirement conflicts between specification documents
a required asset is missing and cannot reasonably use a defined fallback
a critical dependency is unavailable
the requested behavior requires a major architectural decision not covered by the specifications
content is missing and cannot be safely omitted
an implementation decision would materially change the approved design

For minor implementation details, use the simplest solution consistent with the specifications.

80. Implementation Order

The recommended implementation sequence is:

1. Inspect existing project
        ↓
2. Establish source structure
        ↓
3. Establish global styling/tokens
        ↓
4. Build application shell
        ↓
5. Build reusable UI primitives
        ↓
6. Build project data layer
        ↓
7. Build homepage
        ↓
8. Build Projects page
        ↓
9. Build dynamic Project page
        ↓
10. Add all 14 project entries
        ↓
11. Add media system
        ↓
12. Build About page
        ↓
13. Build Contact page
        ↓
14. Implement responsive behavior
        ↓
15. Implement animations/interactions
        ↓
16. Implement SEO
        ↓
17. Accessibility pass
        ↓
18. Performance pass
        ↓
19. Testing
        ↓
20. Visual QA
        ↓
21. Final cleanup

Do not attempt to implement everything in one step.

81. Recommended Implementation Strategy

Implement one complete vertical slice before building every page.

Recommended first slice:

Global layout
+
Navbar
+
Homepage
+
One Project Card
+
One Project Detail Page
+
Previous/Next
+
Responsive behavior

Once this structure is working correctly, expand it to all 14 projects.

This reduces the risk of duplicating architectural mistakes across the entire project.

82. Project Expansion

After the first project page is working:

Add the remaining project data.
Verify all slugs.
Verify project media paths.
Verify previous/next relationships.
Verify Featured selection.
Verify project-specific content sections.
Verify optional sections.

Do not create additional page templates.

83. Media Expansion

After the project system works without media:

Add real cover images.
Add hero images.
Add galleries.
Add videos.
Verify loading behavior.
Verify mobile behavior.
Verify fallbacks.

This allows the architecture to be validated before a large amount of media is introduced.

84. Final Definition of Done

The portfolio is complete only when all of the following are true:

Structure
 Source structure matches PROJECT_STRUCTURE.md
 No unnecessary starter structure remains
 Shared components are reusable
 Project pages are data-driven
Content
 All 14 projects exist
 Project content matches CONTENT_PLAN.md
 Featured Projects are correct
 Previous/Next ordering is correct
Design
 Design system is implemented
 UI blueprint is implemented
 Responsive behavior is correct
 Animations are implemented appropriately
Pages
 Homepage
 Projects
 Project detail
 About
 Contact
Media
 Media paths follow the project structure
 Missing optional media does not break pages
 Images are optimized
 Videos are optimized
SEO
 Site title
 Meta descriptions
 Favicon
 Canonical URLs
 Open Graph
 Twitter/X metadata
Accessibility
 Keyboard navigation
 Focus states
 Semantic markup
 Alt text
 Reduced motion
Technical
 TypeScript passes
 Lint passes
 Production build passes
 No broken routes
 No broken links
 No unnecessary dependencies
 No console errors
QA
 Desktop tested
 Tablet tested
 Mobile tested
 Chrome tested
 Firefox tested
 Safari tested
 Edge tested
 Final visual review completed
85. Final Implementation Principle

The portfolio should be implemented as a small, clean, data-driven Next.js application.

The existing project is intentionally minimal, so there is no need for a migration strategy.

The implementation process is:

Existing Next.js starter
        ↓
Clean project foundation
        ↓
Approved architecture
        ↓
Approved design system
        ↓
Reusable components
        ↓
Data-driven projects
        ↓
14 project case studies
        ↓
Interactions + animation
        ↓
Responsive + accessibility
        ↓
SEO + performance
        ↓
QA
        ↓
Finished portfolio

The final implementation should remain simple enough that a future project can be added primarily by:

1. Adding project data
2. Adding project media
3. Adding the project to the canonical collection

without creating a new page architecture.

The goal is not to build the most sophisticated website architecture possible.

The goal is to build a polished, performant, maintainable portfolio that accurately communicates the developer's experience and technical work.
