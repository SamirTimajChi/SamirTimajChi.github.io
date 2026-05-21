---
layout: page
title: compositions
permalink: /compositions/
description: A selection of compositions.
nav: false
display_category: composition
---

<div class="projects">
{% assign category_posts = site.posts | where: "category", page.display_category %}
{% assign sorted_posts = category_posts | sort: "importance" %}
{% assign featured = sorted_posts | first %}
{% if featured %}
<div class="row row-cols-1 row-cols-md-3">
  {% assign project = featured %}
  {% include projects.liquid %}
</div>
{% else %}
<p>No compositions yet. Add posts to <code>_posts/works/compositions/</code> with <code>category: composition</code>.</p>
{% endif %}
</div>
