# Color & Design Reference Card

## Color Palette

### Primary Colors
```css
--color-primary: #4F46E5          /* Indigo - Main accent */
--color-primary-light: #6366F1    /* Hover state */
--color-primary-dark: #4338CA     /* Active state */
```

### Backgrounds
```css
--color-bg-primary: #FFFFFF       /* Main background */
--color-bg-secondary: #F9FAFB     /* Light sections */
--color-bg-tertiary: #F3F4F6      /* Lighter sections */
```

### Text
```css
--color-text-primary: #111827     /* Main text */
--color-text-secondary: #6B7280   /* Secondary text */
--color-text-tertiary: #9CA3AF    /* Light text */
```

### Borders & Shadows
```css
--color-border: #E5E7EB           /* Main border */
--color-border-light: #F3F4F6     /* Light border */
```

---

## Typography

### Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Sizes
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1      | 48px | 700    | 1.2         |
| H2      | 32px | 700    | 1.25        |
| H3      | 20px | 600    | 1.3         |
| H4      | 18px | 600    | 1.3         |
| Body    | 16px | 400    | 1.6-1.8     |
| Small   | 14px | 400    | 1.6         |
| Label   | 14px | 600    | 1.6         |

---

## Spacing Scale (8px base)

```
2px   → --spacing-2
4px   → --spacing-4
8px   → --spacing-8
12px  → --spacing-12
16px  → --spacing-16
24px  → --spacing-24
32px  → --spacing-32
48px  → --spacing-48
64px  → --spacing-64
```

### Common Spacing
- **Section padding**: 64px top/bottom (desktop)
- **Container padding**: 32px left/right
- **Card padding**: 32px (desktop), 24px (tablet), 16px (mobile)
- **Gap between items**: 24px (grid), 16px (mobile)

---

## Breakpoints

```css
@media (max-width: 1024px) { ... }  /* Tablet Large */
@media (max-width: 768px) { ... }   /* Tablet */
@media (max-width: 480px) { ... }   /* Mobile */
```

---

## Component Reference

### Cards
- **Background**: bg-primary or bg-secondary
- **Border**: 1px solid border-light
- **Padding**: 32px (desktop), 24px (tablet), 16px (mobile)
- **Radius**: 8px
- **Hover**: Box shadow + border color change
- **Transition**: 0.3s ease

### Buttons
- **Primary**: bg-primary text-white
- **Padding**: 16px 24px
- **Radius**: 6px
- **Hover**: bg-primary-dark + shadow
- **Transition**: 0.2s ease

### Forms
- **Input bg**: bg-primary
- **Input border**: 1px solid border
- **Focus border**: primary color
- **Focus shadow**: rgba(primary, 0.1)
- **Label weight**: 600
- **Label color**: text-primary

### Links
- **Color**: primary
- **Hover**: primary-dark
- **Underline**: none (by default)
- **Transition**: 0.2s ease

### Badges
- **Background**: primary
- **Color**: white
- **Padding**: 8px 12px
- **Radius**: 6px
- **Font size**: 12px
- **Font weight**: 600

---

## Responsive Strategy

### Desktop-First
1. Start with desktop design (1024px+)
2. Use media queries for smaller screens
3. Progressive enhancement approach

### Mobile Optimization
- Reduce spacing on smaller screens
- Single column layouts on mobile
- Touch-friendly button sizes (44px minimum)
- Readable font sizes (16px minimum body)

---

## Hover & Interaction States

### Links
- **Default**: primary color
- **Hover**: primary-dark color, opacity 0.8
- **Active**: primary-dark color

### Cards
- **Default**: bg-secondary, border-light
- **Hover**: border-primary, box-shadow

### Buttons
- **Default**: primary background
- **Hover**: primary-dark background, shadow
- **Active**: primary-dark, no shadow

### Form Inputs
- **Default**: border color
- **Focus**: primary border, primary shadow
- **Error**: red border (if applicable)

---

## Best Practices

### Colors
- ✓ Use primary color for accents only
- ✓ Stick to neutral palette for backgrounds
- ✓ Maintain good contrast ratios (WCAG AA minimum)
- ✓ Don't use more than 3 main colors

### Typography
- ✓ Use Inter for all text
- ✓ Maintain consistent font weights
- ✓ Keep line heights generous (1.6+)
- ✓ Use font size hierarchy consistently

### Spacing
- ✓ Always use the spacing scale
- ✓ Avoid random spacing values
- ✓ Maintain consistent gaps between items
- ✓ Use multiples of 8px

### Responsiveness
- ✓ Test on all breakpoints
- ✓ Use mobile-first or desktop-first consistently
- ✓ Ensure touch targets are 44px+ on mobile
- ✓ Test on actual devices

---

## Customization Checklist

To rebrand the entire site:

1. **Change Primary Color**
   - Edit `--color-primary: #4F46E5` to your color
   - All accents update automatically

2. **Update Backgrounds** (optional)
   - Edit `--color-bg-*` variables
   - Maintain contrast with text

3. **Change Typography** (optional)
   - Update font sizes in TYPOGRAPHY section
   - Adjust line heights if needed

4. **Modify Spacing** (optional)
   - Adjust `--spacing-*` variables
   - Test on all breakpoints

5. **Update Text Colors** (optional)
   - Keep sufficient contrast
   - Use only the provided palette

---

## Quick Color Swatches

### Available Colors
```
Indigo:      #4F46E5
Deep Blue:   #1E3A8A
Purple:      #7C3AED
Red:         #DC2626
Green:       #059669
Teal:        #0891B2
Orange:      #EA580C
```

Replace `#4F46E5` with any color above for instant rebranding!

---

## File Locations

- **Colors**: style.css lines 15-40
- **Typography**: style.css lines 70-130
- **Navigation**: style.css lines 135-180
- **Cards**: style.css lines 310-450
- **Responsive**: style.css lines 900-1000

---

## Common Customizations

### Make Design More Bold
- Increase spacing (64px → 80px)
- Increase font sizes (H1 48px → 56px)
- Increase border radius (8px → 12px)
- Increase shadow size (md → lg)

### Make Design More Minimal
- Decrease spacing (64px → 48px)
- Decrease font sizes (body 16px → 15px)
- Remove shadows where possible
- Use fewer colors

### Add More Visual Interest
- Add subtle gradients to headers
- Increase hover animations
- Add background patterns
- Use additional accent colors

---

## Need Help?

1. Read `DESIGN_SYSTEM.md` for full specifications
2. Read `QUICK_START.md` for usage guide
3. Check `DESIGN_UPDATE_SUMMARY.txt` for overview
4. All CSS is well-commented with sections

---

**Remember**: Every change should maintain the professional, minimal aesthetic!
