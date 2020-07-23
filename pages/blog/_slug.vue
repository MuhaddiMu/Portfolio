<template>
  <div class="panel box">
    <div class="in">
      <h2>{{ blog.Title }}</h2>
      <p>
        <v-img
          v-if="blog.Featured_Image"
          :src="blog.Featured_Image"
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
import VImg from '~/components/VImg'
export default {
  components: {
    VImg
  },
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
ul {
  display: block;
  list-style-type: disc;
  padding-left: 40px;
  margin-bottom: 20px;
}
</style>
