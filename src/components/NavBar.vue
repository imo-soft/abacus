<template>
    <!-- <nav class="navbar navbar-light navbar-expand-sm navbar-light navbar-jw fixed-top"> -->
    <nav id="navbar" class="navbar">
      <div class="brand-title">
        <li class="nav-link">
            <router-link to="/"> Абакус </router-link>
        </li>
      </div>
      <a href = "#" class="mobile-nav-toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div class="navbar-links">
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" to="/add">Сабирање</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/sub">Одузимање</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">О...</router-link>
          </li>
          <li class="nav-item">
              <a href="https://it-outsource.me" target="_blank" class="nav-link">IT-outsource.me</a>
          </li>
        </ul>

      </div>

      <!-- <i class="bi bi-list mobile-nav-toggle"><a href="/" ></a></i> -->
    </nav>
</template>

<script>
export default {
  props:['navLinks']
}
</script>

<style scoped>
.router-link-active {
  background-color: lightgray;
  color: white;
}
</style>







