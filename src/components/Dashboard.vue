<template>
  <div class="is-fullhd overlay">

    <div>
      <router-link :to="{ name:'Sabiranje' }">
        <button class="button is-info is-medium is-rounded">Сабирање</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'Oduzimanje' }">
        <button class="button is-info is-medium is-rounded">Одузимање</button>
      </router-link>    
    </div>
    <br>
    <br>
    <br>        
    <div v-show="desktop" class="bottom_message">
      Скините мобилну апликацију (.apk file)  <a href="/abacus.apk" target="_blank"><b>овде</b></a> <br>
      и ручно је инсталирајте на свој <b>андроид</b> уређај.<br>
      {{ userAgent }}
    </div>

  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
export default { 
  name: 'Dashboard',
  data () {
    return {
      title: "Добродошли",
      desktop: true,
      md: null,
      userAgent:null
    }
  },
  mounted () {
    this.userAgent= navigator.userAgent
    var md = new MobileDetect(navigator.userAgent);
    // var md = new MobileDetect(
    //     'Mozilla/5.0 (Linux; U; Android 4.0.3; en-in; SonyEricssonMT11i' +
    // ' Build/4.1.A.0.562) AppleWebKit/534.30 (KHTML, like Gecko)' +
    // ' Version/4.0 Mobile Safari/534.30');
    console.log(navigator.userAgent);
    console.log (md.os()); 
     console.log (md.is('AndroidOS')); 
     console.log (md.phone()); 
    console.log (md.mobile()); 
     console.log (md.tablet()); 
     console.log (md.os()); 
    if (md.mobile()==true || md.is('AndroidOS')) {
      this.desktop = false;
    }
  }
}
</script>