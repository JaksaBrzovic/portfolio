# PROJECT_STRUCTURE.md

# Jakša Brzović — Portfolio Project Structure

## 1. Purpose

This document defines the technical file and folder structure of the portfolio website.

It is the source of truth for:

- source-code organization
- route/page organization
- reusable components
- project data
- project media
- public assets
- SEO assets
- naming conventions
- project-specific asset paths
- where Cursor should place new files
- how project content and media are connected

This document does not define:

- visual design
- page composition
- final project copy
- implementation order

Those responsibilities belong to:

- `DESIGN_SYSTEM.md`
- `UI_BLUEPRINT.md`
- `WEBSITE_ARCHITECTURE.md`
- `CONTENT_PLAN.md`
- `IMPLEMENTATION_PLAN.md`

---

# 2. Root Structure

The project should use the following high-level structure:

```text
portfolio/
│
├── public/
│   ├── media/
│   │   ├── projects/
│   │   ├── og/
│   │   └── site/
│   │
│   ├── fonts/
│   └── favicon/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── types/
│   ├── lib/
│   └── styles/
│
├── DESIGN_SYSTEM.md
├── UI_BLUEPRINT.md
├── WEBSITE_ARCHITECTURE.md
├── CONTENT_PLAN.md
├── PROJECT_STRUCTURE.md
└── IMPLEMENTATION_PLAN.md

===================================


The exact framework-specific files may vary.

The structural principles below must remain unchanged.

3. Source Directory

All application source code belongs inside:

src/

Do not place application components directly in the project root.

4. Application / Routes

Routes belong inside:

src/app/

The required route structure is:

src/app/
│
├── page.*
├── projects/
│   ├── page.*
│   └── [slug]/
│       └── page.*
│
├── about/
│   └── page.*
│
└── contact/
    └── page.*

The * represents the extension appropriate to the chosen framework.

5. Route Responsibilities
Homepage
src/app/page.*

Responsible for rendering:

Hero
Featured Projects
Services
About Preview
Contact CTA

It must obtain project information from project data.

It must not contain duplicated project definitions.

Projects Page
src/app/projects/page.*

Responsible for rendering:

Projects page heading
complete project collection
project cards

The project collection comes from the canonical project data.

Project Detail
src/app/projects/[slug]/page.*

Responsible for rendering:

project hero
project information
project content
technical highlights
media
previous/next navigation

The same page implementation must be used for every project.

Do not create separate page files for individual projects.

About
src/app/about/page.*

Responsible for:

biography
career information
professional background
CV link
relevant credentials
Contact
src/app/contact/page.*

Responsible for:

contact introduction
email
professional links
contact CTA
6. Components

Reusable components belong in:

src/components/

Recommended structure:

src/components/
│
├── layout/
│   ├── Navbar.*
│   ├── Footer.*
│   └── AppShell.*
│
├── navigation/
│   ├── BackToTop.*
│   └── PreviousNext.*
│
├── projects/
│   ├── ProjectCard.*
│   ├── ProjectGrid.*
│   ├── ProjectHero.*
│   ├── ProjectMeta.*
│   ├── ProjectSection.*
│   ├── TechnicalHighlights.*
│   ├── ProjectGallery.*
│   ├── ProjectVideo.*
│   └── ProjectNavigation.*
│
├── home/
│   ├── Hero.*
│   ├── FeaturedProjects.*
│   ├── Services.*
│   ├── AboutPreview.*
│   └── ContactCTA.*
│
├── about/
│   ├── CareerTimeline.*
│   ├── QuickFacts.*
│   └── Credentials.*
│
├── contact/
│   └── ContactLinks.*
│
└── ui/
    ├── Button.*
    ├── Link.*
    ├── SectionHeading.*
    ├── Container.*
    └── Media.*

Component names may be adapted to the chosen framework, but the responsibilities should remain separated.

7. Component Principle

Components should be reusable based on responsibility rather than project identity.

Good:

ProjectCard
ProjectHero
ProjectGallery
TechnicalHighlights

Bad:

BearWithMeCard
PhagebornCard
RibarGallery
TondoProjectSection

Project-specific content belongs in data.

8. Project Data

All project data belongs in:

src/data/projects/

Recommended structure:

src/data/projects/
│
├── index.*
├── playstation-mini-games-framework.*
├── educational-games-framework.*
├── bear-with-me.*
├── phageborn.*
├── tab-time-world.*
├── ribar.*
├── kells-convergent.*
├── tondo-jigsaw.*
├── bajkovita-suma.*
├── vr-training-virtual-academy.*
├── 360-vr-virtual-tour.*
├── promotional-qr-ocr-app.*
├── speleon-scape-x-capore.*
└── becarac.*
9. Project Data Principle

Each project should have one canonical data definition.

Conceptually:

Project Data
    │
    ├── Project Card
    ├── Project Page
    ├── Previous / Next
    ├── Featured Projects
    └── SEO Metadata

Do not duplicate project information inside components.

10. Project Data Index

The index file:

src/data/projects/index.*

is responsible for exposing the complete canonical project collection.

Conceptually:

allProjects
featuredProjects
getProjectBySlug(slug)
getPreviousProject(slug)
getNextProject(slug)

The implementation can differ, but these responsibilities must exist somewhere in the data layer.

11. Project Type

Project data should use a shared type/interface.

Recommended location:

src/types/project.*

Conceptual structure:

Project
├── id
├── slug
├── title
├── category
├── featured
├── year
├── duration
├── role
├── team
├── platforms
├── client
├── overview
├── myRole
├── keyContributions
├── technologies
├── challenges
├── technicalHighlights
├── results
├── media
└── seo

Optional fields should remain optional.

Do not populate missing information with fabricated values.

12. Project Media Type

Project media should be represented through structured data rather than hardcoded inside the page.

Conceptually:

media
├── cover
├── hero
├── gallery[]
└── videos[]

This allows projects to contain different numbers of images/videos without changing the project page implementation.

13. Project Media Root

All project media belongs under:

public/media/projects/

Each project receives its own directory.

Example:

public/media/projects/bear-with-me/
14. Complete Project Media Structure

The 14 project directories are:

public/media/projects/
│
├── playstation-mini-games-framework/
├── educational-games-framework/
├── bear-with-me/
├── phageborn/
├── tab-time-world/
├── ribar/
├── kells-convergent/
├── tondo-jigsaw/
├── bajkovita-suma/
├── vr-training-virtual-academy/
├── 360-vr-virtual-tour/
├── promotional-qr-ocr-app/
├── speleon-scape-x-capore/
└── becarac/
15. Project Media Naming

Use predictable filenames.

Recommended:

cover.webp
hero.webp

gallery-01.webp
gallery-02.webp
gallery-03.webp
gallery-04.webp

video-01.mp4
video-02.mp4

Additional formats should only be used when technically necessary.

16. Cover Image

Every project should have:

cover.webp

The cover is used for:

project cards
Projects page
Featured Projects
fallback project visual
potentially Open Graph

The cover should be representative of the project.

17. Hero Image

Projects may have:

hero.webp

The Hero image is used on the project detail page when a dedicated hero asset exists.

If a dedicated hero image does not exist, the implementation may fall back to cover.webp.

Do not create duplicate image files merely because both names exist in the structure.

18. Gallery Images

Additional project visuals belong in:

gallery-01.webp
gallery-02.webp
gallery-03.webp
...

The gallery should only render files that actually exist.

Projects do not need to have the same number of gallery images.

19. Video

Project videos belong in:

video-01.mp4
video-02.mp4

Videos should only be included where useful.

Do not embed external videos directly into project data unless the final implementation explicitly requires an external source.

20. Media Placeholder Workflow

The portfolio should be structured so images can be added later without modifying the page implementation.

For example:

public/media/projects/ribar/
    cover.webp
    hero.webp
    gallery-01.webp
    video-01.mp4

Once the file exists, the project page can automatically display it according to the project's media data.

The developer should not need to modify:

ProjectDetailPage
ProjectGallery
ProjectCard

just because an additional image was added.

21. Current Media Paths
PlayStation Mini-Games Framework
public/media/projects/playstation-mini-games-framework/
├── cover.webp
├── hero.webp
├── gallery-01.webp
├── gallery-02.webp
├── gallery-03.webp
└── video-01.mp4
Educational Games Framework
public/media/projects/educational-games-framework/
├── cover.webp
├── hero.webp
├── gallery-01.webp
└── gallery-02.webp
Bear With Me
public/media/projects/bear-with-me/
├── cover.webp
├── hero.webp
├── gallery-01.webp
├── gallery-02.webp
├── gallery-03.webp
└── video-01.mp4
Phageborn
public/media/projects/phageborn/
├── cover.webp
├── hero.webp
├── gallery-01.webp
├── gallery-02.webp
├── gallery-03.webp
└── video-01.mp4
Tab Time World
public/media/projects/tab-time-world/
├── cover.webp
├── hero.webp
├── gallery-01.webp
├── gallery-02.webp
└── gallery-03.webp
ribAR
public/media/projects/ribar/
├── cover.webp
├── hero.webp
├── gallery-01.webp
├── gallery-02.webp
└── video-01.mp4
Kells Convergent
public/media/projects/kells-convergent/
├── cover.webp
├── hero.webp
└── gallery-01.webp
Tondo Jigsaw
public/media/projects/tondo-jigsaw/
├── cover.webp
├── hero.webp
├── gallery-01.webp
└── gallery-02.webp
Bajkovita Šuma
public/media/projects/bajkovita-suma/
├── cover.webp
├── hero.webp
├── gallery-01.webp
├── gallery-02.webp
└── video-01.mp4
VR Training / Virtual Academy
public/media/projects/vr-training-virtual-academy/
├── cover.webp
├── hero.webp
├── gallery-01.webp
└── gallery-02.webp
360° VR Virtual Tour
public/media/projects/360-vr-virtual-tour/
├── cover.webp
├── hero.webp
└── gallery-01.webp
Promotional QR/OCR Mobile App
public/media/projects/promotional-qr-ocr-app/
├── cover.webp
├── hero.webp
├── gallery-01.webp
├── gallery-02.webp
└── video-01.mp4
SPELEON / Scape X & Capore
public/media/projects/speleon-scape-x-capore/
├── cover.webp
├── hero.webp
├── gallery-01.webp
├── gallery-02.webp
└── video-01.mp4
Bećarac
public/media/projects/becarac/
├── cover.webp
├── hero.webp
├── gallery-01.webp
├── gallery-02.webp
└── video-01.mp4

These are target paths, not a requirement to create empty files.

22. Media File Existence

The application must never assume that every optional media file exists.

For example:

gallery-03.webp

should only be rendered if it exists and is referenced by the project data.

Do not show broken image elements.

23. Site Media

General site-wide media belongs in:

public/media/site/

Possible contents:

public/media/site/
├── profile.webp
├── logo.svg
└── ...

Only add files that are actually required by the final design.

24. Open Graph Assets

Open Graph assets belong in:

public/media/og/

Required default asset:

public/media/og/og-default.webp

Project-specific OG images may reuse project covers unless a dedicated image is required.

25. Favicon

Favicon assets belong in:

public/favicon/

Recommended structure:

public/favicon/
├── favicon.ico
├── favicon.svg
├── apple-touch-icon.png
└── ...

Only generate formats required by the implementation.

26. Fonts

Font files belong in:

public/fonts/

However, if the chosen framework supports optimized local font loading, use the framework's recommended font mechanism instead.

Do not duplicate the same font files in multiple locations.

The exact font selection is defined by DESIGN_SYSTEM.md.

27. Icons

Icons should preferably be implemented through the chosen icon system/library rather than storing dozens of individual image files.

If custom SVG icons are required:

src/components/ui/icons/

or:

public/media/site/icons/

Use one consistent approach.

Do not mix arbitrary icon implementations.

28. Styles

Global styles belong in:

src/styles/

Possible structure:

src/styles/
├── globals.*
├── variables.*
└── ...

The exact implementation depends on the chosen CSS architecture.

Visual tokens must follow DESIGN_SYSTEM.md.

Do not create project-specific styling files for individual projects unless there is a genuinely unique requirement.

29. Utilities

Shared non-visual utility functions belong in:

src/lib/

Possible responsibilities:

src/lib/
├── projects.*
├── media.*
├── navigation.*
├── seo.*
└── ...

Utilities should be introduced only when they simplify repeated logic.

Do not create unnecessary abstraction layers.

30. SEO Utilities

SEO metadata generation may be centralized in:

src/lib/seo.*

or handled through the framework's metadata API.

Responsibilities include:

page title
description
canonical URL
Open Graph
Twitter/X metadata

Project SEO data comes from the canonical project data.

31. Types

Shared TypeScript types belong in:

src/types/

Recommended:

src/types/
├── project.*
├── navigation.*
└── ...

Do not duplicate project interfaces across components.

32. Content vs Components

Use this rule:

Content → src/data/
Structure → src/components/
Routes → src/app/
Assets → public/
Types → src/types/
Utilities → src/lib/
Styles → src/styles/

If a piece of information changes between projects, it belongs in project data.

If the behavior is shared between projects, it belongs in a reusable component.

33. No Project-Specific Components

Do not create:

src/components/projects/BearWithMe/
src/components/projects/Phageborn/
src/components/projects/RibAR/

unless a future project genuinely requires unique functionality that cannot reasonably be represented through the shared project system.

The default implementation must remain data-driven.

34. No Project-Specific Pages

Do not create:

src/app/projects/bear-with-me/page.*
src/app/projects/phageborn/page.*

The only project page is:

src/app/projects/[slug]/page.*
35. Static vs Dynamic Project Data

The project collection is static portfolio content.

It does not require:

a database
CMS
API
backend
runtime content fetching

Project data should be bundled with the application.

36. External Data

External services are not required for the portfolio's basic project content.

Do not introduce:

database-backed projects
CMS
authentication
server-side project editing

unless explicitly requested in a future iteration.

37. Navigation Data

Navigation should be centralized rather than duplicated across Navbar and Footer.

Recommended location:

src/data/navigation.*

Conceptually:

Projects → /projects
About → /about
Contact → /contact
CV → external/document destination

The exact implementation may differ.

38. Site Configuration

Global site configuration may live in:

src/data/site.*

Possible fields:

siteName
author
email
linkedin
github
cvUrl
toptalUrl
siteUrl

Do not hardcode the same values in multiple components.

39. Environment Variables

Environment variables should only be used for values that genuinely need to be environment-specific or secret.

Public portfolio information such as:

project names
project descriptions
social links

does not need to be stored as secrets.

Do not put sensitive credentials into the repository.

40. Public Asset Rules

Files under:

public/

are publicly accessible.

Do not place:

API keys
private credentials
passwords
private client material
unpublished sensitive assets

inside public/.

41. Naming Conventions

Use:

kebab-case

for:

project directories
media filenames
route segments

Examples:

bear-with-me
tab-time-world
vr-training-virtual-academy
gallery-01.webp
video-01.mp4

Use PascalCase for React/component names where applicable:

ProjectCard
ProjectHero
PreviousNext

Use camelCase for variables and functions:

featuredProjects
getProjectBySlug
42. Slug Rules

Slugs must:

be lowercase
use hyphens
contain no spaces
contain no diacritics
remain stable after publication

Examples:

bear-with-me
phageborn
ribar
tondo-jigsaw
becarac
43. Project Slug → Media Directory Relationship

The project slug should directly determine its media directory.

Example:

slug:
bear-with-me

media:
public/media/projects/bear-with-me/

This avoids a second mapping system.

44. Project Slug → Route Relationship

The same slug determines the public route:

slug:
bear-with-me

route:
/projects/bear-with-me

Therefore:

Project Data
    │
    ├── slug
    │
    ├── route
    │
    └── media directory

The slug is the common identifier.

45. Project Asset References

Project data should reference media using stable paths or a predictable media helper.

Example conceptually:

media:
{
    cover: "/media/projects/bear-with-me/cover.webp",
    hero: "/media/projects/bear-with-me/hero.webp",
    gallery: [
        "/media/projects/bear-with-me/gallery-01.webp",
        "/media/projects/bear-with-me/gallery-02.webp"
    ]
}

Do not construct arbitrary paths throughout UI components.

46. Missing Media

If a project has no:

hero

the ProjectHero may fall back to:

cover

If a project has no gallery:

gallery = []

The page should simply omit the gallery section.

47. Video Handling

Videos should not automatically autoplay with sound.

The exact behavior is defined in UI_BLUEPRINT.md and DESIGN_SYSTEM.md.

The project data should only describe which videos exist.

The component controls presentation behavior.

48. Responsive Assets

Where responsive image variants are required, they should follow a predictable naming scheme.

For example:

cover.webp
cover-mobile.webp

Only introduce mobile-specific files when the same source asset cannot adequately serve both contexts.

Do not create duplicate assets unnecessarily.

49. Image Optimization

Prefer modern compressed formats such as:

.webp

for raster images.

Use:

.svg

for vector graphics where appropriate.

Use:

.mp4

for portfolio video unless another format is specifically required.

50. Large Media

Large video files should be optimized before being placed in the project.

Do not commit unnecessarily huge source files when an optimized presentation version is sufficient.

The portfolio should prioritize:

visual quality
loading performance
responsive behavior
51. Asset Replacement

Replacing a project image should normally require only:

Replace the file.
Keep the same filename.

Example:

public/media/projects/phageborn/cover.webp

Replace the image without changing component code.

52. Adding a New Project

A future project should require:

1. Add project data.
2. Add project media directory.
3. Add media files.
4. Add project to the canonical project index.
5. Define slug.
6. Define featured status.

No new page component should be required.

No new project-specific route should be required.

53. Removing a Project

To remove a project:

1. Remove it from project data/index.
2. Remove it from Featured Projects if applicable.
3. Remove or redirect the public route if already published.
4. Remove obsolete media.

Previous/Next navigation must update automatically.

54. Project Data Validation

The implementation should validate required project fields during development.

At minimum:

id
slug
title
category
featured
overview
role
platforms

Optional content should not cause runtime errors.

55. Duplicate Content Prevention

Do not duplicate:

project titles
project descriptions
technology lists
project routes
project media paths
social links
contact information

Use shared data sources.

56. Architecture Summary

The intended dependency flow is:

CONTENT_PLAN.md
        ↓
Project Data
        ↓
Reusable Components
        ↓
Routes / Pages
        ↓
Public Media

More concretely:

src/data/projects/
        ↓
src/types/project.*
        ↓
src/components/projects/
        ↓
src/app/projects/[slug]/
        ↓
/public/media/projects/{slug}/
57. Final Structure

The final conceptual structure is:

portfolio/
│
├── public/
│   ├── media/
│   │   ├── projects/
│   │   │   ├── playstation-mini-games-framework/
│   │   │   ├── educational-games-framework/
│   │   │   ├── bear-with-me/
│   │   │   ├── phageborn/
│   │   │   ├── tab-time-world/
│   │   │   ├── ribar/
│   │   │   ├── kells-convergent/
│   │   │   ├── tondo-jigsaw/
│   │   │   ├── bajkovita-suma/
│   │   │   ├── vr-training-virtual-academy/
│   │   │   ├── 360-vr-virtual-tour/
│   │   │   ├── promotional-qr-ocr-app/
│   │   │   ├── speleon-scape-x-capore/
│   │   │   └── becarac/
│   │   │
│   │   ├── og/
│   │   │   └── og-default.webp
│   │   │
│   │   └── site/
│   │
│   ├── fonts/
│   └── favicon/
│
├── src/
│   ├── app/
│   │   ├── page.*
│   │   ├── projects/
│   │   │   ├── page.*
│   │   │   └── [slug]/
│   │   │       └── page.*
│   │   ├── about/
│   │   │   └── page.*
│   │   └── contact/
│   │       └── page.*
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── projects/
│   │   ├── home/
│   │   ├── about/
│   │   ├── contact/
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── projects/
│   │   ├── navigation.*
│   │   └── site.*
│   │
│   ├── types/
│   │   └── project.*
│   │
│   ├── lib/
│   │   ├── projects.*
│   │   ├── media.*
│   │   ├── navigation.*
│   │   └── seo.*
│   │
│   └── styles/
│       ├── globals.*
│       └── variables.*
│
├── DESIGN_SYSTEM.md
├── UI_BLUEPRINT.md
├── WEBSITE_ARCHITECTURE.md
├── CONTENT_PLAN.md
├── PROJECT_STRUCTURE.md
└── IMPLEMENTATION_PLAN.md
58. Final Structure Principle

The project should remain a small, maintainable portfolio application, not an overengineered content-management system.

The most important architectural rule is:

Project-specific information belongs in data; project-specific behavior belongs in reusable components only when it is genuinely shared.

Adding a project should primarily mean:

Add data
+
Add media

not:

Create a new page
+
Create new components
+
Create new routing logic
+
Duplicate existing code

The structure should make the portfolio easy to maintain and easy to extend without sacrificing the consistency of the design.