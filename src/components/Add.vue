<template>
  <div id="sabiranje">

    <div>
      <router-link :to="{ name:'AddBasic', params: { prop_title:'Сабирање до 10', prop_1_min:1, prop_1_max:5, prop_2_min:2, prop_2_max:5 } }">
        <button class="btn btn-info">Сабирање до 10</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'AddBasic', params: { prop_title:'Сабирање до 20', prop_1_min:1, prop_1_max:10, prop_2_min:3, prop_2_max:10 } }">
        <button class="btn btn-info">Сабирање до 20</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'AddBasic', params: { prop_title:'Сабирање до 100', prop_1_min:1, prop_1_max:70, prop_2_min:3, prop_2_max:30 } }">
        <button class="btn btn-info">Сабирање до 100</button>
      </router-link>
    </div>
    <br><br>
    <div>
      <router-link :to="{ name:'AddX', params: { prop_title:'Непознат број до 10', prop_1_min:4, prop_1_max:10, prop_2_min:1, prop_2_max:9 } }">
        <button class="btn btn-info">Непознат број до 10</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'AddX', params: { prop_title:'Непознат број до 20', prop_1_min:7, prop_1_max:20, prop_2_min:2, prop_2_max:18 } }">
        <button class="btn btn-info">Непознат број до 20</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'AddX', params: { prop_title:'Непознат број до 100', prop_1_min:30, prop_1_max:99, prop_2_min:5, prop_2_max:30 } }">
        <button class="btn btn-info">Непознат број до 100</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sabiranje",
  data () {
    return {
      title: "Сабирање"
    }
  }
}
</script>
