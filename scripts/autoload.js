/* Autoload content from content/*.txt into placeholders
   Usage: Add data-content="content/whatever.txt" to a container element.
*/

(function () {
  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (ch) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[ch];
    });
  }

  function textToHtml(text) {
    const blocks = text.trim().split(/\n\s*\n/).filter(Boolean);
    return blocks.map(block => {
      const lines = block.split(/\n/).map(l => l.trim()).filter(Boolean);
      // bullets
      if (lines.every(l => /^[-•\*]/.test(l))) {
        return '<ul>' + lines.map(l => '<li>' + escapeHtml(l.replace(/^[-•\*]\s*/,'').trim()) + '</li>').join('') + '</ul>';
      }
      // header + underline
      if (lines.length >= 2 && /^[-]+$/.test(lines[1])) {
        const header = escapeHtml(lines[0]);
        const body = lines.slice(2).join('\n');
        return '<h3>' + header + '</h3>' + textToHtml(body);
      }
      return '<p>' + escapeHtml(lines.join(' ')) + '</p>';
    }).join('\n');
  }

  function parseProjects(text) {
    const parts = text.split(/\n{2,}/).map(s => s.trim()).filter(Boolean);
    const projects = [];
    for (const p of parts) {
      if (!/Name:/i.test(p)) continue;
      const name = (p.match(/Name:\s*(.*)/i) || [])[1] || '';
      const role = (p.match(/Role:\s*(.*)/i) || [])[1] || '';
      const desc = (p.match(/Description:\s*([\s\S]*?)(?:\n[A-Z]|$)/i) || [])[1] || '';
      const impact = (p.match(/Impact:\s*([\s\S]*?)(?:\n[A-Z]|$)/i) || [])[1] || '';
      projects.push({name: name.trim(), role: role.trim(), desc: desc.trim(), impact: impact.trim()});
    }
    if (!projects.length) return '<p>No projects found in content/projects.txt</p>';
    return projects.map(pr => {
      return `<div class="project-card">
                <div class="project-header">
                  <h3 class="project-name">${escapeHtml(pr.name)}</h3>
                  <span class="project-role">${escapeHtml(pr.role)}</span>
                </div>
                <p class="project-description">${escapeHtml(pr.desc)}</p>
                <div class="project-impact"><strong>Impact:</strong> ${escapeHtml(pr.impact)}</div>
              </div>`;
    }).join('\n');
  }

  function parseBlogs(text) {
    const parts = text.split(/\n{2,}/).map(s => s.trim()).filter(Boolean);
    const posts = [];
    for (const p of parts) {
      if (!/Title:/i.test(p)) continue;
      const title = (p.match(/Title:\s*(.*)/i) || [])[1] || '';
      const date = (p.match(/Date:\s*(.*)/i) || [])[1] || '';
      const summary = (p.match(/Summary:\s*([\s\S]*?)(?:\n[A-Z]|$)/i) || [])[1] || '';
      posts.push({title: title.trim(), date: date.trim(), summary: summary.trim()});
    }
    if (!posts.length) return '<p>No blog entries found in content/blogs.txt</p>';
    return posts.map(post => `
      <article class="blog-entry">
        <div class="blog-header">
          <h3 class="blog-title">${escapeHtml(post.title)}</h3>
          <span class="blog-date">${escapeHtml(post.date)}</span>
        </div>
        <p class="blog-summary">${escapeHtml(post.summary)}</p>
      </article>
    `).join('\n');
  }

  function parseContact(text) {
    const email = (text.match(/Email:\s*(.*)/i) || [])[1] || '';
    const linkedin = (text.match(/LinkedIn:\s*(.*)/i) || [])[1] || '';
    const twitter = (text.match(/Twitter\s*\/?\s*X:\s*(.*)/i) || [])[1] || '';

    const contactInfoHtml = `
      <div class="contact-info">
        <h3 class="subsection-title">Contact Information</h3>
        ${email ? `<div class="contact-item"><h4>Email</h4><p><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p></div>` : ''}
        ${linkedin ? `<div class="contact-item"><h4>LinkedIn</h4><p><a href="https://${escapeHtml(linkedin).replace(/^https?:\/\//,'')}" target="_blank">${escapeHtml(linkedin)}</a></p></div>` : ''}
        ${twitter ? `<div class="contact-item"><h4>Twitter / X</h4><p><a href="https://twitter.com/${escapeHtml(twitter).replace(/^@/, '')}" target="_blank">${escapeHtml(twitter)}</a></p></div>` : ''}
      </div>`;

    const contactFormHtml = `
      <div class="contact-form-section">
        <h3 class="subsection-title">Send a Message</h3>
        <p class="form-note">Note: This form is a UI placeholder. To make it functional, use Formspree, Netlify Forms, or EmailJS.</p>
        <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div class="form-group"><label for="name">Name</label><input type="text" id="name" name="name" required></div>
          <div class="form-group"><label for="email">Email</label><input type="email" id="email" name="email" required></div>
          <div class="form-group"><label for="subject">Subject</label><input type="text" id="subject" name="subject" required></div>
          <div class="form-group"><label for="message">Message</label><textarea id="message" name="message" rows="6" required></textarea></div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>`;

    return `<div class="contact-grid">${contactInfoHtml}${contactFormHtml}</div>`;
  }

  function renderContent(container, text) {
    if (container.classList.contains('projects-grid')) {
      container.innerHTML = parseProjects(text);
    } else if (container.classList.contains('blog-list')) {
      container.innerHTML = parseBlogs(text);
    } else if (container.classList.contains('about-content')) {
      container.innerHTML = textToHtml(text);
    } else if (container.classList.contains('contact-wrapper')) {
      container.innerHTML = parseContact(text);
    } else {
      container.innerHTML = textToHtml(text);
    }
  }

  async function load() {
    const nodes = document.querySelectorAll('[data-content]');
    await Promise.all(Array.from(nodes).map(async (node) => {
      const url = node.getAttribute('data-content');
      try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(resp.status + ' ' + resp.statusText);
        const txt = await resp.text();
        renderContent(node, txt);
      } catch (err) {
        node.innerHTML = `<div class="content-error">Unable to load content: ${escapeHtml(String(err))}</div>`;
        console.error('autoload content error', url, err);
      }
    }));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', load);
  } else {
    load();
  }
})();
