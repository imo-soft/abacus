<template>
  <div class="is-fullhd overlay">
    <h1>{{ msg }}</h1>
    <img src="/assets/icons-256.png" alt="Abacus">
    <router-view></router-view>
  </div>
</template>

<script>
import MobileDetect from "mobile-detect";
export default {
  name: "Dashboard",
  props: {
    msg: String
  },
  data () {
    return {
      title: "Добродошли",
      desktop: true
    }
  }
}
</script>