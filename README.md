# Samir TimajChi — Personal Site

Built with [Jekyll](https://jekyllrb.com/) using the [al-folio](https://github.com/alshedivat/al-folio) theme, hosted on GitHub Pages.

---

# Site Guide

## Running Locally

```bash
docker compose pull && docker compose up
# visit http://localhost:8080
```

---

## Site Structure

```
_posts/
  works/
    projects/      ← Works → Projects
    compositions/  ← Works → Compositions
  blogs/
    writings/      ← Blogs → Writings
    interviews/    ← Blogs → Interviews
_news/             ← Home page announcements
_pages/            ← Page definitions & nav
_data/socials.yml  ← Contact/social links
```

---

## Pages

### About (`/`)
**File:** `_pages/about.md`

Edit your bio directly in the body of that file. Profile photo goes in `assets/img/prof_pic.jpg`.

### Works → Projects (`/projects/`)
**Content:** `_posts/works/projects/`

Each file shows one project card. Front matter:
```yaml
---
layout: page
title: My Project
description: A short description shown on the card.
img: assets/img/my-image.jpg
importance: 1        # lower = shown first
category: project    # must be "project"
---

Full project description here...
```

### Works → Compositions (`/compositions/`)
**Content:** `_posts/works/compositions/`

Same structure as projects, but use `category: composition`.

```yaml
---
layout: page
title: My Composition
description: A short description shown on the card.
img: assets/img/my-image.jpg
importance: 1
category: composition  # must be "composition"
---
```

### Blogs → Writings (`/writings/`)
**Content:** `_posts/blogs/writings/`

```yaml
---
layout: post
title: My Essay
date: 2024-06-01 12:00:00
description: A short preview description.
categories: writings   # must be "writings"
---

Full text here...
```

### Blogs → Interviews (`/interviews/`)
**Content:** `_posts/blogs/interviews/`

```yaml
---
layout: post
title: Interview with Someone
date: 2024-06-01 12:00:00
description: A short preview description.
categories: interviews   # must be "interviews"
---

Full text here...
```

### CV (`/cv/`)
**File:** `_pages/cv.md`

CV data is driven by `_data/cv.yml`. The PDF version path is set in `_pages/cv.md`:
```yaml
cv_pdf: /assets/pdf/your-cv.pdf
```

---

## Adding New Content

### Adding a new post (any category)

1. Create a file in the matching `_posts/` subfolder
2. Name it `YYYY-MM-DD-your-title.md` (date prefix is required by Jekyll)
3. Set the correct `category` or `categories` in the front matter (see examples above)

### Adding a news announcement (home page)

Create any `.md` file in `_news/`:
```yaml
---
date: 2024-06-01
---

Your announcement text here.
```

### Updating contact email

Edit `_data/socials.yml`:
```yaml
email: your@email.com
```

---

## Note on "1 item per page"

Each sub-page (Projects, Compositions, Writings, Interviews) currently shows only the **first** item from its category as a placeholder. To show all items, open the relevant `_pages/*.md` file and replace the single-item block with a loop over `category_posts`.
