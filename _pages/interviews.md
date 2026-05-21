---
layout: default
title: interviews
permalink: /interviews/
description: A selection of interviews.
nav: false
---

<div class="post">
  <div class="header-bar">
    <h1>interviews</h1>
  </div>

  {% assign category_posts = site.posts | where_exp: "post", "post.categories contains 'interviews'" %}
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
  <p>No interviews yet. Add posts with <code>categories: interviews</code> to see them here.</p>
  {% endif %}
</div>
