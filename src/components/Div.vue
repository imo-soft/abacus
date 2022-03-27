<template>
  <div id="deljenje">

    <div>
      <router-link :to="{ name:'DivBasic', params: { prop_title:'Дељење бројева до 20', prop_1_min:2, prop_1_max:4, prop_2_min:3, prop_2_max:5 } }">
        <button class="btn btn-info">Дељење бројева до 20</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'DivBasic', params: { prop_title:'Дељење бројева до 100', prop_1_min:2, prop_1_max:9, prop_2_min:3, prop_2_max:10 } }">
        <button class="btn btn-info">Дељење бројева до 100</button>
      </router-link>
    </div>
    <br><br>
    <div>
      <router-link :to="{ name:'DivX', params: { prop_title:'Непознат број до 5', prop_1_min:2, prop_1_max:5, prop_2_min:2, prop_2_max:5 } }">
        <button class="btn btn-info">Непознат број до 5</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'DivX', params: { prop_title:'Непознат број до 10', prop_1_min:2, prop_1_max:10, prop_2_min:2, prop_2_max:10 } }">
        <button class="btn btn-info">Непознат број до 10</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Дељење",
  data () {
    return {
      title: "Дељење"
    }
  }
}
</script>
