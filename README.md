# J Ngoma Fridge Repair — Final React Website

One-page React/Vite business website based on the approved Figma direction.

## Business information
- Business: J Ngoma Fridge Repair
- Contact: Ngoma Juscard
- Phone: 065 536 8362
- Email: juscardngoma44@gmail.com
- Hours: 8:00 AM–6:00 PM
- Service model: Mobile/on-site repairs; travels to customers
- Repairs: fridges/freezers, washing machines, microwaves, kettles and other household electrical appliances

## Motion / interaction
- Animated hero entry
- Sticky navigation
- Smooth section scrolling
- Scroll reveal animations
- Staggered service cards
- Repair image hover zoom
- Animated service-area pills
- Working call and email links
- Responsive mobile layout

## SEO preparation
The project includes:
- page title + description
- Open Graph metadata
- robots.txt
- sitemap.xml placeholder

Before final deployment, replace `YOUR-DOMAIN.co.za` in:
- `public/robots.txt`
- `public/sitemap.xml`

with the final custom domain.

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

Netlify-safe build command is already set to:

```json
"build": "node ./node_modules/vite/bin/vite.js build"
```

## Netlify
- Base directory: blank
- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: blank
