<template>
  <header id="control">
    <div id="side">
      <div id="logo">
        <h1>
          <a href="https://www.muhaddis.info/"
            ><img src="@/assets/images/logo.png" alt="Muhaddis"
          /></a>
        </h1>
        <client-only>
          <h4 class="sub">
            <vue-typer
              :repeat="Infinity"
              :text="['Security Researcher', 'Web Developer']"
              erase-style="backspace"
              :erase-delay="50"
              :pre-type-delay="500"
              :type-delay="100"
              caret-animation="expand"
            ></vue-typer>
          </h4>
        </client-only>
      </div>

      <nav id="nav">
        <!-- Screen Size > 880px -->
        <ul class="regular">
          <li class="nav_1">
            <a v-smooth-scroll href="#profile">Profile<span></span></a>
          </li>
          <li class="nav_2">
            <a v-smooth-scroll href="#skills">Skills<span></span></a>
          </li>
          <li class="nav_3">
            <a v-smooth-scroll href="#works">Works<span></span></a>
          </li>
          <li class="nav_5">
            <a v-smooth-scroll href="#blog">Blog<span></span></a>
          </li>
          <li class="nav_6">
            <a v-smooth-scroll href="#contact">Contact<span></span></a>
          </li>
        </ul>

        <!-- Screen Size < 880px -->
        <ul class="mobile">
          <li class="nav_1">
            <a v-smooth-scroll href="#profile"><span></span></a>
          </li>
          <li class="nav_2">
            <a v-smooth-scroll href="#skills"><span></span></a>
          </li>
          <li class="nav_3">
            <a v-smooth-scroll href="#works"><span></span></a>
          </li>
          <li class="nav_5">
            <a v-smooth-scroll href="#blog"><span></span></a>
          </li>
          <li class="nav_6">
            <a v-smooth-scroll href="#contact"><span></span></a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style scoped>
#control {
  width: 34%;
  min-width: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-box-shadow: 0px 1px 7px 0px rgba(00, 00, 00, 0.7);
  box-shadow: 0px 1px 7px 0px rgba(00, 00, 00, 0.7);
  background-color: rgba(0, 0, 0, 0.8);
}

#control #side {
  width: 240px;
  padding: 78px 30px 0 30px;
  float: right;
}

#side li,
#social li {
  list-style: none;
}

#side #logo {
  text-align: right;
}

#side #logo h1 {
  overflow: hidden;
  margin-bottom: 10px;
}

#side #logo a {
  font-style: normal;
  text-decoration: none;
  display: block;
  float: right;
}

#side #logo .plain_text {
  margin: -6px -7px 10px 0;
}

#side #nav {
  width: 100%;
  margin-top: 60px;
  overflow: hidden;
}

#side #nav .mobile {
  display: none;
}

#side #nav ul li {
  margin-bottom: 30px;
  float: right;
  clear: both;
  opacity: 0.5;
  transition: 250ms;
}

#side #nav ul li:hover {
  opacity: 1;
}

#side #nav ul li a,
#side #nav ul li span {
  display: block;
  float: right;
}

#side #nav ul li a {
  font-size: 12px;
  font-style: normal;
  text-align: right;
  line-height: 17px;
}

#side #nav ul li span {
  width: 26px;
  height: 18px;
  margin-left: 10px;
  display: block;
}

#side #nav ul .nav_1 span {
  height: 17px;
  background: url('~assets/images/nav.png') top right no-repeat;
}

#side #nav ul .nav_2 span {
  height: 16px;
  background: url('~assets/images/nav.png') right -47px no-repeat;
}

#side #nav ul .nav_3 span {
  height: 21px;
  background: url('~assets/images/nav.png') right -93px no-repeat;
}

#side #nav ul .nav_4 span {
  height: 22px;
  background: url('~assets/images/nav.png') right -141px no-repeat;
}

#side #nav ul .nav_5 span {
  height: 23px;
  background: url('~assets/images/nav.png') right -193px no-repeat;
}

#side #nav ul .nav_6 span {
  height: 16px;
  background: url('~assets/images/nav.png') bottom right no-repeat;
}
</style>
