<template>
  <div id="honors" class="panel box">
    <div class="in">
      <h2>Achievements</h2>

      <div>
        <p>
          List of my security findings and acknowledgements
        </p>

        <ul>
          <TheProjectItem />
          <TheProjectItem />
          <TheProjectItem />
          <TheProjectItem />
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

<style>
#honors ul {
  column-count: 2;
  column-gap: 5;
  width: 100%;
  overflow: hidden;
}

#honors ul li {
  display: inline-block;
  width: 100%;
  overflow: hidden;
}

#honors ul li img {
  max-width: 100%;
  width: 100%;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

@media only screen and (max-width: 600px) {
  #honors ul li {
    width: 100%;
  }
  #honors ul {
    column-count: 1;
    column-gap: 0;
  }
}
</style>
