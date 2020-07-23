<template>
  <div id="blog" class="panel box">
    <div class="in">
      <h2>Blog</h2>

      <p>
        I believe that an effective way to learn something is by teaching
        others. I share everything I know about security and development through
        my articles and a weekly
        <a href="/Newsletter">newsletter</a>.
      </p>

      <div id="blog_posts">
        <div v-for="blog in blogs" :key="blog.dir">
          <div class="post">
            <h3 class="post_title">
              <nuxt-link :to="blog.dir">{{ blog.Title }}</nuxt-link>
            </h3>

            <div class="post_date">
              <h5 class="day">{{ formatDate(blog.createdAt) }}</h5>
            </div>
          </div>
        </div>
      </div>

      <!--=== Begin Post Navigation ===-->
      <div class="post-navigation">
        <div class="alignleft older"></div>
        <div class="alignright newer"></div>
      </div>
      <!--=== End Post Navigation ===-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogs: {
      type: [Array],
      required: true
    }
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped>
#blog_posts .post {
  width: 100%;
  clear: both;
  float: left;
  padding-top: 40px;
  margin-top: 10px;
  background: url('~assets/images/sep.png') top left repeat-x;
}

#blog_posts .post .post_left {
  width: 35%;
  float: left;
}

#blog_posts .post .post_right {
  width: 60%;
  float: right;
}

.post .post_date h5 {
  color: #777 !important;
}

.post .post_title {
  margin-bottom: 10px;
}

.post .post_title a {
  font-style: normal;
  transition: 250ms;
}

.post .post_title a:hover {
  color: #ff4343;
}

.post .post_thumb,
.post .post_video {
  margin-bottom: 30px;
  overflow: hidden;
}
</style>
