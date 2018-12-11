<template>

  <nav class="navbar navbar-light navbar-expand-sm navbar-light navbar-jw fixed-top">

    <a class="navbar-brand" href="/">
      <img src="/static/abacus.png" height="32px" class="d-inline-block align-top" alt="Abacus"> Abacus
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">

    <ul class="navbar-nav mr-auto">

      <li class="nav-item">
        <router-link class="nav-link" :class="activeClass('Sabiranje')" :to="{ name:'Sabiranje' }">Сабирање</router-link>
      </li>       
      <li class="nav-item">
        <router-link class="nav-link" :class="activeClass('Oduzimanje')" :to="{ name:'Oduzimanje' }">Одузимање</router-link>
      </li>      
      <li class="nav-item">
        <router-link class="nav-link" :class="activeClass('About')" :to="{ name:'About' }">О...</router-link>
      </li>      
    </ul>
    </div>
  </nav>
</template>

<script type="text/javascript">

export default {
  name: 'NavBar',
  components: { },
  
  data () { 
    return {
    }
  },
  created () { 
    // var currentRoute = this.$router;
  },
  watch: {
    '$route' () {
      $('#navbarNav').collapse('hide');
    }   
  },
  methods: {
    activeClass: function (...names) {
      for (let name of names) {
        if (name == this.$router.name)      
          return 'router-link-active';
        else
          return 'active';
      }
    },
  }
}
</script>

<style scoped>
.router-link-active {
  background-color: lightgray;
  color: white;
}
</style>







