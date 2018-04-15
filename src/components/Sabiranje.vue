<template>
  <div class="sabiranje">

    <div>
      <router-link :to="{ name:'Sabiranje1' }">
        <button class="button is-info is-medium is-rounded">Сабирање ниво 1</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'Sabiranje2' }">
        <button class="button is-info is-medium is-rounded">Сабирање ниво 2</button>
      </router-link>    
    </div>
    <br>    
    <div>
      <router-link :to="{ name:'Sabiranje3' }">
        <button class="button is-info is-medium is-rounded">Сабирање ниво 3</button>
      </router-link>    
    </div>
    <br>      
    <div>
      <router-link :to="{ name:'Sabiranje4' }">
        <button class="button is-info is-medium is-rounded">Сабирање ниво 4</button>
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
