<template>
  <div class="panel box">
    <div class="in">
      <h2>{{ blog.Title }}</h2>
      <p>
        <v-img
          v-if="blog.Featured_Image"
          :src="blog.dir + '/images/' + blog.Featured_Image"
          :alt="blog.Title"
        ></v-img>
      </p>
      <nuxt-content :document="blog" />

      <div class="line" />

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
  scrollToTop: true,
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

<style>
.nuxt-content ul {
  display: block;
  list-style-type: disc;
  padding-left: 40px;
  margin-bottom: 20px;
}
.nuxt-content > ol {
  display: block;
  list-style-type: decimal;
  margin-bottom: 20px;
  padding-left: 40px;
}
.nuxt-content a {
  transition: 250ms;
}
.nuxt-content a:hover {
  color: #ff4343;
}
.filename {
  position: absolute;
  right: 0;
  --text-opacity: 1;
  color: #718096;
  color: rgba(113, 128, 150, var(--text-opacity));
  font-weight: 300;
  z-index: 10;
  margin-right: 0.5rem;
  margin-top: 0.25rem;
  font-size: 0.875rem;
}
.nuxt-content img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
