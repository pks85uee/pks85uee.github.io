# Website Redesign - Quick Start Guide

## ✅ What's New

Your personal website has been **completely redesigned** with a modern, minimal, professional design system inspired by Stripe, Linear, Notion, and Vercel.

---

## 🎨 Design Highlights

### Modern Color System
- **Primary Accent**: Indigo (#4F46E5)
- **Neutral Palette**: White, light grays
- **Professional**: Clean, minimal aesthetic

### Typography
- **Font**: Inter (modern, professional)
- **Sizes**: H1 48px | H2 32px | H3 20px | Body 16px
- **Readability**: Generous line heights (1.6-1.8)

### Responsive Design
- **Desktop**: Full 3-column layouts, 64px spacing
- **Tablet**: 2-column layouts, 48px spacing
- **Mobile**: Single column, 32px spacing

### Components
- **Navigation**: Sticky, minimal top navigation
- **Cards**: Subtle borders, smooth hover effects
- **Forms**: Clean inputs with focus states
- **Blog**: Typography-focused, high readability

---

## 🚀 Getting Started

### View the Website Locally
```bash
# Navigate to your project folder
cd /Users/puneetsingh/puneetsingh.work_v0.3

# Start a local server
python3 -m http.server 8080

# Open browser to http://localhost:8080
```

### Deploy to Netlify
```bash
1. Go to netlify.com
2. Click "Add new site"
3. Choose "Deploy manually"
4. Drag and drop your entire folder
5. Done! Your site is live
```

### Deploy to GitHub Pages
```bash
1. Create a GitHub repository
2. Upload all files (index.html, style.css, content/, etc.)
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Select "main" branch and "/" root
6. Done! Your site is live at yourusername.github.io
```

---

## ✏️ How to Update Content

### Edit About Me
1. Open `content/about.txt`
2. Edit your bio and skills
3. Changes appear on `index.html`

### Edit Projects
1. Open `projects.html`
2. Find the project card (search for `<!-- PROJECT 1 -->`)
3. Edit project name, description, and impact
4. Add/remove project cards as needed

### Edit Blog
1. Open `blog.html`
2. Find blog entries (search for `<!-- BLOG ENTRY 1 -->`)
3. Edit title, date, and summary
4. Add new entries (copy a card and update)

### Edit Contact
1. Open `contact.html`
2. Update email, LinkedIn, and Twitter links
3. Connect the form using Formspree or Netlify Forms

---

## 🎨 Customize Design

### Change Primary Color
1. Open `style.css`
2. Find line ~20: `--color-primary: #4F46E5;`
3. Replace `#4F46E5` with your color
4. Entire site updates automatically!

**Popular color options:**
- Deep Blue: `#1E3A8A`
- Purple: `#7C3AED`
- Red: `#DC2626`
- Green: `#059669`

### Change Logo/Brand Name
1. Open all HTML files (index.html, projects.html, etc.)
2. Find `<h1 class="nav-logo">Puneet Singh</h1>`
3. Replace "Puneet Singh" with your name
4. Update in all 4 files

### Change Spacing
1. Open `style.css`
2. Find spacing variables (~lines 35-45)
3. Adjust the values (8px base unit)
4. Changes apply to entire site

---

## 📱 Responsive Testing

### Desktop (1024px+)
- Full 3-column project grid
- Sidebar-ready layouts
- 64px section padding

### Tablet (768px-1023px)
- 2-column grids
- Adjusted spacing (48px)
- Optimized navigation

### Mobile (480px-767px)
- Single column layouts
- 32px section padding
- Touch-optimized buttons

### Test Locally
```bash
# In Chrome DevTools:
1. Press F12 to open DevTools
2. Click the device icon (top-left)
3. Toggle between device sizes
4. Test all breakpoints
```

---

## 🔗 Connect Form

### Option 1: Formspree (Recommended)
```html
1. Go to https://formspree.io
2. Sign up with email
3. Create a new form
4. Copy your form ID
5. In contact.html, find: action="https://formspree.io/f/YOUR_FORM_ID"
6. Replace YOUR_FORM_ID with your ID
7. Done!
```

### Option 2: Netlify Forms
```html
1. Deploy to Netlify
2. In contact.html, add: netlify
3. Replace form opening with:
   <form class="contact-form" name="contact" method="POST" netlify>
4. Done! Netlify auto-connects
```

### Option 3: EmailJS
```html
1. Go to https://www.emailjs.com
2. Sign up free
3. Follow their setup guide
4. Add their script to contact.html
5. Configure service and template
```

---

## 📚 Documentation Files

- **DESIGN_SYSTEM.md** - Detailed design specifications
- **DESIGN_UPDATE_SUMMARY.txt** - Overview of changes
- **This file** - Quick start guide

---

## 🎯 Next Steps

1. ✅ Update your name/brand in all HTML files
2. ✅ Edit content in projects.html and blog.html
3. ✅ Update contact information
4. ✅ Connect the contact form
5. ✅ Deploy to Netlify or GitHub Pages
6. ✅ Share your new website!

---

## 💡 Tips for Success

- **Test on mobile**: Use Chrome DevTools to test responsive design
- **Update regularly**: Keep blog and projects current
- **Keep it simple**: Minimal design means less is more
- **Consistency**: Stick to the spacing and color system
- **Performance**: Don't add heavy scripts or animations

---

## 🆘 Troubleshooting

### Website looks broken locally
- Make sure you're in the correct folder
- Try a different local server: `python3 -m http.server 8000`
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

### Images not showing
- Images go in a `/images` folder
- Reference them: `<img src="images/my-photo.jpg">`
- Use relative paths, not absolute paths

### Styling looks wrong
- Check that `style.css` is in the same folder as HTML files
- Verify `<link rel="stylesheet" href="style.css">` is in HTML head
- Clear browser cache and reload

### Form not sending
- Make sure you've connected it to Formspree or similar
- Test the form action URL in browser address bar
- Check email spam folder for confirmations

---

## ✨ You're All Set!

Your website is ready to showcase your work and attract opportunities. 

**Remember:** This is a starting point. Feel free to:
- Add more projects
- Write more blog posts
- Customize colors and fonts
- Add images and videos
- Expand contact options

Good luck! 🚀
