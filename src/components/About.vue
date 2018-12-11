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
      // const fileName = "/static/version.txt";
      // fetch(fileName)
      //   .then(response => this.version = response.text())
    
      // var xmlhttp = new XMLHttpRequest();
      // xmlhttp.open("GET", fileName, false);
      //   xmlhttp.send();
      //   if(xmlhttp.readyState === 4)
      //     if (xmlhttp.status===200 || xmlhttp.status == 0) {
      //       this.version = xmlhttp.responseText;
      //     }
    }
  },
}
</script>
