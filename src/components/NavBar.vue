<template>
  <div id="nav-bar">

    <nav class="navbar is-transparent" role="navigation">
 
      <div class="navbar-brand">

        <router-link 
          class="navbar-item"
          :class="activeClass('Dashboard')" :to="{ name:'Dashboard' }">
            <img src="/static/abacus.png" alt="Abacus">
        </router-link>

        <div class="navbar-burger burger" data-target="navMenubd-example">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
      
      <div id="navMenubd-example" class="navbar-menu">
        <div class="navbar-start">
 
          <router-link class="navbar-item" :class="activeClass('Sabiranje')" :to="{ name:'Sabiranje' }">
            Сабирање
          </router-link>
          <router-link class="navbar-item" :class="activeClass('Oduzimanje')" :to="{ name:'Oduzimanje' }">
            Одузимање
          </router-link>
          <router-link class="navbar-item" :class="activeClass('About')" :to="{ name:'About' }">
            О...
          </router-link>

        </div>
      </div>
      
    </nav>
    <br/> 
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    activeClass: function (...names) {
      for (let name of names) {
        if (name == this.$route.name) {
          return 'link-active'
          alert (name)
        }
      }
    }   
  }  
}

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>
