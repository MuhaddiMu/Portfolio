<template>
  <div class="home blog">
    <TheHeader />
    <section id="main">
      <div id="content">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  components: {
    TheHeader
  }
}
</script>
<style>
@media only screen and (max-width: 880px) {
  #main {
    width: 100%;
    opacity: 1 !important;
  }

  #main #content {
    max-width: none;
    padding: 0 20px;
  }
}
</style>
