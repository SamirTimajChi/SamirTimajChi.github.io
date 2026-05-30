---
layout: page
title: Blog
permalink: /blogs/
nav: true
nav_order: 3
---

{% assign writing_posts = site.posts | where_exp: "post", "post.categories contains 'writings'" | sort: "date" | reverse %}
{% if writing_posts.size > 0 %}
<div style="display: flex; align-items: center; margin: 2rem 0 1.5rem;">
  <hr style="flex: 1; margin: 0; border-color: var(--global-divider-color);">
  <h2 style="margin: 0 0 0 1rem; color: var(--global-divider-color); font-weight: 400; font-size: 1.4rem;">Writings</h2>
</div>
<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in writing_posts %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
{% endif %}

{% assign interview_posts = site.posts | where_exp: "post", "post.categories contains 'interviews'" | sort: "date" | reverse %}
{% if interview_posts.size > 0 %}
<div style="display: flex; align-items: center; margin: 3rem 0 1.5rem;">
  <hr style="flex: 1; margin: 0; border-color: var(--global-divider-color);">
  <h2 style="margin: 0 0 0 1rem; color: var(--global-divider-color); font-weight: 400; font-size: 1.4rem;">Interviews</h2>
</div>
<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in interview_posts %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
{% endif %}
