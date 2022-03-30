<template>
  <div class="dash-container">
    <h1>{{ title }}</h1>
    <img src="/assets/icons-144.png" alt="Abacus">
    <br>
    Вежбајмо алгебру
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