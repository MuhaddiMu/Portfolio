<template>
  <li>
    <div class="animation-view animation">
      <img
        :src="require(`@/assets/images/Honors/${projectCoverImage}`)"
        :alt="projectTitle"
      />
      <div class="mask"></div>
      <div class="content">
        <h2>{{ projectTitle }}</h2>
        <p>
          {{ projectCaption }}
        </p>
        <button v-if="readMore !== null" class="info btn">
          <a :href="readMore">Read More</a>
        </button>
        <a v-if="projectUrl !== null" :href="projectUrl">
          <svg
            class="info"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <rect
                id="canvas_background"
                fill="none"
                height="18"
                width="18"
                y="-1"
                x="-1"
              />
            </g>
            <g>
              <g id="svg_5" stroke="null">
                <path
                  id="svg_3"
                  stroke="null"
                  fill="#FFFFFF"
                  class="active-path"
                  d="m5.942546,4.061556c-1.870248,1.935038 -1.462126,5.146299 0.680214,6.568851c0.070589,0.046894 0.164502,0.03759 0.225136,-0.021648c0.451016,-0.440688 0.832558,-0.867543 1.166649,-1.410424c0.051112,-0.083057 0.019322,-0.190833 -0.066433,-0.237293c-0.326771,-0.177032 -0.651929,-0.508982 -0.834978,-0.859634l-0.000217,0.000124c-0.219274,-0.436625 -0.293926,-0.926068 -0.177838,-1.431545c0.000124,0.000031 0.000248,0.000062 0.000372,0.000062c0.13358,-0.647153 0.82834,-1.249148 1.358971,-1.805893c-0.001117,-0.000372 -0.002202,-0.000775 -0.003319,-0.001148l1.988135,-2.029167c0.792301,-0.808646 2.095539,-0.815314 2.896059,-0.014794c0.808615,0.79227 0.821982,2.102083 0.029712,2.910698l-1.204239,1.238355c-0.055733,0.057315 -0.073815,0.140931 -0.047732,0.216514c0.277271,0.804056 0.345473,1.937798 0.159664,2.794362c-0.00521,0.023974 0.024378,0.039668 0.041529,0.022144l2.562992,-2.615904c1.637297,-1.671072 1.623402,-4.391805 -0.03086,-6.046067c-1.688223,-1.688223 -4.43659,-1.674173 -6.107476,0.03117l-2.626076,2.680259c-0.003474,0.00366 -0.006761,0.007381 -0.010266,0.010979z"
                />
                <path
                  id="svg_4"
                  stroke="null"
                  fill="#FFFFFF"
                  class="active-path"
                  d="m10.734037,10.998892c-0.000031,0.000093 -0.000093,0.000186 -0.000124,0.000279c0.001644,-0.000682 0.003163,-0.001334 0.004807,-0.002047c0.523063,-0.956462 0.626032,-2.053421 0.380891,-3.122777l-0.001117,0.001148l-0.00121,-0.000527c-0.232765,-0.95243 -0.871451,-1.898192 -1.73887,-2.480493c-0.074621,-0.050089 -0.193811,-0.044289 -0.263687,0.01222c-0.439385,0.355273 -0.869466,0.810848 -1.15325,1.392219c-0.044568,0.091276 -0.011196,0.200913 0.076637,0.251901c0.329345,0.191206 0.626776,0.471144 0.825921,0.842793l0.00031,-0.000217c0.155198,0.262539 0.308131,0.760697 0.20907,1.295949c-0.000062,0 -0.000155,0 -0.000217,0c-0.092424,0.709647 -0.809049,1.360584 -1.378727,1.947134l0.000279,0.000279c-0.433647,0.443448 -1.536003,1.567235 -1.977404,2.018188c-0.79227,0.808615 -2.102083,0.821982 -2.910698,0.029712c-0.808615,-0.79227 -0.821982,-2.102083 -0.029712,-2.910698l1.207805,-1.242077c0.054741,-0.056292 0.07335,-0.138108 0.049003,-0.212761c-0.268184,-0.822851 -0.341658,-1.931037 -0.17238,-2.786639c0.004714,-0.02385 -0.024626,-0.039079 -0.041653,-0.02171l-2.524441,2.576546c-1.654076,1.688223 -1.640057,4.436869 0.031201,6.108096c1.68813,1.654014 4.422603,1.626069 6.076616,-0.06206c0.574609,-0.642749 3.034323,-2.920127 3.330947,-3.634457z"
                />
              </g>
            </g>
          </svg>
        </a>
        <a v-if="githubUrl !== null" :href="githubUrl">
          <svg
            class="info"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <rect
                id="canvas_background"
                fill="none"
                height="18"
                width="18"
                y="-1"
                x="-1"
              />
            </g>
            <g>
              <path
                id="svg_2"
                stroke="null"
                fill="#FFFFFF"
                class="active-path"
                d="m8,0.488806c-4.330302,0 -7.83765,3.448566 -7.83765,7.701797c0,3.4035 2.245487,6.289714 5.358993,7.307302c0.391883,0.072498 0.535573,-0.165897 0.535573,-0.370329c0,-0.182879 -0.006531,-0.667507 -0.009797,-1.309541c-2.180173,0.464381 -2.639982,-1.033264 -2.639982,-1.033264c-0.356613,-0.88892 -0.871939,-1.126662 -0.871939,-1.126662c-0.70996,-0.477444 0.054864,-0.467646 0.054864,-0.467646c0.787031,0.053557 1.200467,0.793562 1.200467,0.793562c0.698857,1.177607 1.834663,0.837322 2.282716,0.640728c0.070539,-0.498344 0.272358,-0.837322 0.496385,-1.029998c-1.740611,-0.192676 -3.57005,-0.854957 -3.57005,-3.805832c0,-0.840588 0.303709,-1.527689 0.806625,-2.066527c-0.088174,-0.194635 -0.352694,-0.977747 0.068579,-2.038442c0,0 0.656403,-0.206391 2.155354,0.789643c0.627012,-0.171122 1.293212,-0.25603 1.959413,-0.259949c0.6662,0.003919 1.332401,0.088827 1.959413,0.259949c1.489154,-0.996035 2.145557,-0.789643 2.145557,-0.789643c0.421274,1.060695 0.156753,1.843807 0.078377,2.038442c0.49965,0.538838 0.803359,1.225939 0.803359,2.066527c0,2.958713 -1.832051,3.609891 -3.575928,3.799301c0.274318,0.231211 0.529041,0.703429 0.529041,1.425146c0,1.030651 -0.009797,1.858829 -0.009797,2.108981c0,0.201819 0.137159,0.442827 0.538838,0.365757c3.135713,-1.011057 5.37924,-3.899231 5.37924,-7.297505c0,-4.253231 -3.509308,-7.701797 -7.83765,-7.701797z"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  </li>
