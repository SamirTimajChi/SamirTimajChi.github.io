---
layout: page
title: Blog
permalink: /blogs/
nav: true
nav_order: 3
---

<div style="display: flex; align-items: center; margin: 2rem 0 1.5rem;">
  <hr style="flex: 1; margin: 0; border-color: var(--global-divider-color);">
  <h2 style="margin: 0 0 0 1rem; color: var(--global-divider-color); font-weight: 400; font-size: 1.4rem;">Writings</h2>
</div>

{% assign writing_posts = site.posts | where_exp: "post", "post.categories contains 'writings'" | sort: "date" | reverse %}
{% if writing_posts.size > 0 %}
<ul class="post-list">
  {% for post in writing_posts %}
  <li>
    <h3><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    {% if post.description %}<p>{{ post.description }}</p>{% endif %}
    <p class="post-meta">{{ post.date | date: '%B %d, %Y' }}</p>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No Writings yet. Add posts with <code>categories: Writings</code> to see them here.</p>
{% endif %}

<div style="display: flex; align-items: center; margin: 3rem 0 1.5rem;">
  <hr style="flex: 1; margin: 0; border-color: var(--global-divider-color);">
  <h2 style="margin: 0 0 0 1rem; color: var(--global-divider-color); font-weight: 400; font-size: 1.4rem;">Interviews</h2>
</div>

{% assign interview_posts = site.posts | where_exp: "post", "post.categories contains 'interviews'" | sort: "date" | reverse %}
{% if interview_posts.size > 0 %}
<ul class="post-list">
  {% for post in interview_posts %}
  <li>
    <h3><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    {% if post.description %}<p>{{ post.description }}</p>{% endif %}
    <p class="post-meta">{{ post.date | date: '%B %d, %Y' }}</p>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No Interviews yet. Add posts with <code>categories: Interviews</code> to see them here.</p>
{% endif %}
