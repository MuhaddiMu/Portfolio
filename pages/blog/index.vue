<template>
  <TheBlogs :blogs="blogs" />
</template>

<script>
import TheBlogs from '@/components/TheBlogs'
export default {
  components: {
    TheBlogs
  },
  async asyncData({ params, error, $content }) {
    try {
      const blogs = await $content('blog', { deep: true })
        .only(['Title', 'slug', 'createdAt', 'dir'])
        .sortBy('createdAt', 'asc')
        .fetch()
      return { blogs }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
  }
}
</script>
