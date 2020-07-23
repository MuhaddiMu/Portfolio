<template>
  <div class="panel box">
    <div class="in">
      <nuxt-content :document="blog" />

      If you enjoyed this article, please tell a friend about it! Share it on
      Twitter. If you spot a typo, I’d appreciate if you can correct
      <a
        :href="
          'https://github.com/MuhaddiMu/Portfolio/tree/master/content/' +
            blog.path +
            '.md'
        "
        >it on GitHub</a
      >. Thank you!
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('blog', params.slug).fetch()

    return { blog }
  }
}
</script>
