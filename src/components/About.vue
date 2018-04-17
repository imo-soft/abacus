<template>
  <div class="about">

    <div>
      Абакус v{{ version }}<br><br>
      Аутор: Предраг Влајковић<br>
      mailto: abacus@softwarepieces.com<br>
      <br>
      Посвећено мом сину Огњену...
    </div>
    <br>
    <img src="/static/poster.png" alt="Ognjen">    
    <br>
    <br>        
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: "О нама",
      version: null
    }
  },
  mounted () {
    this.getVersion();
  },  
  methods : {
    getVersion () {
      var result = null;
      const fileName = "/static/version.txt";

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", fileName, false);
        xmlhttp.send();
        if (xmlhttp.status==200) {
          this.version = xmlhttp.responseText;
        }
    }
  },
}
</script>
