---
layout: default
title: writings
permalink: /writings/
description: A selection of writings.
nav: false
---

<div class="post">
  <div class="header-bar">
    <h1>writings</h1>
  </div>

  {% assign category_posts = site.posts | where_exp: "post", "post.categories contains 'writings'" %}
  {% assign featured = category_posts | first %}

  {% if featured %}
  <ul class="post-list">
    <li>
      <h3>
        <a class="post-title" href="{{ featured.url | relative_url }}">{{ featured.title }}</a>
      </h3>
      <p>{{ featured.description }}</p>
      <p class="post-meta">{{ featured.date | date: '%B %d, %Y' }}</p>
    </li>
  </ul>
  {% else %}
  <p>No writings yet. Add posts with <code>categories: writings</code> to see them here.</p>
  {% endif %}
</div>
