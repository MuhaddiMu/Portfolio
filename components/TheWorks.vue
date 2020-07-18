<template>
  <div class="honors panel box">
    <div id="works" class="in">
      <h2>Works</h2>

      <div>
        <p>
          <i
            >Here is the list of Projects I go through hours developing them,
            excited to showcase. I can't list some personal projects due to some
            privacy reasons See my
            <a href="https://github.com/MuhaddiMu">GitHub</a> for all the Open
            Source projects</i
          >
        </p>

        <ul>
          <TheProjectItem
            project-cover-image="VuetiForm.png"
            project-caption="Interactive Vuetify Form Generator with Validation & Input Styling 🎉 Based on Vue"
            project-title="VuetiForm"
            project-url="https://muhaddimu.github.io/vuetiform"
            github-url="https://github.com/MuhaddiMu/VuetiForm"
          />
          <TheProjectItem
            project-cover-image="Idea-ReVue.png"
            project-caption="An open source Social Ideation platform to manage Ideas. Developed with Vue, Firebase & Vuetify"
            project-title="Idea Re-Vue"
            project-url="http://idea-revue.netlify.com/"
            github-url="https://github.com/MuhaddiMu/Idea-ReVue"
          />
          <TheProjectItem
            project-cover-image="IMS.png"
            project-caption="PHP & MySQL based Inventory management system developed for the client. Some of the key features are Daily, Weekly, Monthly reports, QR Scanner and Point of Sale"
            project-title="Inventory Management System"
          />
          <TheProjectItem
            project-cover-image="QAS-Blog.png"
            project-caption="An open source markdown based blog developed with Vue and Gridsome. SPA which is made up of Qasim Ali Shah blogs and columns from different resources ✨"
            project-title="QAS Blog"
            project-url="https://qas-blogs.netlify.app"
            github-url="https://github.com/MuhaddiMu/QAS-Blogs"
          />
          <TheProjectItem
            project-cover-image="AS_Earning.png"
            project-caption="Developed AS Earnings for a client using Laravel and MySQL. This is an online earning platform based on watching youtube videos. This website is currently functional only in Pakistan."
            project-title="AS Earnings"
            project-url="https://asearnings.com"
          />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import TheProjectItem from './TheProjectItem'
export default {
  components: {
    TheProjectItem
  }
}
</script>
