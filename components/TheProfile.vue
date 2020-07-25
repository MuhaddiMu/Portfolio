<template>
  <div id="profile" class="panel">
    <img
      id="photo"
      src="/Muhaddis-700x1050.jpg"
      loading="lazy"
      alt="Muhaddis Profile Image"
    />

    <div class="box">
      <div class="in">
        <div class="one-half no-margin">
          <h5>Who Am I?</h5>

          I make it my goal to look not only to my own interests, but also to
          the interests of others. Browse my
          <a href="#works">Portoflio</a> and discover the creative side of my
          being. Enough said for now, start scrolling.
        </div>

        <div class="one-half no-margin column-last">
          <h5>Roaming Outside the Box</h5>

          I'm never satisfied with the current trends and fads flying around the
          web. Creativity, I believe will never progress unless we climb outside
          the confining box of simplemindedness.
        </div>
      </div>
    </div>

    <!-- <div id="notification-card" class="box">
      <div class="in">
        <div class="three-fourths">
          <h4>Copy</h4>
        </div>

        <div class="one-fourth column-last">
          <a href="" class="btn">
            Download
          </a>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#profile #photo {
  margin-bottom: 20px;
}

#profile p {
  margin-bottom: 0;
}

/* #notification-card .in {
  padding-bottom: 0;
}

#notification-card .in > div {
  margin-bottom: 0;
}

#notification-card .btn {
  width: 72%;
  text-align: center;
  padding-left: 14%;
  padding-right: 14%;
}

#notification-card h4 {
  line-height: 36px;
  margin-bottom: 30px;
} */

#photo,
.box .in {
  max-width: 100%;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  -webkit-box-shadow: 0px 1px 7px 0px rgba(00, 00, 00, 0.7);
  box-shadow: 0px 1px 7px 0px rgba(00, 00, 00, 0.7);
}
</style>
