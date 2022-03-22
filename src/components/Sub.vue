<template>
  <div class="oduzimanje">

    <div>
      <router-link :to="{ name:'SubBasic', params: { prop_title:'Разлика два броја до 10', prop_max_1:10, prop_max_2:9} }">
        <button class="btn btn-info">Разлика два броја до 10</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'SubBasic', params: { prop_title:'Разлика два броја до 20', prop_max_1:20, prop_max_2:10} }">
        <button class="btn btn-info">Разлика два броја до 20</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'SubX', params: { prop_title:'Непознат број до 10', prop_min_1:4, prop_max_1:10, prop_min_2:1, prop_max_2:6} }">
        <button class="btn btn-info">Непознат број до 10</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'SubX', params: { prop_title:'Непознат број до 20', prop_min_1:12, prop_max_1:20, prop_min_2:2, prop_max_2:10} }">
        <button class="btn btn-info">Непознат број до 20</button>
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
