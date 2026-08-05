# Temporarily Disabled Blocks

Blocks below are commented out in place (not deleted), each wrapped in matching
`{/* TEMP-HIDDEN:<id> start */}` / `{/* TEMP-HIDDEN:<id> end */}` markers.
To restore: search the codebase for the `<id>`, uncomment the block (and any
paired import noted below), then delete that entry from this file.

## heros-slide-captions
- File: `src/components/HomePage/Heros.tsx`
- What: the title/description caption overlay (`h2`/`p`, e.g. "Factory Direct
  Manufacturing", "From Sample to Mass Production") shown at the bottom of
  each carousel slide.
- Also commented: none (no orphaned imports — `slide.title` is still used via
  `alt={slide.title}` on the slide image).
- Date: 2026-08-05
- Why: temp edit, hiding slide captions on homepage hero carousel.

## home-certification
- File: `src/pages/Home.tsx`
- What: the "our factory certification" block (`<Certification />`) rendered
  on the homepage, between the hero carousel and the Service section.
- Also commented: `import Certification from '../components/ContactPage/Certification'`
  (component's own file `src/components/ContactPage/Certification.tsx` is
  untouched — still used elsewhere in `src/pages/Factory.tsx` and
  `src/pages/About.tsx`).
- Date: 2026-08-05
- Why: temp edit, hiding factory certification section on homepage.

## home-service
- File: `src/pages/Home.tsx`
- What: the "Our Service" block (`<Service />`), rendered between the
  certification section and `<ContactBadge />` on the homepage.
- Also commented: `import Service from '../components/HomePage/Service'`
  (component's own file `src/components/HomePage/Service.tsx` is untouched —
  it was only used here, no other pages reference it).
- Date: 2026-08-05
- Why: temp edit, hiding "Our Service" section on homepage.

## about-certification
- File: `src/pages/About.tsx`
- What: the "our factory certification" block (`<Certification />`), rendered
  after `<Testimonials />` on the About page.
- Also commented: `import Certification from '../components/ContactPage/Certification'`
  (component's own file `src/components/ContactPage/Certification.tsx` is
  untouched — still used in `src/pages/Factory.tsx`; no longer used in
  `src/pages/Home.tsx` either, see `home-certification` entry above).
- Date: 2026-08-05
- Why: temp edit, hiding factory certification section on About page.

## navbar-factory-desktop
- File: `src/components/Navbar.tsx`
- What: the "OUR FACTORY" `<li>` nav link (`href='/factory'`) in the desktop
  nav `<ul>`.
- Also commented: none (plain `<a>` link, no import involved).
- Note: the `/factory` route/page itself (`src/pages/Factory.tsx`) is
  untouched — only the nav link is hidden, page still reachable by direct URL.
- Date: 2026-08-05
- Why: temp edit, hiding "Our Factory" link from desktop navbar.

## navbar-factory-mobile
- File: `src/components/Navbar.tsx`
- What: the "OUR FACTORY" `<li>` nav link (`href='/factory'`) in the mobile
  menu `<ul>`.
- Also commented: none (plain `<a>` link, no import involved).
- Note: the `/factory` route/page itself (`src/pages/Factory.tsx`) is
  untouched — only the nav link is hidden, page still reachable by direct URL.
- Date: 2026-08-05
- Why: temp edit, hiding "Our Factory" link from mobile navbar menu.

## footer-oem-custom-made
- File: `src/components/HomePage/Footer.tsx`
- What: the "OEM Custom Made" `<li>` link (`href='/customize'`) in the
  footer's Product column.
- Also commented: none (plain `<a>` link, no import involved).
- Note: the `/customize` route/page itself is untouched — only this footer
  link is hidden.
- Date: 2026-08-05
- Why: temp edit, hiding "OEM Custom Made" link from footer.
