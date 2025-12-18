# Website Maintenance & Content Update Guide

## 📖 How to Update Your Website Content

This guide explains how to update your website WITHOUT touching any code. Everything is organized for easy maintenance.

---

## 🎯 Understanding Your Website Structure

Your website has **4 main pages**, each controlled by simple text files:

| Page | HTML File | Content File | What It Contains |
|------|-----------|--------------|------------------|
| Home | `index.html` | `content/about.txt` | Your bio, skills, career highlights |
| Projects | `projects.html` | `content/projects.txt` | Your project showcase |
| Blog | `blog.html` | `content/blogs.txt` | Your blog posts |
| Contact | `contact.html` | `content/contact.txt` | Contact info & form setup |

---

## ✏️ Editing Your Content

### 1. Editing "About Me" Page

**File to edit:** `content/about.txt`

Steps:
1. Open the file in any text editor (Notepad, Word, Google Docs)
2. Replace the placeholder text with your own
3. Follow these sections:
   - **About Me** (2-3 paragraphs about yourself)
   - **Skills** (3 skill categories with descriptions)
   - **Career Highlights** (4-5 bullet points)
4. Save the file
5. Refresh your browser to see changes

**Example:**
```
ABOUT ME - Main Content
------------------------

I'm a software engineer passionate about building great products...

[Your 2-3 paragraphs here]
```

---

### 2. Adding Projects

**File to edit:** `content/projects.txt`

The file already has 4 example projects. To **add a new project**:

1. Open `content/projects.txt`
2. Copy this template:
```
PROJECT 5
---------
Name: [Your Project Name]
Role: [Your Role]
Description: [2-3 sentences describing what you did]
Impact: [Specific results or achievements]
```
3. Paste at the end of the file
4. Fill in your project details
5. Save and refresh

**To edit existing projects:**
- Find the project in the file
- Update the Name, Role, Description, or Impact
- Save and refresh

---

### 3. Adding Blog Posts

**File to edit:** `content/blogs.txt`

**Important:** New posts go at the TOP (newest first)!

Steps:
1. Open `content/blogs.txt`
2. Add your new post at the very beginning:
```
BLOG ENTRY 1 (Most Recent)
---------------------------
Title: [Your Blog Title]
Date: [Month Day, Year]
Summary: [2-3 sentence summary]
```
3. The old entries will move down automatically
4. Save and refresh

**Example date format:**
- December 18, 2025
- January 5, 2026

**Tips:**
- Summaries should be 2-3 lines only (longer content goes on individual blog pages if needed)
- Keep newest posts at the top
- Use clear, engaging titles

---

### 4. Updating Contact Information

**File to edit:** `content/contact.txt`

What to update:
- Your email address
- Your LinkedIn profile URL
- Your Twitter/X handle

**Example:**
```
Email: yourname@example.com
LinkedIn: linkedin.com/in/yourprofile
Twitter / X: @yourhandle
```

**Setting up the contact form:**

The contact form currently displays but needs email integration. Follow one of these options:

**Option A: Formspree (Recommended)**
1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email
3. Create a new form
4. Copy your form ID
5. Open `contact.html`
6. Find: `action="https://formspree.io/f/YOUR_FORM_ID"`
7. Replace `YOUR_FORM_ID` with your actual ID
8. Save

**Option B: Netlify Forms (If hosting on Netlify)**
- The form already works! Just deploy and test.

---

## 🎨 Customizing Design Colors

**File to edit:** `style.css`

Your website uses a professional blue/white color scheme. To change colors:

1. Open `style.css`
2. Find the "COLOR VARIABLES" section at the top (around line 8-17)
3. You'll see:
```css
--color-bg-primary: #ffffff;          /* Main background */
--color-text-primary: #1a1a1a;        /* Main text color */
--color-accent: #0066cc;              /* Links and highlights */
```
4. Replace color codes with new ones

**Popular color combinations:**

