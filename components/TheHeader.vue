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
        <noscript>
          <h4 class="sub">
            Security Researcher
          </h4>
        </noscript>
      </div>

      <nav id="nav">
        <!-- Screen Size > 880px -->
        <ul class="regular">
          <li class="nav_1 active">
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

@media only screen and (max-width: 880px) {
  #control {
    width: 100%;
    height: 150px;
    top: 0;
    right: 0;
    bottom: auto;
    z-index: 10001;
  }

  #control #side {
    width: 88%;
    padding: 20px 6% 0 6%;
    float: none;
    overflow: hidden;
  }

  #control #side #logo {
    width: 100%;
    float: left;
    text-align: center;
  }

  #control #side #logo h1 {
    font-size: 24px;
    margin: 0 -5px 8px 0;
    text-align: center;
  }

  #control #side #logo .sub {
    font-size: 12px;
    margin-bottom: 15px;
  }

  #control #side #logo a {
    width: 214px;
    margin: 0 auto;
    float: none;
  }

  #control #side #nav {
    float: left;
    position: relative;
    margin: 0;
  }

  #control #side #nav .mobile {
    clear: left;
    float: left;
    margin: 0;
    padding: 0;
    position: relative;
    left: 50%;
    text-align: center;
    display: block;
  }
  #control #side #nav .regular {
    display: none;
  }

  #control #side #nav ul li {
    width: auto;
    display: block;
    clear: none;
    float: left;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    right: 50%;
    height: 26px;
    margin: 0 10px;
  }

  #control #side #nav ul li span {
    margin: 0;
  }

  #secondary_nav {
    width: 100%;
    height: 12px;
    padding-top: 16px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('~assets/images/trans.png') repeat;
  }

  #secondary_nav > ul {
    clear: left;
    float: left;
    margin: 0;
    padding: 0;
    position: relative;
    left: 50%;
    text-align: center;
    display: block;
  }

  #secondary_nav > ul > li {
    width: auto;
    display: block;
    clear: none;
    float: left;
    list-style: none;
    position: relative;
    right: 50%;
  }

  #secondary_nav ul li ul {
    left: 0;
    margin-right: 0;
  }

  #secondary_nav ul li ul li a {
    text-align: left;
  }
}
</style>
