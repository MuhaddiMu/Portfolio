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

        <!-- <div id="nomore" class="panel box">
          <div class="in center">
            <h2>No more, where are you going?</h2>

            <h5>
              <a v-smooth-scroll href="#profile">Go back to top</a> or use the
              menu to your left to navigate.
            </h5>
          </div>
        </div> -->
      </div>
    </section>

    <a href="#main" class="jump">Top</a>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheProfile from '@/components/TheProfile'
import TheSkills from '@/components/TheSkills'
import TheWorks from '@/components/TheWorks'
import TheBlogs from '@/components/TheBlogs'
import TheContact from '@/components/TheContact'
export default {
  components: {
    TheHeader,
    TheProfile,
    TheSkills,
    TheWorks,
    TheBlogs,
    TheContact
  }
}
</script>

<style scoped>
#main {
  width: 63%;
  float: right;
}

#main #content {
  max-width: 660px;
  padding: 0 30px 0 0;
  position: relative;
}
</style>
