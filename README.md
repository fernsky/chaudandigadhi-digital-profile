# Chaudandigadhi Municipality Digital Profile

A premium, ultra-fast, SEO-optimized static website showcasing the comprehensive digital profile of Chaudandigadhi Municipality in both Nepali and English.

## 🚀 Tech Stack

- **Framework**: Astro 5.16.6
- **Styling**: Tailwind CSS v4
- **Charts**: Chart.js 4.5.1
- **Maps**: Leaflet 1.9.4
- **Package Manager**: pnpm
- **Deployment**: Cloudflare Pages (planned)

## 📁 Project Structure

```
src/
├── components/
│   ├── navigation/          # Header, language switcher, mobile menu
│   ├── seo/                 # SEO components with structured data
│   ├── charts/              # Organized by chapter and topic
│   │   ├── BarChart.astro
│   │   ├── PieChart.astro
│   │   ├── chapter-3/       # Demographics charts
│   │   ├── chapter-4/       # Economy charts
│   │   └── ...
│   ├── maps/                # Organized by chapter
│   │   ├── chapter-2/       # Location, topography
│   │   ├── chapter-6/       # Forest, watershed
│   │   └── chapter-7/       # Roads, utilities
│   └── data-tables/         # Responsive table components
├── data/
│   ├── chapters/            # Deeply nested by chapter and topic
│   │   ├── chapter-1/
│   │   │   └── introduction.json
│   │   ├── chapter-3/
│   │   │   └── demographics.json
│   │   └── ...
│   ├── statistics/          # Reusable statistics
│   ├── maps/                # GeoJSON files by chapter
│   └── annexures/           # Annexure data
├── i18n/
│   ├── ne.json              # Nepali translations
│   ├── en.json              # English translations
│   └── index.ts             # i18n utilities
├── layouts/
│   └── BaseLayout.astro     # Base layout with SEO
├── pages/
│   └── [lang]/              # Dynamic language routing
│       ├── index.astro      # Homepage
│       ├── chapter-1.astro  # Chapter pages
│       └── ...
└── styles/
    └── global.css           # Design system with Tailwind v4
```

## 🎨 Design System

### Color Palette

- **Primary (Blue)**: Government/trust theme
- **Secondary (Green)**: Nature/sustainability  
- **Accent (Gold)**: Cultural richness

### Typography

- **Nepali**: Noto Sans Devanagari (Google Fonts)
- **English**: Inter (Google Fonts)

### Features

- Glassmorphism effects
- Smooth animations
- Gradient backgrounds
- Responsive cards with hover effects
- Mobile-first design

## 🌐 Internationalization

The site supports both Nepali and English:

- **Nepali**: `/ne/` (default)
- **English**: `/en/`

Language switching is seamless with automatic URL translation.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:4321/ne/` or `http://localhost:4321/en/`

### Build for Production

```bash
# Build static site
pnpm build

# Preview production build
pnpm preview
```

## 📊 Chapters

1. **परिच्छेद १: परिचय** (Introduction)
2. **परिच्छेद २: नगरपालिकाको चिनारी** (Municipal Identity)
3. **परिच्छेद ३: पारिवारिक तथा जनसांख्यिक** (Demographics)
4. **परिच्छेद ४: आर्थिक अवस्था** (Economic Status)
5. **परिच्छेद ५: सामाजिक अवस्था** (Social Status)
6. **परिच्छेद ६: वन तथा वातावरण** (Forest & Environment)
7. **परिच्छेद ७: भौतिक विकास** (Physical Infrastructure)
8. **परिच्छेद ८: संस्थागत तथा सुशासन** (Governance)

## 📈 Performance Targets

- ✅ Lighthouse Score: 100/100
- ✅ First Contentful Paint: <1s
- ✅ Largest Contentful Paint: <2.5s
- ✅ Total Blocking Time: <200ms
- ✅ Zero JavaScript by default (Astro islands)

## 🗺️ Features

### Implemented ✅

- Bilingual routing (Nepali/English)
- Responsive navigation with mobile menu
- SEO optimization with structured data
- Homepage with hero section and stats
- Chapter 1 (Introduction) page
- Chapter 3 (Demographics) with charts
- Bar and Pie chart components
- Language switcher
- Chapter navigation (prev/next)

### Pending 📝

- Chapters 2, 4, 5, 6, 7, 8
- Map components (Leaflet integration)
- Data tables (responsive, sortable)
- Annexures page
- Table of contents sidebar
- Search functionality

## 🛠️ Development

### Directory Organization

All components, data, and maps are organized by **chapter and topic** for easy maintenance:

```
components/charts/chapter-3/demographics/
components/charts/chapter-4/economy/
components/maps/chapter-2/location/
data/chapters/chapter-3/demographics.json
```

This nested structure makes it easy to:

- Find related components
- Manage chapter-specific data
- Scale to multiple charts per topic
- Maintain consistency

### Adding New Content

1. **Create data file**: `src/data/chapters/chapter-X/topic.json`
2. **Create page**: `src/pages/[lang]/chapter-X.astro`
3. **Add translations**: Update `src/i18n/ne.json` and `en.json`
4. **Create components**: Add charts/maps in respective chapter folders

## 📝 License

© 2024 Chaudandigadhi Municipality. All rights reserved.

## 🤝 Contributing

This is a municipal government project. For inquiries, please contact the municipality office.
