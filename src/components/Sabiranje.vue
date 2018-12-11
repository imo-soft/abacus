<template>
  <div id="sabiranje">

    <div>
      <router-link :to="{ name:'SabiranjeNivo', params: { prop_title:'Сабирање до 5', prop_min_1:2, prop_max_1:5, prop_min_2:1, prop_max_2:4 } }">
        <button class="btn btn-info">Сабирање до 5</button>
      </router-link>    
    </div>
    <br>
    <div>
      <router-link :to="{ name:'SabiranjeNivo', params: { prop_title:'Сабирање до 10', prop_min_1:3,prop_max_1:10,prop_min_2:1,prop_max_2:5} }">
        <button class="btn btn-info">Сабирање до 10</button>
      </router-link>    
    </div>
    <br>    
    <div>
      <router-link :to="{ name:'Sabiranje3' }">
        <button class="btn btn-info">Непознат број до 5</button>
      </router-link>    
    </div>
    <br>      
    <div>
      <router-link :to="{ name:'Sabiranje4' }">
        <button class="btn btn-info">Непознат број до 10</button>
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
