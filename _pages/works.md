---
layout: page
title: Works
permalink: /works/
nav: true
nav_order: 2
---

{% assign works_posts = site.posts | where_exp: "post", "post.category == 'project' or post.category == 'composition'" | sort: "importance" %}
{% if works_posts.size > 0 %}
<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in works_posts %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
{% else %}
<p>No works yet.</p>
{% endif %}
