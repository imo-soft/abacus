<template>
  <div class="sabiranje">

    <div>
      <router-link :to="{ name:'Sabiranje1' }">
        <button class="button is-info is-medium is-rounded">Сабирање до 5</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'Sabiranje2' }">
        <button class="button is-info is-medium is-rounded">Сабирање до 10</button>
      </router-link>    
    </div>
    <br>    
    <div>
      <router-link :to="{ name:'Sabiranje3' }">
        <button class="button is-info is-medium is-rounded">Непознат број до 5</button>
      </router-link>    
    </div>
    <br>      
    <div>
      <router-link :to="{ name:'Sabiranje4' }">
        <button class="button is-info is-medium is-rounded">Непознат број до 10</button>
      </router-link>    
    </div>    
  </div>
</template>

<script>
export default {
  name: 'Sabiranje',
  data () {
    return {
      title: "Сабирање"
    }
  }
}
</script>
