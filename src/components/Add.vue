<template>
  <div id="sabiranje">

    <div>
      <router-link :to="{ name:'AddBasic', params: { prop_title:'Сабирање до 10', prop_min_1:2, prop_max_1:5, prop_min_2:1, prop_max_2:4 } }">
        <button class="btn btn-info">Сабирање до 10</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'AddBasic', params: { prop_title:'Сабирање до 20', prop_min_1:3,prop_max_1:10,prop_min_2:1,prop_max_2:5} }">
        <button class="btn btn-info">Сабирање до 20</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'AddX', params: { prop_title:'Непознат број до 10', prop_min_1:6, prop_max_1:10, prop_min_2:2, prop_max_2:5 } }">
        <button class="btn btn-info">Непознат број до 10</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'AddX', params: { prop_title:'Непознат број до 20', prop_min_1:11, prop_max_1:20, prop_min_2:2, prop_max_2:10 } }">
        <button class="btn btn-info">Непознат број до 20</button>
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
