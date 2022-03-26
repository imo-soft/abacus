<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Абакус</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="/add">Сабирање</a>
          <a class="nav-link active" href="/sub">Одузимање</a>
          <a class="nav-link active" href="/about">О...</a>
          <a class="nav-link active" href="https://it-outsource.me" target="_blank">Outsource</a>
          <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props:['navLinks']
}
</script>

<!-- style scoped>
.router-link-active {
  background-color: lightgray;
  color: white;
}
</style -->







