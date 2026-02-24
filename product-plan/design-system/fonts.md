# Typography Configuration

## Google Fonts Import

Add to your HTML `<head>` or CSS:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Or via CSS `@import`:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
```

## Font Usage

| Role | Font | Weights | Notes |
|------|------|---------|-------|
| Headings & brand | Playfair Display | 400, 600, 700 | Also used italic for the logo and hero |
| Body text | DM Sans | 300, 400, 500, 600 | Base font for all UI text |
| Code / monospace | IBM Plex Mono | 400, 500 | Labels, order numbers, tracking info |

## Tailwind Configuration

If using Tailwind, add to your CSS:

```css
@theme {
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'DM Sans', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', 'Courier New', monospace;
}
```

Then use in components:
```
font-serif   → Playfair Display (headings, logo)
font-sans    → DM Sans (body, default)
font-mono    → IBM Plex Mono (code, labels)
```

## Important Usage Notes

- The Folio wordmark is always `font-serif` (Playfair Display), italic, weight 600
- Page/section headings use `font-serif` for elegance
- All body copy and form labels use `font-sans` (DM Sans)
- Order numbers, page counts, and technical labels use `font-mono`
