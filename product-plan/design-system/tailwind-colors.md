# Tailwind Color Configuration

## Color Choices

- **Primary:** `rose` — Used for buttons, links, key accents, and the brand logo
- **Secondary:** `pink` — Used for tags, highlights, and secondary elements
- **Neutral:** `stone` — Used for backgrounds, text, borders, and all neutral UI

## Usage Examples

**Primary button:**
```
bg-rose-600 hover:bg-rose-700 text-white
```

**Primary CTA (rounded, full):**
```
bg-rose-500 hover:bg-rose-600 text-white rounded-full
```

**Secondary badge:**
```
bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300
```

**Neutral text:**
```
text-stone-600 dark:text-stone-400
```

**Neutral backgrounds:**
```
bg-stone-50 dark:bg-stone-900        /* Page background */
bg-white dark:bg-stone-950           /* Card/panel background */
bg-stone-100 dark:bg-stone-800       /* Subtle fill */
```

**Borders:**
```
border-stone-200 dark:border-stone-800
```

**Active/focused state:**
```
ring-2 ring-rose-400 dark:ring-rose-500
```

## Brand Logo

The Folio wordmark uses:
```
font-family: 'Playfair Display', serif;
font-style: italic;
font-weight: 600;
color: rose-600 (light) / rose-400 (dark)
```

## Notes

- All components support both light and dark mode via `dark:` variants
- The stone palette provides warm grays that complement the rose/pink brand colors
- Use `rose-500` / `rose-600` for interactive elements, never grey them out unless truly disabled
