<template>
  <div class="oduzimanje">

    <div>
      <router-link :to="{ name:'OduzimanjeNivo', params: { prop_title:'Разлика два броја до 10', prop_max_1:10, prop_max_2:9} }">
        <button class="button is-info is-medium is-rounded">Разлика два броја до 10</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'OduzimanjeNivo', params: { prop_title:'Разлика два броја до 20', prop_max_1:20, prop_max_2:10} }">
        <button class="button is-info is-medium is-rounded">Разлика два броја до 20</button>
      </router-link>    
    </div>
    <br>    
    <div>
      <router-link :to="{ name:'Oduzimanje3' }">
        <button class="button is-info is-medium is-rounded">Непознат број до 10</button>
      </router-link>    
    </div>
    <br>    
    <div>
      <router-link :to="{ name:'Oduzimanje4' }">
        <button class="button is-info is-medium is-rounded">Непознат број до 20</button>
      </router-link>    
    </div>    
  </div>
</template>

<script>
export default {
  name: 'Oduzimanje',
  data () {
    return {
      title: "Одузимање"
    }
  }
}
</script>
