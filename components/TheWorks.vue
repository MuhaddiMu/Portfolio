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
            read-more="muhaddimu.github.io/vuetiform"
          />
          <TheProjectItem
            project-cover-image="Idea-ReVue.png"
            project-caption="An open source Social Ideation platform to manage Ideas. Developed with Vue, Firebase & Vuetify"
            project-title="Idea Re-Vue"
            read-more="https://muhaddimu.github.io/vuetiform"
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
            read-more="https://qas-blogs.netlify.app"
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
