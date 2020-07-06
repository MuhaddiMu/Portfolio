<template>
  <div id="skills" class="panel box">
    <div class="in">
      <h2>Skills</h2>

      <div class="clearfix"></div>

      <div class="skill-set">
        <div class="card">
          <div class="item">
            <img src="@/assets/images/skills-assets/Vuejs.svg" />
            <span>Vue.Js</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/Nuxtjs.svg" />
            <span>Nuxt.Js</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/ReactJs.svg" />
            <span>React.Js</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/Python.svg" />
            <span>Python</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/Git.svg" />
            <span>Git</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/AWS.svg" />
            <span>AWS</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/ReactJs.svg" />
            <span>Web Component</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/ReactJs.svg" />
            <span>LitElement</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/ReactJs.svg" />
            <span>Node.js</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/ReactJs.svg" />
            <span>Electron</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/ReactJs.svg" />
            <span>MongoDB</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/ReactJs.svg" />
            <span>Webpack</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/ReactJs.svg" />
            <span>Gulp</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/ReactJs.svg" />
            <span>Git</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/ReactJs.svg" />
            <span>Azure</span>
          </div>
          <div class="item">
            <img src="@/assets/images/skills-assets/ReactJs.svg" />
            <span>Docker</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.skill-set {
  margin-bottom: 15px;
  clear: both;
}

.skill-set h2 {
  margin: 0;
  margin-bottom: 48px;
}
.skill-set h3 {
  margin: 0;
  margin-bottom: 72px;
}
.skill-set .card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 1024px) {
  .skill-set .card {
    justify-content: center;
  }
}
.skill-set .card .item {
  width: 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
  overflow: hidden;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .skill-set .card .item {
    width: 100px;
  }
  .skill-set .card .item span {
    -webkit-transform: translateY(0) !important;
    transform: translateY(0) !important;
    font-size: 0.8em;
  }
  .skill-set .card .item img {
    height: 48px !important;
  }
}
.skill-set .card .item:hover span {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  transition: all 0.3s ease;
}
.skill-set .card .item img {
  height: 64px;
  align-self: center;
}
.skill-set .card .item span {
  display: flex;
  justify-content: center;
  font-weight: 600;
  margin-top: 8px;
  -webkit-transform: translateY(150%);
  transform: translateY(150%);
  transition: all 0.3s ease;
  text-align: center;
  white-space: nowrap;
}
</style>
