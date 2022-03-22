<template>
  <div class="about">
    <div>
      <h2>Абакус</h2>
      <br>
      Аутор: Предраг Влајковић<br>
      mailto: predrag.vlajkovic@gmail.com<br>
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
      version: "dev-8"
    }
  },
}
</script>
