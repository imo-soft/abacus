<template>
  <div id="mnozenje">

    <div>
      <router-link :to="{ name:'MulBasic', params: { prop_title:'Множење бројева до 5', prop_1_min:1, prop_1_max:5, prop_2_min:2, prop_2_max:5 } }">
        <button class="btn btn-info">Множење бројева до 5</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'MulBasic', params: { prop_title:'Множење бројева до 10', prop_1_min:2, prop_1_max:10, prop_2_min:3, prop_2_max:10 } }">
        <button class="btn btn-info">Множење бројева до 10</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'MulBasic', params: { prop_title:'Множење бројева до 20', prop_1_min:2, prop_1_max:20, prop_2_min:3, prop_2_max:10 } }">
        <button class="btn btn-info">Множење бројева до 20</button>
      </router-link>
    </div>
    <br><br>
    <div>
      <router-link :to="{ name:'MulX', params: { prop_title:'Непознат број до 5', prop_1_min:2, prop_1_max:5, prop_2_min:2, prop_2_max:5 } }">
        <button class="btn btn-info">Непознат број до 5</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'MulX', params: { prop_title:'Непознат број до 10', prop_1_min:2, prop_1_max:10, prop_2_min:2, prop_2_max:10 } }">
        <button class="btn btn-info">Непознат број до 10</button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to="{ name:'MulX', params: { prop_title:'Непознат број до 20', prop_1_min:2, prop_1_max:20, prop_2_min:5, prop_2_max:20 } }">
        <button class="btn btn-info">Непознат број до 20</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Множење",
  data () {
    return {
      title: "Множење"
    }
  }
}
</script>
