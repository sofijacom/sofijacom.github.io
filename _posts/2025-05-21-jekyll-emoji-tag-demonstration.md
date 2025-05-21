---
layout: post
description: jekyll_emoji_tag demonstration.
title: Exercising Parameter Combinations
sub_title:
comments: true
categories:
  - emoji
tags:
  - jekyll_emoji
elements:
  - content
last_modified_at: 2025-05-21T11:25:52-03:00
---
<!-- #region emoji -->
<h2 id="emoji" class="code">emoji</h2>
<p>{% emoji %}</p>
<!-- endregion -->


<!-- #region emoji class -->
<h2 id="emoji" class="code">emoji <span class="code">class='bg_yellow'</span></h2>
<p>
  {% emoji class='bg_yellow' %}
</p>
<!-- endregion -->


<!-- #region emoji style -->
<h2 id="emoji" class="code">emoji <span class="code">style='border: solid black 5pt'</span></h2>
<p>{% emoji style='border: solid black 5pt' %}</p>
<!-- endregion -->


<!-- #region emoji div style -->
<h2 id="emoji" class="code">emoji <span class="code">div</span></h2>
{% emoji div %}
{% emoji div name='boom' %}
{% emoji div class='bg_yellow' %}
{% emoji div style='border: solid black 5pt' %}
<!-- endregion -->


<!-- #region emoji name='angry' -->
<h2 id="emoji" class="code">emoji name='angry'</h2>
<p>{% emoji name='angry' %}</p>
<!-- endregion -->


<!-- #region emoji emoji_and_name name='boom' -->
<h2 id="emoji" class="code">emoji emoji_and_name name='boom'</h2>
<p>{% emoji emoji_and_name name='boom' %}</p>
<!-- endregion -->


<!-- #region emoji name='grin' align='left' -->
<h2 id="emoji" class="code">emoji name='grin' align='left'</h2>
<p>{% emoji name='grin' align='left' %}</p>
<!-- endregion -->


<!-- #region emoji name='horns' size='1em' -->
<h2 id="emoji" class="clear code">emoji name='horns' size='1em'</h2>
<p>{% emoji name='horns' size='1em' %}</p>
<!-- endregion -->


<!-- #region emoji name='kiss' align='right' size='2em' -->
<h2 id="emoji" class="code">emoji name='kiss' align='right' size='2em'</h2>
<p>{% emoji name='kiss' align='right' size='2em' %}</p>
<!-- endregion -->


<!-- #region emoji list -->
<h2 id="emoji" class="clear code">emoji list</h2>
<p>{% emoji list %}</p>
<!-- endregion -->


<!-- #region emoji list size='1em' -->
<h2 id="emoji" class="code">emoji list size='1em'</h2>
<p>{% emoji list size='1em' %}</p>
<!-- endregion -->


<!-- #region emoji emoji_and_name list size='1em' -->
<h2 id="emoji" class="code">emoji emoji_and_name list size='1em'</h2>
<p>{% emoji emoji_and_name list size='1em' %}</p>
<!-- endregion -->


<!-- #region emoji align='right' emoji_and_name list size='1em' -->
<h2 id="emoji" class="code">emoji align='right' emoji_and_name list size='1em'</h2>
<p>{% emoji align='right' emoji_and_name list size='1em' %}<p>
<!-- endregion -->
