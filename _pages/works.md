---
layout: page
title: Works
permalink: /works/
nav: true
nav_order: 2
---

<div style="display: flex; align-items: center; margin: 2rem 0 1.5rem;">
  <hr style="flex: 1; margin: 0; border-color: var(--global-divider-color);">
  <h2 style="margin: 0 0 0 1rem; color: var(--global-divider-color); font-weight: 400; font-size: 1.4rem;">Projects</h2>
</div>

{% assign project_posts = site.posts | where: "category", "project" | sort: "importance" %}
{% if project_posts.size > 0 %}
<div class="Projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in project_posts %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
{% else %}
<p>No Projects yet. Add posts to <code>_posts/works/Projects/</code> with <code>category: project</code>.</p>
{% endif %}

<div style="display: flex; align-items: center; margin: 3rem 0 1.5rem;">
  <hr style="flex: 1; margin: 0; border-color: var(--global-divider-color);">
  <h2 style="margin: 0 0 0 1rem; color: var(--global-divider-color); font-weight: 400; font-size: 1.4rem;">Compositions</h2>
</div>

{% assign composition_posts = site.posts | where: "category", "composition" | sort: "importance" %}
{% if composition_posts.size > 0 %}
<div class="Projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in composition_posts %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
{% else %}
<p>No Compositions yet. Add posts to <code>_posts/works/Compositions/</code> with <code>category: composition</code>.</p>
{% endif %}
