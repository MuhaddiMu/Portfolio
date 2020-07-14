<template>
  <li>
    <div class="view view-first">
      <img
        src="https://www.muhaddis.info/wp-content/uploads/2017/09/Adobes-Hall-of-Fame-370x298.jpg"
        alt="14th Acknowledgement From Adobe"
      />
      <div class="mask"></div>
      <div class="content">
        <h2>Hover Style #1</h2>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </p>
        <a href="#" class="info">Read More</a>
      </div>
    </div>
  </li>
</template>

<style scoped>
.view {
  max-width: 100%;
  width: 100%;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  overflow: hidden;
  position: relative;
  text-align: center;
  background: #fff;
}
.view .mask,
.view .content {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
}
.view img {
  display: block;
  position: relative;
}
.view h2 {
  display: none;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.8);
  margin: 20px 0 0 0;
}
.view p {
  display: none;
  font-style: italic;
  font-size: 12px;
  position: relative;
  color: #fff;
  padding: 10px 20px 20px;
  text-align: center;
}
.view a.info {
  display: none;
  text-decoration: none;
  font-style: normal;
  padding: 7px 14px;
  background: #000;
  color: #fff;
  text-transform: uppercase;
}

.view-first img {
  transition: all 0.2s linear;
}
.view-first .mask {
  opacity: 0;
  background-color: rgba(34, 40, 49, 0.7);
  transition: all 0.4s ease-in-out;
}
.view-first h2 {
  transform: translateY(-100px);
  opacity: 0;
  transition: all 0.2s ease-in-out;
}
.view-first p {
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.2s linear;
}
.view-first a.info {
  opacity: 0;
  transition: all 0.2s ease-in-out;
}

.view-first:hover img {
  transform: scale(1.1);
}
.view-first:hover .mask {
  opacity: 1;
}
.view-first:hover h2,
.view-first:hover p,
.view-first:hover a.info {
  opacity: 1;
  transform: translateY(0px);
}
.view-first:hover h2 {
  display: block;
}
.view-first:hover p {
  transition-delay: 0.1s;
  display: block;
}
.view-first:hover a.info {
  transition-delay: 0.2s;
  display: inline-block;
}
@media only screen and (max-width: 600px) {
  .view p {
    line-height: normal;
    margin-bottom: unset;
  }
}
</style>
