<template>
  <div class="home blog">
    <TheHeader />
    <section id="main">
      <div id="content">
        <TheProfile />
        <TheSkills />
        <TheWorks />
        <TheBlogs />
        <TheContact />
        <ScrollToTop />
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheProfile from '@/components/TheProfile'
import TheSkills from '@/components/TheSkills'
import TheWorks from '@/components/TheWorks'
import TheBlogs from '@/components/TheBlogs'
import ScrollToTop from '@/components/TheContact'
import TheContact from '@/components/ScrollToTop'
export default {
  components: {
    TheHeader,
    TheProfile,
    TheSkills,
    TheWorks,
    TheBlogs,
    TheContact,
    ScrollToTop
  }
}
</script>