</template>

<script scoped>
export default {
  props: {
    projectCoverImage: {
      type: [String],
      required: true
    },
    projectCaption: {
      type: [String],
      required: true
    },
    projectTitle: {
      type: [String],
      required: true
    },
    readMore: {
      type: [String],
      required: false,
      default: null
    },
    projectUrl: {
      type: [String],
      required: false,
      default: null
    },
    githubUrl: {
      type: [String],
      required: false,
      default: null
    }
  }
}
</script>

<style scoped>
.animation-view {
  max-width: 100%;
  width: 100%;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  overflow: hidden;
  position: relative;
  text-align: center;
  background: #fff;
  margin-top: 5px;
}
.animation-view .mask,
.animation-view .content {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
}
.animation-view img {
  display: block;
  position: relative;
}
.animation-view h2 {
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
.animation-view p {
  display: none;
  font-style: italic;
  font-size: 12px;
  position: relative;
  color: #fff;
  line-height: normal;
  padding: 5px 5px 5px;
  margin-bottom: unset;
  text-align: center;
}
.animation-view button.info,
.animation-view svg.info {
  display: none;
  line-height: 24px;
}

.animation-view button.info a,
.animation-view svg.info a {
  font-style: normal;
}

.animation img {
  transition: all 0.2s linear;
}
.animation .mask {
  opacity: 0;
  background-color: rgba(18, 18, 18, 0.7);
  transition: all 0.4s ease-in-out;
}
.animation h2 {
  transform: translateY(-100px);
  opacity: 0;
  transition: all 0.2s ease-in-out;
}
.animation p {
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.2s linear;
}
.animation button.info,
.animation svg.info {
  opacity: 0;
  transition: all 0.2s ease-in-out;
}
.animation button.info:hover {
  background-color: #ff4343;
}

.animation svg.info:hover {
  opacity: 1;
  cursor: pointer;
}

.animation:hover img {
  transform: scale(1.1);
}
.animation:hover .mask {
  opacity: 1;
}
.animation:hover h2,
.animation:hover p,
.animation:hover button.info,
.animation:hover svg.info {
  opacity: 0.8;
  transform: translateY(0px);
}

.animation:hover svg {
  padding: 5px;
}

.animation:hover svg.info:hover {
  opacity: 1;
}
.animation:hover h2 {
  display: block;
}
.animation:hover p {
  transition-delay: 0.1s;
  display: block;
}
.animation:hover button.info,
.animation:hover svg.info {
  display: inline-block;
}
@media only screen and (max-width: 600px) {
  .animation-view p {
    line-height: normal;
    margin-bottom: unset;
  }
}
</style>
