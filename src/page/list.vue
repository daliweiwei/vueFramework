<template>
  <div>
    <div>
      <h1>{{ $store.state.list.count }}</h1>
      <button @click="$store.commit('decrement');">-</button>
      <button @click="$store.commit('increment');">+</button>
    </div>
    <input type="text" v-model="name">
    <button @click="handleAdd">添加</button>
    <div class="list">
      <ul>
        <li v-for="(item,index) in addlist" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>

</template>

<script>
  import {mapState} from "vuex"

  export default {
    name: "list",
    computed: {
      ...mapState({
        addlist: state => state.list.addlist,
      })
    },
    data() {
      return {
        name: '',
      }
    },
    methods: {
      handleAdd() {
        let nlist = this.$store.state.list.addlist;
        console.log(this);
        nlist.push(this.name);
        this.$store.commit('setAddlist',nlist)
        this.name = '';
      }
    }

  }
</script>

<style scoped>

</style>
