# DESIGN_SYSTEM.md

# Jakša Brzović — Portfolio Design System

## 1. Purpose

This document defines the visual language, design tokens, reusable visual patterns, interaction states, responsive principles, and accessibility-related visual rules for the Jakša Brzović Unity Developer portfolio.

This document is a source of truth for:

- visual direction
- typography
- colors
- spacing
- containers
- breakpoints
- borders
- radii
- shadows
- buttons
- links
- cards
- project cards
- metadata
- media treatment
- navigation styling
- animation and motion
- interaction states
- accessibility-related visual behavior

This document does not define:

- page-specific content
- project descriptions
- project data
- project ordering
- routing
- exact page composition
- asset inventory
- implementation workflow

Those are defined in the other project documents.

---

# 2. Design Direction

## 2.1 Overall Character

The portfolio should feel:

- professional
- modern
- technical
- confident
- restrained
- editorial
- premium
- developer-focused

The site should communicate the experience of a senior Unity developer without looking like:

- a generic developer template
- a startup landing page
- a game studio marketing website
- an overly futuristic "tech" website
- a design agency portfolio
- an overly decorative personal website

The visual design should prioritize:

1. strong typography
2. excellent spacing
3. high-quality project imagery
4. clear information hierarchy
5. subtle interaction
6. technical credibility
7. readability

The website itself should not become the spectacle. The work should remain the focus.

---

# 3. Core Visual Principles

## 3.1 Content First

Project content and project imagery are the primary visual elements.

UI decoration must never compete with:

- project screenshots
- project videos
- technical content
- headings
- primary calls to action

## 3.2 Restraint

Avoid unnecessary:

- gradients
- glowing effects
- excessive shadows
- animated backgrounds
- floating decorative shapes
- particle effects
- excessive glassmorphism
- oversized iconography

Visual effects should only be used when they have a clear functional or communicative purpose.

## 3.3 Editorial Rhythm

The site should use:

- large headings
- generous whitespace
- strong section separation
- controlled content widths
- large media
- occasional asymmetric layouts where appropriate

The result should feel closer to a carefully designed editorial case-study portfolio than a collection of generic UI cards.

## 3.4 Technical Credibility

Technical content should be visually clear without becoming software documentation.

Use:

- concise technical highlights
- readable metadata
- numbered contributions
- challenge/solution layouts
- restrained technology tags

Avoid turning every technical item into a heavily decorated card.

---

# 4. Typography

## 4.1 Font Family

Primary typeface:

**Manrope**

Use Manrope throughout the site unless a specific asset or external credential requires its own original typography.

Do not introduce additional typefaces without a documented reason.

## 4.2 Font Weights

Use only:

