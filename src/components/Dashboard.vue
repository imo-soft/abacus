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
    <div class="bottom_message">
      Скините мобилну апликацију (.apk file)  <a href="/abacus.apk" target="_blank"><b>овде</b></a> <br>
      и ручно је инсталирајте на свој <b>андроид</b> уређај.
    </div>

  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      title: "Добродошли"
    }
  }
}
</script>
