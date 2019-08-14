{% extends '_layout.swig' %}
{% import '_macro/post-collapse.swig' as post_template %}
{% import '_macro/sidebar.swig' as sidebar_template %}

{% block title %}{{ __('title.trace') }}: {{ page.trace }} | {{ title }}{% endblock %}

{% block content %}

  {######################}
  {### trace BLOCK ###}
  {######################}
  <div class="post-block trace">

    <div id="posts" class="posts-collapse">
      <div class="collection-title">
        <{% if theme.seo %}h2{% else %}h1{% endif %}>{#
        #}{{ page.trace }}{#
        #}<small>{{ __('title.trace') }}</small>
        </{% if theme.seo %}h2{% else %}h1{% endif %}>
      </div>

      {% for post in page.posts %}
        {{ post_template.render(post) }}
      {% endfor %}
    </div>

  </div>
  {##########################}
  {### END trace BLOCK ###}
  {##########################}

  {% include '_partials/pagination.swig' %}

{% endblock %}

{% block sidebar %}
  {{ sidebar_template.render(false) }}
{% endblock %}
