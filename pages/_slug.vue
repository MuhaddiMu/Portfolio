<template>
  <div class="panel box">
    <div class="in">
      <h2 class="post_title">{{ blog.Title }}</h2>
      <div class="post_date">
        <h5 class="day">
          {{ formatDate(blog.createdAt) }} ·
          {{ (blog.readingTime / (1000 * 60)).toFixed() }} min read
        </h5>
      </div>
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
        class="edit_url"
        :href="
          'https://github.com/MuhaddiMu/Portfolio/tree/master/content' +
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
      const blogPath = `/${params.slug}`
      const [blog] = await $content({ deep: true })
        .where({ dir: blogPath })
        .fetch()
      return { blog }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title: this.blog.Title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blog.Description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.blog.Title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.blog.Description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.blog.Title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.blog.Description
        }
      ]
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
.nuxt-content a,
.edit_url {
  transition: 250ms;
}
.nuxt-content a:hover,
.edit_url:hover {
  color: #ff4343;
}
.filename {
  position: absolute;
  right: 0;
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

.post_title {
  margin-bottom: auto;
}

.post_date h5 {
  color: #777 !important;
  margin-bottom: 25px;
}

p code,
li code {
  padding: 2px 5px 2px 5px;
  border: solid 1px #2a223a;
  border-radius: 4px;
  color: #71f1b9;
  background-color: #2a223a;
  overflow: auto;
  white-space: pre;
}

pre {
  border-radius: 4px;
}
</style>
