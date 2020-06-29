<template>
  <transition name="fade">
    <a v-if="showScroll" class="jump" @click="Scroll">Top</a>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showScroll: false,
      lastScrollPosition: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition > 700) {
        this.showScroll = true
      } else {
        this.showScroll = false
      }
    },
    Scroll() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