```text
400 — Regular
500 — Medium
600 — Semibold
700 — Bold

=================================================

Avoid unnecessary 800/900 weights.

5. Typography Scale
5.1 H1 — Display / Page Title

Desktop:

font-size: 64px
line-height: 1.05
font-weight: 700
letter-spacing: -0.035em

Mobile:

font-size: 42px
line-height: 1.08
font-weight: 700
letter-spacing: -0.025em

Used for:

homepage Hero
project Hero
major page titles
5.2 H2 — Section Heading

Desktop:

font-size: 40px
line-height: 1.15
font-weight: 700
letter-spacing: -0.025em

Mobile:

font-size: 32px
line-height: 1.20
font-weight: 700
letter-spacing: -0.020em

Used for:

major homepage sections
Services
About
Contact
project detail sections
5.3 H3 — Subheading

Desktop:

font-size: 24px
line-height: 1.30
font-weight: 600
letter-spacing: -0.015em

Mobile:

font-size: 21px
line-height: 1.30
font-weight: 600

Used for:

contribution titles
challenge titles
Technical Highlight titles
smaller content groups
5.4 Body Large

Desktop:

font-size: 20px
line-height: 1.60
font-weight: 400

Mobile:

font-size: 18px
line-height: 1.55
font-weight: 400

Used selectively for:

important introductory text
project Overview
Hero descriptions
5.5 Body
font-size: 16px
line-height: 1.60
font-weight: 400

Mobile:

font-size: 16px
line-height: 1.60
font-weight: 400

Used for standard paragraphs and descriptions.

5.6 Metadata
font-size: 14px
line-height: 1.40
font-weight: 500

Used for:

platform
role
duration
year
categories
secondary project information
technology metadata
5.7 Eyebrow
font-size: 12px
line-height: 1.20
font-weight: 700
letter-spacing: 0.08em
text-transform: uppercase

Used for:

section labels
project categories
contextual labels
Technical Highlight categories

Eyebrows are subordinate to the main heading.

6. Typography Rules
6.1 Hierarchy

Hierarchy must be communicated primarily through:

size
weight
spacing
contrast

Do not rely exclusively on color to establish hierarchy.

6.2 Reading Width

Long-form text should use a controlled maximum width.

Target:

60–75 characters per line

approximately.

6.3 Heading Width

Large headings may use wider containers than body copy.

Do not force headings into a single line when doing so harms composition or readability.

7. Color System

The portfolio uses a neutral foundation with one restrained accent color.

All colors must be implemented as centralized semantic tokens.

7.1 Background
--color-background: #F7F7F5

Primary page background.

7.2 Surface
--color-surface: #FFFFFF

Used for surfaces that need subtle separation from the page background.

7.3 Primary Text
--color-text-primary: #171717

Used for:

H1
H2
H3
primary navigation
important body text
7.4 Secondary Text
--color-text-secondary: #5F6368

Used for:

descriptions
supporting text
secondary information
7.5 Muted Text
--color-text-muted: #8A8D91

Used sparingly for:

low-priority metadata
subtle labels
supporting information
7.6 Border
--color-border: #E4E4E1

Used for:

subtle separators
borders
component boundaries
navigation separation
7.7 Accent
--color-accent: #2563EB

Used selectively for:

important links
selected states
interactive emphasis
small eyebrow details where appropriate
selected numbers/details in technical sections

The accent must not dominate the interface.

8. Color Rules

Do:

use semantic color tokens
maintain strong text contrast
keep the palette restrained
use the accent selectively

Do not:

introduce one-off colors
use multiple unrelated accent colors
use gradients as a substitute for hierarchy
use accent color on every element
create colorful card systems

Do not use pure black as the primary text color when the defined primary token is appropriate.

9. Spacing System

The spacing system uses a 4px base.

--space-1:   4px
--space-2:   8px
--space-3:  12px
--space-4:  16px
--space-5:  20px
--space-6:  24px
--space-8:  32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
--space-32: 128px

These values form the primary spacing vocabulary.

Avoid arbitrary spacing values unless a specific visual requirement genuinely requires them.

10. Spacing Usage

Typical usage:

4–8px     → tightly related elements
12–16px   → metadata and compact UI
20–24px   → component content
32–48px   → content groups
64–96px   → major separation
128px     → very large section spacing
11. Container System

Primary content container:

max-width: 1280px
margin-inline: auto

Horizontal padding:

Desktop: 32px
Tablet: 24px
Mobile: 20px

The container should prevent content from touching the viewport edges.

12. Content Widths
Standard Content
max-width: 1280px
Reading Content
max-width: 720px

Used for long-form readable text.

Overview / Large Text
max-width: 760px
Hero Copy
max-width: 800px

These are maximum values, not requirements that every section must use the full width.

13. Responsive Breakpoints

Use the following shared breakpoints:

--breakpoint-mobile: 640px
--breakpoint-tablet: 768px
--breakpoint-desktop: 1024px
--breakpoint-wide: 1280px
Mobile
< 640px
Tablet
640px–1023px
Desktop
1024px+
Wide
1280px+

The wide breakpoint primarily controls max-width and whitespace behavior. It does not require a completely different layout.

14. Section Spacing
Desktop

Standard section:

padding-block: 96px

Large key section:

padding-block: 128px

Small section:

padding-block: 64px
Mobile

Standard section:

padding-block: 64px

Large section:

padding-block: 80px

Small section:

padding-block: 48px

Page-specific layouts may adjust these within the design system when necessary.

15. Grid Gaps

Standard values:

small: 16px
medium: 24px
large: 32px

Project grids:

Desktop: 32px
Mobile: 24px
16. Border Radius
--radius-sm: 6px
--radius-md: 10px
--radius-lg: 16px
--radius-xl: 24px

Usage:

6px
compact UI
small tags
small controls
10px
buttons
standard controls
smaller cards
16px
project cards
large surfaces
gallery items
24px
large hero/media surfaces where appropriate

Do not round every element.

Avoid an "everything is a rounded rectangle" aesthetic.

17. Borders

Borders are subtle and support hierarchy.

Use them for:

navigation separation
metadata separation
subtle card boundaries
section dividers
form controls

Do not outline every component.

18. Shadows

Shadows are minimal.

Use them only when an element genuinely requires elevation.

Avoid:

large drop shadows
colored shadows
glowing shadows
multiple nested shadows
heavy card elevation
19. Buttons

Buttons are reusable components.

19.1 Primary Button
height: 48px
padding-inline: 20px
border-radius: 10px
font-size: 14px
font-weight: 600

Primary button uses the accent color for its main visual emphasis.

Typical use:

primary CTA
important navigation action
19.2 Secondary Button
height: 48px
padding-inline: 20px
border-radius: 10px
font-size: 14px
font-weight: 600

Uses a neutral surface/border treatment.

Typical use:

secondary CTA
supporting action
19.3 Small Button
height: 40px
padding-inline: 16px
border-radius: 8px
font-size: 14px
font-weight: 600
19.4 Text / Link Button

Used for lower-priority actions.

Example:

View Project →

No large button surface is required.

20. Button States

Every button must support:

default
hover
focus-visible
active
disabled

Hover transitions must be subtle.

Do not use:

bounce
aggressive scaling
glow
large transforms

Maximum typical hover scale:

~1.02

when scale is appropriate at all.

21. Links

Links must be visually recognizable.

Primary links may use the accent color and/or an appropriate underline or hover treatment.

All links must support:

default
hover
focus-visible
active where relevant

Use semantic <a> elements for navigation.

Do not use buttons for navigation links.

22. Generic Cards

Cards are not the default container for every piece of content.

Use a card only when content genuinely benefits from being grouped as a discrete unit.

Typical card styling:

background: var(--color-surface)
border: 1px solid var(--color-border) when needed
border-radius: 16px

Use moderate internal spacing.

Avoid heavy shadows.

23. Project Cards

Project Cards are a dedicated reusable component.

Structure:

Project Card
├── cover image
├── category
├── project name
├── short description
└── flexible metadata

Visual priority:

image
project name
short description
metadata

The image is the dominant visual element.

24. Project Card Media

Project card images use:

aspect-ratio: 16 / 10
object-fit: cover
border-radius: 16px

The source asset is:

cover.webp

cover.webp is optimized for project card usage.

It is not required to be the same image as hero.webp.

25. Project Card Interaction

Project cards should have a subtle hover interaction.

Possible behavior:

image scale
slight image movement
title/link emphasis
subtle border/accent transition

Typical image scale:

~1.02

Typical transition:

250–400ms

Do not make the entire card jump or perform large transforms.

26. Featured Projects

The homepage contains exactly 6 Featured Projects.

All six projects have equal visual importance.

The first project must not be larger or visually prioritized over the other five.

Desktop:

2 columns
32px gap

Conceptually:

Project 01    Project 02
Project 03    Project 04
Project 05    Project 06

Mobile:

1 column
24px gap

All six use the same Project Card component.

27. Technology Tags

Technology tags are lightweight metadata elements.

Example:

Unity
C#
PS5
AR
iOS

They are not primary actions.

Do not turn technologies into large colorful cards.

28. Metadata

Metadata is visually secondary.

Examples:

Unity Developer
PS4 · PS5
2024

or:

Unity Developer · PS4 / PS5 · 2024

Do not place every metadata value into its own card.

29. Section Component

Section is a reusable visual wrapper.

It may support:

eyebrow
title
description
children

All values are optional except the actual content.

The component provides shared:

width
vertical spacing
heading hierarchy
section-level alignment

Section-specific content layouts should be implemented inside the shared Section wrapper.

30. Navigation

The navigation should be minimal and clean.

Desktop structure:

Brand / Name                    Projects   About   Contact   CV

Primary navigation should not visually compete with the Hero.

Avoid unnecessary navigation icons or decorative elements.

31. Navbar Styling

The Navbar should use:

typography from the main design system
subtle borders where appropriate
consistent horizontal spacing
restrained active/hover states

If sticky/fixed behavior is used, it must not consume excessive vertical space.

If a scroll state is used, it should be subtle.

Do not introduce aggressive shrinking or animated navigation transformations.

32. Mobile Navigation

Desktop navigation transitions to a mobile navigation pattern on smaller screens.

The mobile menu must:

be keyboard accessible
have a visible focus state
support Escape
maintain clear hierarchy
avoid unnecessary animation
avoid trapping the user unexpectedly
33. Media

Project media is one of the primary visual elements of the site.

Images must:

preserve aspect ratio
be responsive
use meaningful alt text when informative
avoid unnecessary filters
avoid unnecessary overlays

Do not distort images.

Do not crop important content without a documented reason.

34. Cover Images

cover.webp is used primarily for:

Featured Project cards
Projects listing cards
default social preview when appropriate

Cover images should be selected/composed to tolerate the project card crop.

35. Hero Images

hero.webp is used on project detail pages.

Hero media should be visually prominent.

It may use a different composition from the project cover image.

Recommended large-media radius:

16–24px

depending on the surrounding layout.

36. Gallery

Gallery is flexible.

Projects may have different numbers of gallery items.

Do not force every project into the same gallery count or rigid layout.

Gallery images may use:

full-width
half-width

or another documented media arrangement where appropriate.

The gallery should create visual rhythm without unnecessary decoration.

37. Video

Videos are optional project media.

Rules:

no autoplay with sound
preserve aspect ratio
responsive sizing
use controls where appropriate
use poster imagery where useful
lazy-load when appropriate
provide accessible controls

Only render videos that are defined in project data.

38. Technical Highlights

Technical Highlights are an optional project-detail component.

Each project may contain:

0–3 Technical Highlights

A Technical Highlight may contain:

eyebrow/category
title
concise description
optional image
optional video
optional technology tags

Technical Highlights should feel like technical case-study callouts rather than generic cards.

Media/text positioning may alternate to create visual rhythm.

Technical Highlights are not displayed on the Projects listing page.

39. Results / Impact

Results and Impact should use a restrained visual treatment.

Meaningful metrics may be emphasized.

Example:

~6 WEEKS
Development

~10 M
GPS accuracy

iOS
Platform

Metrics are optional.

Never invent metrics.

When numeric metrics are not available, use concise factual outcomes.

40. Animation System

Animation is:

subtle
purposeful
fast
consistent
restrained

Use animation to communicate:

interaction
navigation
state changes
hierarchy
media transitions

Do not animate elements merely because they can be animated.

41. Motion Tokens
--duration-fast: 150ms
--duration-normal: 250ms
--duration-slow: 400ms

Standard easing:

cubic-bezier(0.2, 0.8, 0.2, 1)

Typical usage:

Buttons / small controls: 150–250ms
Project cards: 250–400ms
Large media / page transitions: up to 400ms

Do not use transition: all when only specific properties are changing.

42. Page Entrance

Page entrance animation should be subtle.

The user should never be forced to wait for content to become visible.

Do not use long dramatic page transitions.

43. Reduced Motion

Respect:

prefers-reduced-motion: reduce

When enabled:

remove decorative motion
reduce transforms
reduce entrance animations
disable unnecessary parallax
avoid looping decorative animation

Content and navigation must remain fully functional.

44. Accessibility

Use sufficient contrast between:

text and background
interactive elements and background
focus states and surrounding UI

Do not sacrifice readability for visual subtlety.

All meaningful images require meaningful alt text.

Decorative images should use:

alt=""

Focus states must remain visible.

45. Touch Targets

Interactive controls must have sufficiently large touch targets for mobile use.

Do not create tiny links or icon-only controls that are difficult to operate.

Buttons should generally retain the 48px standard height on mobile.

46. Semantic Interaction

Use:

<a>

for navigation.

Use:

<button>

for actions.

Do not use a <div> or <span> as a fake interactive control.

Use semantic HTML elements wherever possible.

47. Iconography

Icons should be used sparingly.

Icons should:

use a consistent visual style
have consistent sizing
support the meaning of the interface
not replace clear text unnecessarily

Do not add icons to every card or section simply for decoration.

48. Decorative Elements

Decorative elements are secondary.

Possible examples:

subtle lines
small accent markers
section numbers
restrained geometric details

They must never:

obscure content
reduce readability
create excessive visual noise
become the primary focus
49. Toptal Credential

The Toptal badge is a credential, not the primary portfolio CTA.

It should communicate:

Top 3% Talent — Vetted by Toptal

Implement it as a reusable component.

Where possible, use the original provided SVG/HTML artwork rather than recreating it as a raster image.

The official badge may retain its official external "Hire me" behavior.

The badge must not replace the portfolio's primary direct Contact flow.

50. Component Consistency

Repeated UI patterns must use reusable components.

Do not create project-specific versions of shared components without a genuine documented requirement.

Avoid patterns such as:

BearWithMeSpecialCard
PhagebornSpecialCard
FeaturedSpecialButton
AboutSpecialButton

when the existing reusable component can satisfy the requirement.

51. Final Visual Component Vocabulary

The core reusable visual vocabulary includes:

Navbar
Button
Link
Section
Card
ProjectCard
Metadata
TechnologyTag
TechnicalHighlight
GalleryMedia
ToptalBadge
Footer

More complex structural components are defined in UI_BLUEPRINT.md.

52. Design Token Rules

All reusable visual values must be centralized.

Prefer:

var(--color-text-primary)
var(--space-8)
var(--radius-md)
var(--duration-fast)

over repeated arbitrary values.

Reusable components should consume design tokens rather than define unrelated local values.

If a genuinely new visual requirement appears:

Check whether an existing token can satisfy it.
Reuse the existing system where possible.
If a new token is genuinely necessary, add it consistently.
Do not create one-off visual exceptions without a documented reason.
53. Do / Don't
Do
prioritize typography
use generous whitespace
use high-quality project media
keep components reusable
maintain a restrained color palette
use subtle animation
maintain strong hierarchy
keep technical content readable
preserve image aspect ratios
use semantic HTML
respect reduced motion
maintain consistent spacing and tokens
use project imagery as a primary visual element
Don't
invent visual styles per page
create a different card style for every section
overuse rounded cards
overuse shadows
use excessive gradients
use glowing effects everywhere
add unnecessary animation
introduce arbitrary colors
introduce arbitrary spacing
use fake metrics
use decorative UI instead of meaningful content
turn every section into a card grid
make the first Featured Project larger than the other five
make the portfolio look like a generic SaaS landing page
make the portfolio itself more visually important than the work
54. Implementation Boundaries

This document defines the visual system.

It does not define:

exact page section order
exact page content
project data
routing
asset inventory
file structure
implementation sequence

Those decisions belong to the appropriate project documents.

If a page-specific requirement conflicts with a generic visual rule, the page-specific rule may override it only when explicitly documented in UI_BLUEPRINT.md.

55. Source of Truth

This document is the source of truth for the visual design system.

The six project documents have the following responsibilities:

DESIGN_SYSTEM.md

Defines:

visual language
design tokens
typography
colors
spacing
reusable visual components
interaction styling
responsive visual rules
UI_BLUEPRINT.md

Defines:

page layouts
section order
component composition
page-specific responsive behavior
exact UI structure
WEBSITE_ARCHITECTURE.md

Defines:

site structure
routes
navigation
page relationships
project ordering
CONTENT_PLAN.md

Defines:

all final copy
project data
project metadata
Technical Highlights content
SEO metadata
asset references
PROJECT_STRUCTURE.md

Defines:

folder structure
file structure
asset locations
canonical image/video paths
IMPLEMENTATION_PLAN.md

Defines:

implementation sequence
development rules
Cursor workflow
validation requirements
technical implementation guidance

If documents conflict, do not silently invent a solution. Follow the documented source-of-truth hierarchy defined in IMPLEMENTATION_PLAN.md.

56. Final Design Principle

The portfolio should communicate experience through:

clarity, quality and restraint.

The design should make the projects and technical work feel impressive without trying to make the website itself the spectacle.

When in doubt:

Prefer clarity over decoration, hierarchy over novelty, and consistency over cleverness.


