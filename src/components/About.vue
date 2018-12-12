<template>
  <div class="about">
    <div>
      <b>Абакус</b> v{{ version }}<br>
      Аутор: Предраг Влајковић<br>
      mailto: abacus@softwarepieces.com<br>
      <br>
      Посвећено мом сину Огњену, са жељом да буде успешан математичар
    </div>
    <br>
    <img src="/static/poster.png" alt="Ognjen">    
    <br>       
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: "О нама",
      version: "1.1"
    }
  },
  mounted () {
    this.getVersion();
  },  
  methods : {
    getVersion () {
      const fileName = "../static/version.txt";
      fetch(fileName)
        .then(response => response.text())
        .then(text => this.version = text)
    }
  },
}
</script>