Modern Green Theme:
```css
--color-accent: #00b894;
--color-bg-secondary: #ecfdf5;
```

Professional Purple:
```css
--color-accent: #6c5ce7;
--color-bg-secondary: #f3e9ff;
```

Warm Orange:
```css
--color-accent: #e17055;
--color-bg-secondary: #fff5f0;
```

**Find color codes:**
- [Color Picker](https://htmlcolorcodes.com)
- [Coolors.co](https://coolors.co)
- [Color Palette Generator](https://colors.cloudflare.design/)

---

## 🔤 Changing Fonts

**File to edit:** `style.css` (line 47)

Current font: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`

To use Google Fonts:
1. Go to [fonts.google.com](https://fonts.google.com)
2. Find a font you like
3. Copy the font family name
4. In `style.css`, find line 47:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```
5. Replace with your font name in single quotes
6. Save

---

## 🚀 Deploying Your Website

### Option 1: Netlify (Easiest)

1. **Prepare files:**
   - All `.html` files
   - `style.css`
   - `content/` folder with all `.txt` files

2. **Go to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Sign up (free)

3. **Deploy:**
   - Drag and drop your website folder
   - Netlify will automatically deploy it
   - You'll get a free URL like `your-site-12345.netlify.app`

4. **Connect your domain:**
   - Go to Site Settings → Domain Management
   - Add your custom domain

### Option 2: GitHub Pages (Also Free)

1. **Create GitHub repository:**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it (e.g., `my-portfolio`)

2. **Upload files:**
   - Upload all files to the repository
   - Make sure `index.html` is at the root

3. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Select `main` branch
   - Click Save
   - Your site is live at `username.github.io/my-portfolio`

### Option 3: Traditional Web Host

Use providers like:
- [Bluehost](https://www.bluehost.com)
- [GoDaddy](https://www.godaddy.com)
- [SiteGround](https://www.siteground.com)

Steps:
1. Buy hosting/domain
2. Use FTP to upload files
3. Follow host's documentation

---

## ✅ Maintenance Checklist

**Monthly:**
- [ ] Review blog for outdated content
- [ ] Update projects if new ones completed
- [ ] Check links work (click all navigation)

**Quarterly:**
- [ ] Review contact information
- [ ] Test contact form
- [ ] Check mobile responsiveness

**Annually:**
- [ ] Update portfolio projects
- [ ] Refresh bio if needed
- [ ] Update year in footer (optional)

---

## 🆘 Common Questions

### How often can I update content?
As often as you want! Just edit the `.txt` files and refresh your browser.

### Will my site break if I edit files?
No! These are simple text files. Just avoid changing HTML tags or the folder structure.

### Can I add images?
Yes! Create an `images/` folder, add your images, then reference them in HTML files.

### How do I add a new page?
1. Create a new `.html` file (copy `index.html` as template)
2. Add link to navigation in all `.html` files
3. Create corresponding content file in `content/` folder

### What if I mess up?
- Changes are only saved when you save the file
- You can always restore from backup or start over
- Everything is plain text – nothing breaks permanently

### How do I track changes?
Use GitHub for version control:
- Commit changes regularly
- Revert to old versions if needed
- See history of all updates

---

## 📞 Technical Support

If you encounter issues:

1. **Website looks broken:**
   - Check file names match exactly
   - Verify `style.css` is in root folder
   - Clear browser cache (Ctrl+Shift+Delete)

2. **Navigation doesn't work:**
   - Make sure all `.html` files are in root folder
   - Check file links in HTML

3. **Content not updating:**
   - Save the file completely
   - Hard refresh browser (Ctrl+F5)
   - Wait a few seconds for deployment to update

4. **Contact form not working:**
   - Set up Formspree or Netlify Forms
   - Test with a different browser

---

## 🎓 Learning Resources

- [HTML Basics - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Basics - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Guide](https://pages.github.com)

---

**You're all set! Start updating your content and share your website with the world!** 🌟
