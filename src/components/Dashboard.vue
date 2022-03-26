<template>
  <div class="is-fullhd overlay">
    <h1>{{ msg }}</h1>
    <!-- <div>
      <router-link :to="{ name:'Add' }">
        <button class="btn btn-info">Сабирање</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'Sub' }">
        <button class="btn btn-info">Одузимање</button>
      </router-link>
    </div> -->

    <img src="../..//static/icons-256.png" alt="Abacus">
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
      desktop: true,
      // md: null
    }
  }//,
  // mounted () {
  //   var md = new MobileDetect(navigator.userAgent);
  //   if (md.mobile()==true || md.is("AndroidOS") || md.is("iPhone")) {
  //     this.desktop = false;
  //   }
  // }
}
</script>