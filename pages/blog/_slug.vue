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
        target="_blank"
        >it on GitHub</a
      >. Thank you!
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, error, $content }) {
    try {
      const blogPath = `/blog/${params.slug}`
      const [blog] = await $content('blog', { deep: true })
        .where({ dir: blogPath })
        .fetch()
      return { blog }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
  }
}
</script>
