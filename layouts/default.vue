<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
/* Global CSS */

html {
  background: #000;
}

body {
  color: #fff;
  padding: 0;
  margin: 0;
  opacity: 0; /* For page fade in, open "custom.js" */
}

body {
  display: block !important;
  opacity: 1 !important;
}

::-moz-selection,
::selection {
  background: #ff4343;
}

.ui-accordion .ui-state-active {
  background-color: #ff4343 !important;
}

.skill .bar div {
  background: #ff4343;
}

/*=== Body Font ===*/

body,
h1 span,
h5,
.post .post_date h5,
#contact_form label,
.widget_calendar #wp-calendar a {
  font: 12px/22px 'Open Sans', Helvetica, sans-serif;
}

/*=== Heading Font ===*/

h1,
h2,
h3,
h4,
h5,
h6,
.post .post_bottom .cats ul li a,
.format-link a,
.widget ul li a,
.btn,
.tagcloud a,
.widget_categories ul li a,
.cats ul li a {
  font-family: 'Montserrat', sans-serif;
}
</style>
