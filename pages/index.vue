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
  async asyncData({ $content, params }) {
    const blogs = await $content('blogs', params.slug)
      .only(['Title', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      blogs
    }
  }
}
</script>
