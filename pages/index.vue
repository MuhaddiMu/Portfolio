<template>
  <div>
    <TheProfile />
    <TheSkills />
    <TheHonors />
    <TheWorks />
    <TheBlogs :blogs="blogs" />
    <TheContact />
    <ScrollToTop />
  </div>
</template>

<script>
import TheProfile from '@/components/TheProfile'
import TheSkills from '@/components/TheSkills'
import TheHonors from '@/components/TheHonors'
import TheWorks from '@/components/TheWorks'
import TheBlogs from '@/components/TheBlogs'
import ScrollToTop from '@/components/TheContact'
import TheContact from '@/components/ScrollToTop'
export default {
  components: {
    TheProfile,
    TheSkills,
    TheHonors,
    TheWorks,
    TheBlogs,
    TheContact,
    ScrollToTop
  },
  async asyncData({ params, error, $content }) {
    try {
      const blogs = await $content('blog', { deep: true })
        .only(['Title', 'slug', 'createdAt', 'dir'])
        .sortBy('createdAt', 'desc')
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
