# Personal Website - Quick Start Guide

## 🎉 Welcome!

Your personal website is ready to use. It's built with **HTML + CSS only** – no JavaScript, no backend, no complications!

---

## 📁 File Structure

```
/
├── index.html          ← About Me page
├── projects.html       ← Projects showcase
├── blog.html          ← Blog posts
├── contact.html       ← Contact information & form
├── style.css          ← All styling (colors, fonts, layout)
└── /content           ← Your editable content files
    ├── about.txt      ← Edit your About Me section
    ├── projects.txt   ← Add/edit your projects
    ├── blogs.txt      ← Add/edit your blog posts
    └── contact.txt    ← Update contact info
```

---

## 🚀 How to Get Started

### 1️⃣ **Customize Your Content** (No coding needed!)

Open each file in the `content/` folder and edit:

- **`content/about.txt`** → Update your bio, skills, career highlights
- **`content/projects.txt`** → Add your projects with descriptions
- **`content/blogs.txt`** → Add your blog posts (newest first!)
- **`content/contact.txt`** → Add your email, LinkedIn, Twitter

Each file has clear instructions for editing.

### 2️⃣ **Customize Design** (Easy!)

Edit `style.css` and look for the **COLOR VARIABLES** section at the top:

```css
:root {
    --color-bg-primary: #ffffff;
    --color-text-primary: #1a1a1a;
    --color-accent: #0066cc;
    /* ... more colors ... */
}
```

Change colors, fonts, or spacing easily!

### 3️⃣ **Test Locally** (Optional)

Open `index.html` directly in your browser to preview the site:
- Click "File" → "Open" in your browser
- Select `index.html`
- Navigate through pages using the menu

Or use a local server (Python example):
```bash
cd /Users/puneetsingh/puneetsingh.work_v0.3
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

### 4️⃣ **Deploy to Netlify** (FREE!)

1. **Sign up** at [netlify.com](https://netlify.com)
2. **Drag & drop** your entire website folder
3. **Done!** Your site is live

Or connect your GitHub repo for automatic updates.

### 5️⃣ **Deploy to GitHub Pages** (FREE!)

1. Create a GitHub repository
2. Push your files (all HTML, CSS, and content folder)
3. Go to **Settings** → **Pages**
4. Select `main` branch, save
5. Your site is live at `yourusername.github.io/repo-name`

---

## ✏️ Editing Guide

### Updating "About Me"
1. Open `content/about.txt`
2. Replace placeholder text with your bio
3. Keep the section headers
4. Save the file
5. Refresh your browser – changes appear instantly!

### Adding a New Project
1. Open `content/projects.txt`
2. Copy the PROJECT template
3. Replace with your project details
4. Save and refresh

### Adding a Blog Post
1. Open `content/blogs.txt`
2. Add new entries at the TOP (reverse chronological)
3. Use format: Title, Date, Summary (2-3 sentences)
4. Save and refresh

### Changing Colors
1. Open `style.css`
2. Find "COLOR VARIABLES" at the top
3. Change color codes (e.g., `#0066cc` to `#ff6600`)
4. Save and refresh

---

## 🎨 Color Palette (Ready to Customize)

Current neutral professional colors:
- **Background**: White (`#ffffff`)
- **Text**: Dark (`#1a1a1a`)
- **Accent**: Blue (`#0066cc`)
- **Secondary**: Light gray (`#f8f9fa`)

Try these alternatives:
- **Modern Green**: `#00b894` (accent)
- **Professional Purple**: `#6c5ce7` (accent)
- **Warm Orange**: `#e17055` (accent)

---

## 🔧 Contact Form Setup (Optional)

The contact form is functional but needs setup for email submissions:

### Option 1: Formspree (Easiest)
1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a form
3. Copy your form ID
4. In `contact.html`, find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
5. Replace `YOUR_FORM_ID` with your actual ID
6. Save and test!

### Option 2: Netlify Forms (If hosting on Netlify)
- Already integrated! Just works automatically.

---

## 📱 Responsive & Mobile-Friendly

Your website automatically adapts to:
- **Desktop** (1200px+)
- **Tablet** (768px - 1024px)
- **Mobile** (480px - 768px)
- **Small phones** (<480px)

No action needed – it's built in!

---

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Updated `content/about.txt` with your bio
- [ ] Added your projects to `content/projects.txt`
- [ ] Added blog posts to `content/blogs.txt`
- [ ] Updated contact info in `content/contact.txt`
- [ ] Tested all pages locally (click all navigation links)
- [ ] Customized colors in `style.css` (optional)
- [ ] Set up contact form (optional)
- [ ] Deployed to Netlify or GitHub Pages

---

## 🆘 Troubleshooting

### Website looks broken?
- Make sure `style.css` is in the same folder as HTML files
- Check that file names match exactly (case-sensitive on some systems)
- Clear browser cache: `Ctrl+Shift+Delete` or `Cmd+Shift+Delete`

### Changes not appearing?
- Save the file
- Hard refresh browser: `Ctrl+F5` or `Cmd+Shift+R`
- Check file name spelling

### Contact form not working?
- Set up Formspree or Netlify (see Contact Form Setup above)
- Test in a new browser tab

### Images not showing?
- This theme doesn't include images by default
- To add images, place them in a `/images` folder and update HTML with:
  ```html
  <img src="images/photo.jpg" alt="Description">
  ```

---

## 📚 Learn More

- **HTML & CSS Basics**: [MDN Web Docs](https://developer.mozilla.org)
- **Netlify Deployment**: [Netlify Docs](https://docs.netlify.com)
- **GitHub Pages**: [GitHub Pages Docs](https://pages.github.com)
- **Web Design Tips**: [Web.dev](https://web.dev)

---

## 🎯 Key Features

✅ **No JavaScript** – Plain HTML + CSS  
✅ **No Backend** – Runs anywhere  
✅ **Mobile Responsive** – Works on all devices  
✅ **Easy to Maintain** – Clear content/layout separation  
✅ **Professional Design** – Clean, modern aesthetic  
✅ **Sticky Navigation** – Always accessible  
✅ **SEO Friendly** – Meta tags included  
✅ **Free Hosting** – Deploy to Netlify or GitHub Pages  

---

## 🚀 You're All Set!

Your personal website is ready. Start by editing the content files, then deploy it to the world!

**Questions?** Check the comments in each HTML file for detailed guidance.

Happy building! 🎉
