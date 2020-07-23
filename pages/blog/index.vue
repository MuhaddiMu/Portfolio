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
        <div v-for="blog in blogs" :key="blog.slug">
          <div class="post">
            <h3 class="post_title">
              <nuxt-link :to="'blog/' + blog.slug">{{ blog.Title }}</nuxt-link>
            </h3>

            <div class="post_date">
              <h5 class="day">{{ formatDate(blog.createdAt) }}</h5>
            </div>
          </div>
        </div>

        <div
          id="post_730"
          class="post-730 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a
              href="https://www.muhaddis.info/5-cost-effective-tips-to-protect-sensitive-information-in-the-workplace/"
              >5 Cost-Effective Tips to Protect Sensitive Information in the
              Workplace</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Wednesday 11, 2019</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_720"
          class="post-720 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a
              href="https://www.muhaddis.info/automate-the-code-formatting-with-eslint-and-prettier/"
              >Automate the Code Formatting with Eslint and Prettier</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Sunday 17, 2019</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_693"
          class="post-693 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a
              href="https://www.muhaddis.info/5-blog-ux-tips-to-minimize-bounce-rate/"
              >5 Blog UX Tips to Minimize Bounce Rate</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Friday 8, 2019</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_681"
          class="post-681 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a
              href="https://www.muhaddis.info/the-devastating-effects-of-cyber-attacks-on-business-and-how-to-prevent-them/"
              >The Devastating Effects of Cyber Attacks on Business and How to
              Prevent Them</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Thursday 7, 2019</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_672"
          class="post-672 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a
              href="https://www.muhaddis.info/how-to-use-multiple-nuxt-js-applications-on-the-frontend/"
              >How to use multiple Nuxt.Js Applications on the Frontend?</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Wednesday 30, 2019</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_633"
          class="post-633 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a href="https://www.muhaddis.info/why-i-started-blogging/"
              >Why I started Blogging</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Saturday 26, 2019</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_669"
          class="post-669 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a
              href="https://www.muhaddis.info/how-to-go-from-developer-to-agency/"
              >How to Go from Developer to Agency?</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Friday 25, 2019</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_585"
          class="post-585 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a href="https://www.muhaddis.info/my-inspirations/"
              >My Inspirations!</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Thursday 24, 2019</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_514"
          class="post-514 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a
              href="https://www.muhaddis.info/4-ways-to-secure-your-code-to-next-level/"
              >4 Ways to Secure your Code to Next Level</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Tuesday 14, 2019</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_156"
          class="post-156 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a href="https://www.muhaddis.info/who-am-i/">Who I Am</a>
          </h3>

          <div class="post_date">
            <h5 class="day">Wednesday 13, 2019</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_476"
          class="post-476 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a
              href="https://www.muhaddis.info/why-you-should-choose-dedicated-server-hosting-for-business-expansion/"
              >Why you should choose Dedicated server Hosting for Business
              Expansion</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Friday 26, 2018</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_438"
          class="post-438 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a href="https://www.muhaddis.info/50-random-facts-about-me/"
              >50 Random Facts About Me</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Saturday 14, 2018</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_338"
          class="post-338 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a href="https://www.muhaddis.info/not-beginner-programmer-anymore/"
              >How Do You Know If You Are Not A Beginner Programmer Anymore?</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Friday 1, 2017</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_311"
          class="post-311 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a
              href="https://www.muhaddis.info/programming-languages-learn-become-hacker/"
              >Which Programming Languages Should You Learn to Become A
              Hacker</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Sunday 25, 2017</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_305"
          class="post-305 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a href="https://www.muhaddis.info/guest-bloggers-wanted/"
              >Write For Us – Guest Bloggers Wanted</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Monday 5, 2017</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
        </div>

        <div
          id="post_221"
          class="post-221 post type-post status-publish format-standard hentry category-uncategorized"
        >
          <h3 class="post_title">
            <a
              href="https://www.muhaddis.info/advanced-cross-site-scripting-xss-cheat-sheet/"
              >Advance Cross Site Scripting (XSS) Cheat Sheet</a
            >
          </h3>

          <div class="post_date">
            <h5 class="day">Thursday 9, 2017</h5>
          </div>

          <div class="post_content"></div>

          <div class="none"></div>
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
  async asyncData({ $content, params }) {
    const blogs = await $content('blogs', params.slug)
      .only(['Title', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      blogs
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
