<template>
  <div id="skills" class="panel box">
    <div class="in">
      <h2>Skills</h2>

      <p>Here below some of my Interests and Skills are listed below.</p>

      <div class="clearfix"></div>

      <div class="skill-set">
        <h3 class="line">Expertism</h3>
        <div class="skill level_9-5">
          <h5>
            Cyber Security / Security Engineering / Penetration Testing /
            Application Security
          </h5>
          <div class="bar">
            <div><span>95%</span></div>
          </div>
        </div>

        <div class="skill level_8">
          <h5>
            Backend Web Development / PHP / Node.js / Express / Laravel / Django
          </h5>
          <div class="bar">
            <div><span>80%</span></div>
          </div>
        </div>

        <div class="skill level_8-5">
          <h5>
            Frontend Web Development / JavaScript / jQuery / Vue.js / React.js
          </h5>
          <div class="bar">
            <div><span>85%</span></div>
          </div>
        </div>

        <div class="skill level_7">
          <h5>Database / SQL / NoSQL / MySQL / MongoDB / Firebase</h5>
          <div class="bar">
            <div><span>70%</span></div>
          </div>
        </div>

        <div class="skill level_7-5">
          <h5>
            Designing / Material Design / Bootstrap / Bulma / Tailwind
          </h5>
          <div class="bar">
            <div><span>75%</span></div>
          </div>
        </div>

        <div class="skill level_9">
          <h5>REST APIs / GraphQL(Apollo) / Open Source / PWAs</h5>
          <div class="bar">
            <div><span>90%</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.skill {
  margin-bottom: 30px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

.skill .bar {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  color: #fff;
  height: 44px;
  line-height: 44px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  margin-bottom: 10px;
  background: #323439;
}

.skill .bar div {
  height: 44px;
  padding: 0 4%;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

.level_1 .bar div {
  width: 2%;
}
.level_2 .bar div {
  width: 12%;
}
.level_3 .bar div {
  width: 22%;
}
.level_4 .bar div {
  width: 32%;
}
.level_5 .bar div {
  width: 42%;
}
.level_6 .bar div {
  width: 52%;
}
.level_7 .bar div {
  width: 62%;
}
.level_7-5 .bar div {
  width: 67%;
}
.level_8 .bar div {
  width: 72%;
}
.level_8-5 .bar div {
  width: 77%;
}
.level_9 .bar div {
  width: 82%;
}
.level_9-5 .bar div {
  width: 87%;
}
.level_10 .bar div {
  width: 92%;
}

.skill h5,
.skill h6 {
  margin-bottom: 5px;
}

.skill span {
  float: right;
  font-size: 14px;
  text-align: right;
  display: inline-block;
}

.skill-set {
  margin-bottom: 15px;
  clear: both;
}

.skill .bar div {
  background: #ff4343;
}
</style>
