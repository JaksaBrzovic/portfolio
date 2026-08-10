# WEBSITE_ARCHITECTURE.md

# Jakša Brzović — Portfolio Website Architecture

## 1. Purpose

This document defines the information architecture, routing structure, page relationships, navigation model, project ordering rules, and shared site architecture for the Jakša Brzović Unity Developer portfolio.

This document is the source of truth for:

- site map
- routes
- page relationships
- navigation
- project routing
- project ordering
- featured project selection
- shared site shell
- URL structure
- project detail relationships
- internal linking

This document does not define:

- visual design tokens
- typography
- colors
- exact component styling
- page section visual composition
- final copy
- asset paths
- implementation sequence

Those responsibilities belong to the other project documents.

---

# 2. Site Architecture Overview

The website consists of five primary route types:

```text id="8w4j1k"
/
├── Homepage
│
├── /projects
│   └── Projects listing
│
├── /projects/[slug]
│   └── Individual project detail
│
├── /about
│   └── About / career
│
└── /contact
    └── Direct contact

=====================


The global site shell consists of:

Navbar
Main Content
Footer

The Navbar and Footer are shared across all primary pages.

3. Primary Routes

The canonical routes are:

Page	Route	Purpose
Homepage	/	Introduction and featured work
Projects	/projects	Complete project collection
Project Detail	/projects/[slug]	Individual project case study
About	/about	Biography, career progression and credentials
Contact	/contact	Direct contact information

No additional primary routes are required for the initial release.

4. Homepage

Canonical route:

/
Purpose

The Homepage is the primary entry point.

Its purpose is to communicate, within a short interaction:

who Jakša is
what he specializes in
the breadth and quality of his work
what services he provides
how to learn more about him
how to contact him
Homepage Information Architecture
Homepage
│
├── Hero
│
├── Featured Projects
│
├── Services
│
├── About Preview
│
├── Contact CTA
│
└── Footer

The exact visual composition is defined in UI_BLUEPRINT.md.

5. Featured Projects

The Homepage contains exactly:

6 Featured Projects

Featured projects are explicitly defined in project data.

They must not be inferred dynamically from:

project popularity
project date
alphabetical order
number of images
number of technologies
project metrics

The Featured Project list is an intentional editorial selection.

Featured Project Relationship

Each Featured Project links to its canonical project detail route:

/projects/[slug]

The same project is not treated as a separate project entity simply because it appears in the Featured section.

6. Projects Listing

Canonical route:

/projects
Purpose

The Projects page provides access to the complete portfolio collection.

It is the primary browsing page for the user's work.

Projects Page Relationship
Homepage
   │
   └── Featured Projects
           │
           └── /projects/[slug]

Navbar
   │
   └── /projects
           │
           ├── /projects/[slug]
           ├── /projects/[slug]
           ├── /projects/[slug]
           └── ...
7. Complete Project Collection

The portfolio contains 14 projects.

The project collection currently consists of:

1. Memento
2. Magnitude
3. Memory Game
4. Space Kabaam
5. Cuibe Kabaam
6. Current
7. Puzzle Piecer
8. Fragments of History
9. Bear With Me
10. Phageborn
11. Tab Time World
12. ribAR
13. Kells Convergent
14. Tondo Jigsaw
15. Fairytale Forest
16. VR Training Applications
17. 360 VR Virtual Tour
18. Promotional QR/OCR Mobile App
19. SPELEON
20. Bećarac

Important:

The project naming/content source must determine the final canonical 14-project collection.

The list above preserves project names discussed during portfolio planning, but the implementation must not assume that every named concept above is a separate final portfolio entry.

The final 14-project selection and ordering are defined by CONTENT_PLAN.md.

Do not silently add, remove, merge, or rename projects based on inference.

8. Project Ordering

Project ordering is editorial.

It must be explicitly defined in project data.

Do not use:

alphabetical sorting
date sorting
slug sorting
database insertion order

unless the content source explicitly defines that as the canonical order.

The canonical ordering is used for:

Projects page
Previous / Next navigation
any project index
sitemap generation where ordering is relevant
9. Project Slugs

Every project has a stable URL slug.

Slug rules:

lowercase
words separated by hyphens
no spaces
no Croatian diacritics
no unnecessary punctuation
stable after publication

Canonical URL format:

/projects/{slug}

Examples:

/projects/bear-with-me
/projects/phageborn
/projects/ribar
/projects/tondo-jigsaw

The final slug list is defined in CONTENT_PLAN.md.

10. Project Detail Pages

All project detail pages use the same route pattern:

/projects/[slug]

The project detail page is generated from project data.

There must be one reusable project detail page implementation.

Do not create:

BearWithMePage
PhagebornPage
RibarPage
TondoJigsawPage

as separate page implementations.

Instead:

ProjectDetailPage
        +
ProjectData

generates each project page.

11. Project Detail Data Relationship

Conceptually:

Project Collection
       │
       ├── Project Data A
       ├── Project Data B
       ├── Project Data C
       └── ...
              │
              ↓
       ProjectDetailPage
              │
              ↓
       /projects/[slug]

The project data is the source of the project-specific content.

The page template controls structure.

12. Project Detail Sections

Every project uses the same canonical information architecture:

Project Hero
    ↓
Overview
    ↓
My Role
    ↓
Key Contributions
    ↓
Technologies
    ↓
Challenges & Solutions
    ↓
Technical Highlights (optional)
    ↓
Results / Impact
    ↓
Gallery / Media
    ↓
Previous / Next

Optional sections are omitted when project data does not contain meaningful information.

13. Technical Highlights

Technical Highlights are an optional project-level content type.

They are not separate pages.

Relationship:

Project
└── Technical Highlights
    ├── Highlight 01
    ├── Highlight 02
    └── Highlight 03

Maximum recommended number:

3

Technical Highlights exist to showcase particularly interesting engineering work.

14. Previous / Next Project Relationship

Every project detail page may provide navigation to adjacent projects.

Relationship:

Project A
   │
   ├── Previous → Project before A
   │
   └── Next → Project after A

The ordering comes from the canonical project ordering.

It must not be generated alphabetically.

15. First / Last Project Behavior

If the current project is the first project:

Previous = null
Next = next project

If the current project is the last project:

Previous = previous project
Next = null

Do not create fake navigation targets.

Do not automatically wrap from last project to first unless explicitly added as a future requirement.

16. About Page

Canonical route:

/about
Purpose

The About page provides deeper personal and professional context.

It includes:

biography
career progression
professional background
quick facts
CV
credentials
path to Contact
About Relationship
Homepage
   │
   └── About Preview
           │
           └── /about

Navbar
   │
   └── /about

The About page is the authoritative location for the complete biography.

The Homepage should contain only a concise preview.

17. Career Progression

Career progression belongs primarily to:

/about

It should not be duplicated as a full timeline on the Homepage.

The Homepage may show a short summary or preview.

18. Contact Page

Canonical route:

/contact
Purpose

The Contact page provides a direct way to get in touch.

The portfolio uses a direct contact approach rather than a traditional form.

Contact Relationship

Contact can be reached from:

Navbar
Homepage CTA
About CTA
Footer

The exact external/contact destinations are defined in CONTENT_PLAN.md.

19. No Contact Form

The initial architecture does not include a server-side contact form.

Do not create a backend contact system.

Do not add:

form submission endpoints
database storage
email API integration
spam protection workflow

unless explicitly requested in a future iteration.

The current architecture uses direct contact links.

20. Global Navigation Model

Primary navigation:

Projects
About
Contact

Secondary/utility action:

CV

Brand:

Jakša Brzović / JB

The navigation is available globally.

21. Global Footer Model

The Footer is shared across all pages.

It provides:

brand
navigation
professional links
email
copyright
Back to Top

The Footer should not contain a second full site architecture.

It is a compact secondary navigation layer.

22. Internal Linking Model

Important internal links:

Homepage
   ├── Projects → /projects
   ├── About → /about
   └── Contact → /contact

Projects
   └── Project Card → /projects/[slug]

Project Detail
   ├── Previous → /projects/[slug]
   ├── Next → /projects/[slug]
   └── Contact CTA → /contact

About
   ├── CV → external/document destination
   └── Contact → /contact

Avoid creating unnecessary cross-links between unrelated sections.

23. Canonical URLs

Every route must have one canonical URL.

Homepage:

/

Projects:

/projects

About:

/about

Contact:

/contact

Project:

/projects/{slug}

Canonical URLs must use the production domain when metadata is generated.

24. URL Stability

Once a project is published, its slug should be considered stable.

Do not change project slugs casually.

If a slug must change in the future:

preserve a redirect from the old URL
update internal links
update canonical metadata
update sitemap references
25. Query Parameters

The initial site does not require query parameters for normal navigation.

Avoid URLs such as:

/projects?filter=games
/projects?category=ar

because the initial Projects page has:

no filters
no search
no sorting controls
no pagination
26. Hash Navigation

Hash-based navigation should only be used when explicitly required for a specific page interaction.

Normal primary navigation uses routes:

/projects
/about
/contact

Do not replace page routes with homepage hashes.

27. 404 / Unknown Project

The application should handle unknown routes gracefully.

For an unknown project slug:

/projects/unknown-project

the application should show the site's standard not-found state.

Do not render an empty project template.

Do not invent project data.

The not-found page should provide a clear path back to:

/projects

and/or:

/
28. Invalid Project Data

If a project exists but has missing optional data:

render available content
omit empty sections
preserve page structure
do not generate placeholder copy

If required project identity data is missing, fail gracefully rather than rendering an incomplete page.

29. Project Data as Single Source

Project information must exist in one canonical data source.

Do not maintain separate project definitions for:

Homepage
Projects page
Project detail page
Previous/Next navigation
SEO

Instead:

Project Data
    │
    ├── Homepage ProjectCard
    ├── Projects ProjectCard
    ├── ProjectDetailPage
    ├── PreviousNextNavigation
    └── SEO Metadata

This prevents inconsistent project information.

30. Featured Project Data

Featured status should be an explicit property.

Conceptually:

featured: true

or an explicit featured-project collection.

Do not infer it from:

project order
project date
category
number of assets

There must be exactly six Featured Projects on the Homepage.

31. Project Ordering Data

Canonical project ordering should be explicit.

Conceptually:

projects = [
    projectA,
    projectB,
    projectC,
    ...
]

The same ordering is used for:

Projects page
Previous/Next navigation

The exact final order is defined in CONTENT_PLAN.md.

32. Services Architecture

Services are content entities, not independent pages.

There are six service entries:

Unity Game Development
AR Development
VR Development
Interactive Applications
Technical Consulting
Legacy Project Modernization

They are displayed on the Homepage.

No individual service routes are required.

33. Toptal Credential Architecture

The Toptal badge is a shared credential component.

It is not:

a separate page
a service
a project
the primary Contact mechanism

It may link to the official Toptal destination associated with the badge.

The badge should be rendered only where explicitly defined by the UI/content architecture.

Do not duplicate the badge unnecessarily across the site.

34. CV Architecture

The CV is an external/document resource.

It is accessible from:

Navbar
About page

where defined by the UI blueprint.

The CV is not duplicated as an internal portfolio page.

The final CV destination is defined in CONTENT_PLAN.md.

35. External Links

External destinations include:

CV
LinkedIn
GitHub
email
Toptal credential destination

External URLs must be defined in content/configuration.

Do not invent missing URLs.

36. Sitemap Architecture

The sitemap should include the canonical public routes:

/
/projects
/about
/contact
/projects/[slug] × all published projects

Only published project pages should be included.

Do not include:

internal implementation routes
development routes
nonexistent projects
duplicate URLs
query-parameter variants
37. SEO Architecture

SEO metadata is generated from the same page/project data used by the site.

Relationship:

Page Data
    │
    ├── UI
    ├── URL
    └── SEO Metadata

Project metadata includes:

title
description
canonical URL
Open Graph image

The exact SEO rules are defined in the project content/implementation documents.

38. Open Graph Architecture

Each public page may define an Open Graph preview.

Homepage:

/media/og/og-default.webp

Project:

/media/projects/{slug}/cover.webp

Do not create project-specific social images unless explicitly defined.

39. Asset Relationship

Assets are referenced by project data and page content.

Conceptually:

Project
   │
   ├── cover
   ├── hero
   ├── gallery
   └── video

Asset paths are defined in:

PROJECT_STRUCTURE.md

The architecture must not contain hardcoded duplicated asset paths.

40. Shared Site Shell

Every primary page uses:

<AppShell>
    <Navbar />
    <MainContent />
    <Footer />
</AppShell>

The exact framework implementation may vary.

The architectural principle remains:

one shared Navbar
one shared Footer
page-specific Main Content
41. Layout Independence

The site architecture must not depend on any individual project.

For example:

removing one project must not require rewriting the Projects page
changing project order must not require changing Previous/Next components
changing a project slug must update routing/data consistently
adding a future project should require adding project data rather than creating a new page implementation
42. Adding a New Project

Adding a future project should conceptually require:

Add project data.
Define a unique slug.
Define project ordering.
Define whether it is Featured.
Add required assets.
Add SEO metadata.
Ensure the project satisfies the required content structure.

The project detail page implementation does not change.

43. Removing a Project

Removing a project should require:

Remove it from the canonical project collection.
Remove it from Featured Projects if applicable.
Remove or redirect its published route if already public.
Remove obsolete assets if appropriate.
Update project navigation automatically.

Do not leave broken Previous/Next links.

44. Project Categories

Categories are metadata rather than separate site sections.

A project may have categories such as:

Game
Mobile
AR
VR
Interactive
Museum

Categories do not currently create category pages.

Do not introduce category routes such as:

/projects/ar
/projects/vr
/projects/games

unless explicitly added later.

45. No Blog Architecture

The initial portfolio does not contain a blog.

Do not create:

/blog
/articles
/posts

Technical writing associated with projects remains part of the relevant project content.

46. No Separate Case Study Route

A project detail page is itself the case study.

Do not create a second route such as:

/case-studies/[slug]

The canonical project route is:

/projects/[slug]
47. Navigation Priority

The information architecture prioritizes:

Projects
About
Contact

The portfolio is primarily a work showcase.

Therefore Projects is the central content destination.

48. User Journey

The intended primary user journey is:

Homepage
   ↓
Hero
   ↓
Featured Project
   ↓
Project Detail
   ↓
Previous / Next
   ↓
More Projects
   ↓
About
   ↓
Contact

Alternative journey:

Homepage
   ↓
Projects
   ↓
Project Detail
   ↓
Contact

The architecture should support both without forcing a single path.

49. Architecture Principles

The website should follow these principles:

Single source of truth

Project data should not be duplicated.

Stable routing

Published URLs should remain stable.

Reusable templates

All projects share one project detail template.

Explicit editorial control

Featured status and ordering are explicit.

Simple navigation

No unnecessary filtering or complex browsing systems.

Progressive disclosure

The Homepage introduces the work; project pages provide detail.

Maintainability

Adding or changing a project should primarily involve data/content changes rather than structural code changes.

50. Architecture Anti-Patterns

Do not:

duplicate project data across pages
hardcode project ordering into UI components
hardcode Previous/Next relationships individually
create one page implementation per project
create category pages that are not required
add query-based filtering
add unnecessary CMS architecture
create a database for static portfolio content without a real requirement
invent URLs
create duplicate routes
use project names directly as routes when a canonical slug exists
make navigation dependent on visual layout
51. Source of Truth Hierarchy

The six project documents have distinct responsibilities.

DESIGN_SYSTEM.md

Visual language and design tokens.

UI_BLUEPRINT.md

Page structure and UI composition.

WEBSITE_ARCHITECTURE.md

Site map, routing, relationships and navigation.

CONTENT_PLAN.md

Final content, project data, SEO metadata and asset references.

PROJECT_STRUCTURE.md

Files, folders and asset paths.

IMPLEMENTATION_PLAN.md

Implementation sequence, development rules and validation.

When two documents overlap, use the document responsible for that specific concern.

Do not silently resolve a contradiction by inventing a new rule.

52. Final Architecture Principle

The website should be architected as a small, maintainable content-driven portfolio, not as an overengineered application.

The architecture should make it easy to:

add projects
remove projects
reorder projects
change project content
update SEO
replace media
maintain consistent project pages

without requiring structural changes to the website.

The core relationship is:

Content
   ↓
Data
   ↓
Reusable Components
   ↓
Pages
   ↓
Routes

The architecture should remain simple enough that a future project can be added primarily by adding data and assets.

Prefer explicit structure, stable URLs, reusable templates and a single source of truth over unnecessary abstraction.